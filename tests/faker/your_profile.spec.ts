import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD, GhostURL } from '../../properties.json';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.locator('#ember10').click();
  await page.goto(GhostURL+ '/#/settings/staff');
});

test('Debes poder editar un perfil con nombre', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-name').fill(faker.name.fullName());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con slug', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-slug').fill(faker.internet.userName());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con location', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-location').fill(faker.address.cityName());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con sitio web', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-website').fill(faker.internet.domainName());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con cuenta de facebook', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-facebook').fill(faker.internet.userName());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con cuenta de twitter', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-twitter').fill(faker.internet.userName());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con biografia', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-bio').fill(faker.datatype.string());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con todos los datos', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-name').fill(faker.name.fullName());
  await page.locator('#user-slug').fill(faker.internet.userName());
  await page.locator('#user-location').fill(faker.address.cityName());
  await page.locator('#user-website').fill(faker.internet.domainName());
  await page.locator('#user-facebook').fill(faker.internet.userName());
  await page.locator('#user-twitter').fill(faker.internet.userName());
  await page.locator('#user-bio').fill(faker.datatype.string());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('DNo debes poder editar el email con un nombre', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-email').fill(faker.name.fullName());
  await page.click('text=Save');
  await expect(page.getByText(/Retry/)).toBeTruthy();
});