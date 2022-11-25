import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { USERNAME, PASSWORD,GhostURL } from '../../properties.json';

test('TAG01. Crear Tag con datos básicos y Eliminar Tag', async ({ page }) => {
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.getByPlaceholder('•••••••••••••••').press('Enter');
  await page.getByRole('link', { name: 'Tags' }).click();
  
  const tagName=faker.commerce.product();

  await page.locator("//span[normalize-space()='New tag']").click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill(tagName);

  await page.getByRole('textbox', { name: 'Accent color picker' }).click();
  await page.getByRole('textbox', { name: 'Accent color picker' }).fill(faker.color.rgb({ format: 'hex' }) );
  await page.getByLabel('Slug').click();


  await page.locator("(//textarea[@id='tag-description'])[1]").click();
  await page.locator("(//textarea[@id='tag-description'])[1]").fill(faker.commerce.productDescription());


  await page.getByRole('button', { name: 'Expand' }).first().click();
  
  await page.locator("(//input[@id='meta-title'])[1]").click();
  await page.locator("(//input[@id='meta-title'])[1]").fill(faker.word.verb());


  await page.locator("(//textarea[@id='meta-description'])[1]").click();
  await page.locator("(//textarea[@id='meta-description'])[1]").fill(faker.commerce.productDescription());


  
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Save' }).click();


  await page.locator("(//a[normalize-space()='Tags'])[1]").click();
  await page.locator("(//h3[normalize-space()='"+tagName+"'])[1]").click();

  

  await page.getByRole('button', { name: 'Delete tag' }).click();
  await page.locator("(//button[contains(@class,'gh-btn-red')])[2]").click()

  
  await page.locator('#ember31').click();
  await page.getByRole('link', { name: 'Sign out' }).click();
 
  const locator2 = page.locator("(//span[contains(text(),'Sign in →')])[1]");
  await expect(locator2).toBeVisible();

 
});







