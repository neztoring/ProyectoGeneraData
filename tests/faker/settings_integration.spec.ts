import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD } from '../../properties.json';
import { faker } from '@faker-js/faker';

test('Crear una nueva integracion', async ({ page }) => {
  await page.goto('http://localhost:2368/ghost/');
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.locator('#ember10').click();
  await page.goto('http://localhost:2368/ghost/#/settings/integrations');
  await page.locator('#ember49').click();
  await page.locator('#new-integration-name').fill(faker.system.commonFileName());
  await expect(page.getByText(/Created/)).toBeTruthy();
});