import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD, GhostURL } from '../../properties.json';
import { faker } from '@faker-js/faker';

const repeatedUser = faker.internet.email();

test.beforeEach(async ({ page }) => {
    await page.goto(GhostURL);
    await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
    await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
    await page.locator('#ember10').click();
    await page.goto(GhostURL + '/#/members');
});

test('No debes ser capaz de crear un miembro sin email', async ({ page }) => {
  await page.click('text=New member');
  await page.locator('id=member-name').fill(faker.name.fullName());
  await page.click('text=Save');
  await expect(page.getByText(/Retry/)).toBeTruthy();
});

test('Debes ser capaz de crear un miembro sin nombre', async ({ page }) => {
  await page.click('text=New member');
  await page.locator('id=member-email').fill(repeatedUser);
  await page.click('text=Save');
  await page.goto(GhostURL + '/#/members');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('No debes ser capaz de crear un miembro con email repetido', async ({ page }) => {
  await page.click('text=New member');
  await page.locator('id=member-email').fill(repeatedUser);
  await page.click('text=Save');
  await page.goto(GhostURL+'/#/members');
  await expect(page.getByText(/Retry/)).toBeTruthy();
});

test('Debes ser capaz de crear un miembro con nombre y email', async ({ page }) => {
  await page.click('text=New member');
  await page.locator('id=member-name').fill(faker.name.findName());
  await page.locator('id=member-email').fill(faker.internet.email());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes ser capaz de editar un miembro con email', async ({ page }) => {
  await page.locator('#ember68').click();
  await page.locator('#member-name').fill(faker.name.fullName());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes ser capaz de editar un miembro sin nombre', async ({ page }) => {
  await page.locator('#ember68').click();
  await page.locator('id=member-email').fill(repeatedUser);
  await page.click('text=Save');
  await page.goto(GhostURL+'/#/members');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('No debes ser capaz de editar un miembro con email repetido', async ({ page }) => {
  await page.locator('#ember68').click();
  await page.locator('id=member-email').fill(repeatedUser);
  await page.click('text=Save');
  await page.goto(GhostURL+'/#/members');
  await expect(page.getByText(/Retry/)).toBeTruthy();
});

test('Debes ser capaz de editar un miembro con nombre y email', async ({ page }) => {
  await page.locator('#ember68').click();
  await page.locator('id=member-name').fill(faker.name.fullName());
  await page.locator('id=member-email').fill(faker.internet.email());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes ser capaz de editar un miembro con nota', async ({ page }) => {
  await page.locator('#ember68').click();
  await page.locator('#member-note').fill(faker.datatype.string());
  await page.click('text=Save');
  await expect(page.getByText(/Saved/)).toBeTruthy();
});

test('Debes ser capaz de buscar un usuario', async ({ page }) => {
  await page.getByPlaceholder('Search members...').fill(repeatedUser);
  await expect(page.getByText(repeatedUser)).toBeTruthy();
});