import { test, expect, request } from '@playwright/test';
import { USERNAME, PASSWORD,GhostURL,URL_PSEUDO_TAGS } from '../../properties.json';



test('LOGIN02.Login usuario registrado con password incorrecto', async ({ page,request }) => {
  
  
  const response = await request.get(URL_PSEUDO_TAGS);
  let dataSpseudo= JSON.parse(await response.text());

  const dataLogin=dataSpseudo[Math.floor(Math.random() * (99 - 0 + 1) +0)];
  
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(dataLogin.password);
  await page.getByRole('button', { name: 'Sign in →' }).click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Your password is incorrect");
});


test('LOGIN03.Login con email de usuario no registrado', async ({ page,request }) => {
  
  
  await page.goto(GhostURL);

  const response = await request.get(URL_PSEUDO_TAGS);
  let dataSpseudo= JSON.parse(await response.text());

  const dataLogin=dataSpseudo[Math.floor(Math.random() * (99 - 0 + 1) +0)];

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(dataLogin.email);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(dataLogin.password);
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("There is no user with that email address");
});


test('LOGIN04.Login con email o password vacio', async ({ page ,request}) => {
 
  const response = await request.get(URL_PSEUDO_TAGS);
  let dataSpseudo= JSON.parse(await response.text());

  const dataLogin=dataSpseudo[Math.floor(Math.random() * (99 - 0 + 1) +0)];

 
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(dataLogin.email);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(dataLogin.empty_field);
  
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Please fill out the form to sign in");
});

test('LOGIN05.Login con email con formato inválido', async ({ page,request }) => {

  const response = await request.get(URL_PSEUDO_TAGS);
  let dataSpseudo= JSON.parse(await response.text());

  const dataLogin=dataSpseudo[Math.floor(Math.random() * (99 - 0 + 1) +0)];

  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(dataLogin.fb_title);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(dataLogin.password);
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Please fill out the form to sign in");
});


test('LOGIN06.Forgot sin ingresar email', async ({ page,request }) => {

  const response = await request.get(URL_PSEUDO_TAGS);
  let dataSpseudo= JSON.parse(await response.text());

  const dataLogin=dataSpseudo[Math.floor(Math.random() * (99 - 0 + 1) +0)];

  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(dataLogin.empty_field);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill(dataLogin.password);
  await  page.locator("(//span[contains(text(),'Forgot?')])[1]").click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("We need your email address to reset your password");
});


test('LOGIN07.Forgot con email de usuario registrado', async ({ page,request }) => {
 
  const response = await request.get(URL_PSEUDO_TAGS);
  let dataSpseudo= JSON.parse(await response.text());

  const dataLogin=dataSpseudo[Math.floor(Math.random() * (99 - 0 + 1) +0)];
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(dataLogin.password);
  await  page.locator("(//span[contains(text(),'Forgot?')])[1]").click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Failed to send email");
});


test('LOGIN08.Forgot con email de usuario no registrado', async ({ page,request }) => {
 
  const response = await request.get(URL_PSEUDO_TAGS);
  let dataSpseudo= JSON.parse(await response.text());

  const dataLogin=dataSpseudo[Math.floor(Math.random() * (99 - 0 + 1) +0)];
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(dataLogin.email);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(dataLogin.password);
  await  page.locator("(//span[contains(text(),'Forgot?')])[1]").click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("User not found");
});


