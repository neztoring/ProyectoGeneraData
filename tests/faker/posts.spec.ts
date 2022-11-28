import { USERNAME, PASSWORD,GhostURL } from '../../properties.json';
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.goto(GhostURL + '/#/editor/post');
});

test('POST01. Post puede tener título vacío', async ({ page }) => {
  await page.getByPlaceholder('Post title').fill('0');
  await page.locator('#ember19 div').filter({ hasText: 'Add feature image Upload' }).nth(1).click();
  await page.getByPlaceholder('Post title').click();
  await page.getByPlaceholder('Post title').fill('');
  await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POST02. Post puede tener título de longitud 1', async ({ page }) => {
  await page.getByPlaceholder('Post title').fill(faker.datatype.string(1));
  await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POST03. Post puede tener título de longitud 254', async ({ page }) => {
  await page.getByPlaceholder('Post title').fill(faker.datatype.string(254));
  await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POST04. Post NO puede tener título de longitud 254', async ({ page }) => {
  await page.getByPlaceholder('Post title').fill(faker.datatype.string(255));
  await page.getByRole('button', { name: 'Publish' }).click();
  const error = page.getByText('Validation failed: Title cannot be longer than 255 characters.');
  expect(error).toBeVisible
  page.close();
});
