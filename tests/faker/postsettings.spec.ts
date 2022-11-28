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
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Post title').click();
  await page.getByPlaceholder('Post title').fill('1');
});

test('POSTSETTINGS01. Post debe tener un autor relacionado', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Site Tester remove element' }).getByRole('button', { name: 'remove element' }).click();
  const error = page.getByText('At least one author is required.');
  expect(error).toBeVisible
  page.close();
});

test('POSTSETTINGS02. Post puede tener un excerpt de longitud 1', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByLabel('Excerpt').click();
  await page.getByLabel('Excerpt').fill(faker.datatype.string(1));
  await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POSTSETTINGS03. Post puede tener un excerpt de longitud 300', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByLabel('Excerpt').click();
  await page.getByLabel('Excerpt').fill(faker.datatype.string(300));
  await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POSTSETTINGS04. Post NO puede tener un excerpt de longitud 301', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByLabel('Excerpt').click();
  await page.getByLabel('Excerpt').fill(faker.datatype.string(301));
  const error = page.getByText('Excerpt cannot be longer than 300 characters.');
  expect(error).toBeVisible
  page.close();
});

test('POSTSETTINGS05. Post puede tener URL vacío', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByLabel('Post URL').click();
  await page.getByLabel('Post URL').fill('');
  await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POSTSETTINGS06. Post puede tener URL de 191 caracteres', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByLabel('Post URL').click();
  await page.getByLabel('Post URL').fill(faker.datatype.string(191));
  await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POSTSETTINGS07. Post NO puede tener URL de 192 caracteres', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByLabel('Post URL').click();
  await page.getByLabel('Post URL').fill(faker.datatype.string(192));
  const error = page.getByText('URL cannot be longer than 191 characters.');
  expect(error).toBeVisible
  page.close();
});

test('POSTSETTINGS08. Post puede tener en Code Injection un Post Header de 65535 caracteres', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.locator('.CodeMirror-scroll').first().click();
  await page.locator('#post-setting-codeinjection-head').getByRole('textbox').fill(faker.datatype.string(65535));
  await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POSTSETTINGS09. Post NO puede tener en Code Injection un Post Header de 65536 caracteres', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.locator('.CodeMirror-scroll').first().click();
  await page.locator('#post-setting-codeinjection-head').getByRole('textbox').fill(faker.datatype.string(65536));
  const error = page.getByText('Header code cannot be longer than 65535 characters.');
  expect(error).toBeVisible
  page.close();
});

test('POSTSETTINGS10. Post puede tener en Code Injection un Post Footer de 65535 caracteres', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.locator('#post-setting-codeinjection-foot > .CodeMirror > .CodeMirror-scroll').click();
  await page.locator('#post-setting-codeinjection-foot').getByRole('textbox').fill(faker.datatype.string(65535));
    await page.getByRole('button', { name: 'Publish' }).click();
  const publishMessage = page.getByText('Ready, set, publish.');
  expect(publishMessage).toBeVisible
  page.close();
});

test('POSTSETTINGS11. Post NO puede tener en Code Injection un Post Footer de 65536 caracteres', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.locator('#post-setting-codeinjection-foot > .CodeMirror > .CodeMirror-scroll').click();
  await page.locator('#post-setting-codeinjection-foot').getByRole('textbox').fill(faker.datatype.string(65536));
  const error = page.getByText('Footer code cannot be longer than 65535 characters.');
  expect(error).toBeVisible
  page.close();
});

test('POSTSETTINGS12. Post NO puede tener en Code Injection un Post Header de HTML de 65536 caracteres', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.locator('.CodeMirror-scroll').first().click();
  await page.locator('#post-setting-codeinjection-head').getByRole('textbox').fill('<div>'+faker.datatype.string(65525)+'</div>');
  const error = page.getByText('Header code cannot be longer than 65535 characters.');
  expect(error).toBeVisible
  page.close();
});

test('POSTSETTINGS13. Post NO puede tener en Code Injection un Post Footer de HTML de 65536 caracteres', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.locator('#post-setting-codeinjection-foot > .CodeMirror > .CodeMirror-scroll').click();
  await page.locator('#post-setting-codeinjection-foot').getByRole('textbox').fill('<div>'+faker.datatype.string(65525)+'</div>');
  const error = page.getByText('Footer code cannot be longer than 65535 characters.');
  expect(error).toBeVisible
  page.close();
});
