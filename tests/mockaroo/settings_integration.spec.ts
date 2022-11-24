import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD } from '../../properties.json';
import { XMLHttpRequest } from 'xmlhttprequest';

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

test('Crear una nueva integracion', async ({ page }) => {
  await page.goto('http://localhost:2368/ghost/');
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.locator('#ember10').click();
  await page.goto('http://localhost:2368/ghost/#/settings/integrations');
  await page.getByText(/Add custom integration/).click();
  await page.locator('#new-integration-name').fill(httpGet("https://my.api.mockaroo.com/ghost-integration?key=700a40d0"));
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText(/Created/)).toBeTruthy();
});