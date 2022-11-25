import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { USERNAME, PASSWORD,GhostURL } from '../../properties.json';

import data from '../../schema/schema_users_tags.json'; 


test('LOGIN02.Login usuario registrado con password incorrecto', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(data[Math.floor(Math.random() * (999 - 0 + 1) +0)].password);
  await page.getByRole('button', { name: 'Sign in →' }).click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Your password is incorrect");
});


test('LOGIN03.Login con email de usuario no registrado', async ({ page }) => {
  await page.goto(GhostURL);


  let posRamdom= Math.floor(Math.random() * (999 - 0 + 1) +0);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(data[posRamdom].email);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(data[posRamdom].password);
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("There is no user with that email address");
});


test('LOGIN04.Login con email o password vacio', async ({ page }) => {
 
  let posRamdom= Math.floor(Math.random() * (999 - 0 + 1) +0);
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(data[posRamdom].email);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(data[posRamdom].empty_field);
  
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Please fill out the form to sign in");
});

test('LOGIN05.Login con email con formato inválido', async ({ page }) => {

  let posRamdom= Math.floor(Math.random() * (999 - 0 + 1) +0);
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(data[posRamdom].fb_title);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(data[posRamdom].password);
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Please fill out the form to sign in");
});


test('LOGIN06.Forgot sin ingresar email', async ({ page }) => {

  let posRamdom= Math.floor(Math.random() * (999 - 0 + 1) +0);
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(data[posRamdom].empty_field);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill(data[posRamdom].password);
  await  page.locator("(//span[contains(text(),'Forgot?')])[1]").click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("We need your email address to reset your password");
});

