import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD, GhostURL } from '../../properties.json';
import { faker } from '@faker-js/faker';
import { data } from '../../schema/ghost_profile.json';

const n = faker.datatype.number({max: data.length});

test.beforeEach(async ({ page }) => {
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.locator('#ember10').click();
  await page.goto(GhostURL + '#/settings/staff');
});

test('Debes poder editar un perfil con nombre', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-name').fill(data[n].name);
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});


test('Debes poder editar un perfil con slug', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-slug').fill(data[n].slug);
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con location', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-location').fill(data[n].location);
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con sitio web', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-website').fill(data[n].website);
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con cuenta de facebook', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-facebook').fill(data[n].facebook);
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con cuenta de twitter', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-twitter').fill(data[n].twitter);
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con biografia', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-bio').fill(data[n].Bio);
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes poder editar un perfil con todos los datos', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-name').fill(data[n].name);
  await page.locator('#user-slug').fill(data[n].slug);
  await page.locator('#user-location').fill(data[n].location);
  await page.locator('#user-website').fill(data[n].website);
  await page.locator('#user-facebook').fill(data[n].facebook);
  await page.locator('#user-twitter').fill(data[n].twitter);
  await page.locator('#user-bio').fill(data[n].Bio);
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('No debes poder editar el email con un nombre', async ({ page }) => {
  await page.click('text=OWNER');
  await page.locator('#user-email').fill(data[n].name);
  await page.click('text=Save');
  await expect(page.getByText(/Retry/)).toBeTruthy();
});