import { USERNAME, PASSWORD,GhostURL } from '../../properties.json';
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


test('PAGE01. Titulo no puede ser mayor a 255 caracteres',async ({page}) => {
  
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'All pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'Published pages' }).click();
  await page.waitForTimeout(2000);
  await page.locator('.pages-list >li:nth-child(2)').click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Page title').fill(faker.datatype.string(256));
  await page.waitForTimeout(2000);
  await page.locator('.gh-editor-save-trigger').click();
  const error = page.getByText('Update failed: Title cannot be longer than 255 characters.');
  expect(error).toBeVisible
  page.close();
});

test('PAGE02. Invalid date format: date', async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'New page' }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Page title').fill(faker.datatype.string());
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Publish' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Right now' }).click();
  await page.waitForTimeout(2000);
  await page.getByText('Schedule for later').click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('YYYY-MM-DD').first().fill(faker.datatype.string());
  const error = page.getByText('Invalid date format, must be YYYY-MM-DD');
  expect(error).toBeVisible
  page.close();
});

test('PAGE03. Invalid date format: hour', async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'New page' }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Page title').fill(faker.datatype.string());
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox').nth(3).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox').nth(3).fill(faker.datatype.string());
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Publish' }).click();
  const error = page.getByText('Validation failed: Must be in format: "15:00"');
  expect(error).toBeVisible
  page.close();
});

test('PAGE04. Crear page correctamente',async ({page}) => {
  await page.goto(GhostURL);
	await page.waitForTimeout(2000);
  await page.type('input[name="identification"]', USERNAME);
  await page.waitForTimeout(2000);
  await page.type('input[name="password"]', PASSWORD);
  await page.waitForTimeout(2000);
  await page.locator('button', { hasText: 'Sign in →' }).click();
	
	await page.waitForTimeout(2000);
  await page.click('text=Pages');
	await page.waitForTimeout(2000);
  await page.click('text=New page');
	
  const title = faker.datatype.string();
	await page.waitForTimeout(2000);
  await page.type("textarea[placeholder='Page title']",title );
	
  await page.waitForTimeout(2000);
  await page.click(".gh-btn:nth-child(2)");  
  await page.waitForTimeout(2000);
  await page.click(".gh-publish-trigger");
  await page.waitForTimeout(2000);
  await page.click('text=Continue, final review →');
  await page.waitForTimeout(2000);
  await page.click('.gh-publish-cta > button:nth-child(1)', {force:true});

	await page.waitForTimeout(2000);
  await page.click("text=Editor");
  await page.waitForTimeout(2000);
  await page.click("text=Pages");
	
  await page.click("div.gh-contentfilter-menu.gh-contentfilter-type > div.ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger");
  await page.click(".ember-power-select-options > li:nth-child(3)");
  
  const textTitle = page.getByText("title");
  expect(textTitle).toBeVisible
  page.close();
});

test('PAGE05. Excerpt no puede ser mayor de 300 caracteres', async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'New page' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Excerpt').click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Excerpt').fill(faker.datatype.string(faker.datatype.number({min:301})));
  await page.waitForTimeout(2000);
  await page.getByText('Authors').click();
  const error = page.getByText('Excerpt cannot be longer than 300 characters.');
  expect(error).toBeVisible
  page.close();
});

test('PAGE06. Metadata title no puede ser mayor a 300 caracteres', async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'New page' }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Page title').fill(faker.datatype.string());
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Meta data Extra content for search engines' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#meta-title').fill(faker.datatype.string(faker.datatype.number({min:301})));
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Publish' }).click();
  const error = page.getByText('Validation failed: Meta Title cannot be longer than 300 characters.');
  expect(error).toBeVisible
  page.close();
});

test('PAGE07. Metadata Description no puede ser mayor a 500 caracteres', async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'New page' }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Page title').fill(faker.datatype.string());
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Meta data Extra content for search engines' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#meta-description').fill(faker.datatype.string(faker.datatype.number({min:501})));
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Publish' }).click();
  const error = page.getByText('Validation failed: Meta Description cannot be longer than 500 characters.');
  expect(error).toBeVisible
  page.close();
});

test('PAGE08. Metadata url error', async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'New page' }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Page title').fill(faker.datatype.string());
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Meta data Extra content for search engines' }).click();
  await page.waitForTimeout(2000);
  await page.locator('input[name="post-setting-canonicalUrl"]').fill(faker.datatype.string().replace(':',''));
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Publish' }).click();
  const error = page.getByText('Please enter a valid URL');
  expect(error).toBeVisible
  page.close();
});

test('PAGE09. Twitter title no puede ser mayor a 300 caracteres', async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'New page' }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Page title').fill(faker.datatype.string());
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Twitter card Customize structured data for Twitter' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#twitter-title').fill(faker.datatype.string(faker.datatype.number({min:301})));
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Publish' }).click();
  const error = page.getByText('Validation failed: Twitter Title cannot be longer than 300 characters.');
  expect(error).toBeVisible
  page.close();
});

test('PAGE10. Twitter Description no puede ser mayor a 500 caracteres', async ({ page }) => {
  await page.goto(GhostURL);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign in →' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: '.page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px} Pages' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'New page' }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Page title').fill(faker.datatype.string());
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Twitter card Customize structured data for Twitter' }).click();
  await page.waitForTimeout(2000);
  await page.locator('#twitter-description').fill(faker.datatype.string(faker.datatype.number({min:501})));
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Publish' }).click();
  const error = page.getByText('Validation failed: Twitter Title cannot be longer than 300 characters.');
  expect(error).toBeVisible
  page.close();
});










