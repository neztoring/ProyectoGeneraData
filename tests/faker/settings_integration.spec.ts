import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD, GhostURL } from '../../properties.json';
import { faker } from '@faker-js/faker';

test('Crear una nueva integracion', async ({ page }) => {
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.locator('#ember10').click();
  await page.goto(GhostURL + '/#/settings/integrations');
  await page.getByText(/Add custom integration/).click();
  await page.locator('#new-integration-name').fill(faker.system.commonFileName());
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByText(/Created/)).toBeTruthy();
});