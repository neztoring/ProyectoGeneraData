import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { USERNAME, PASSWORD,GhostURL } from '../../properties.json';



test('LOGIN01.Login correcto', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.getByRole('button', { name: 'Sign in →' }).click();

  
  const locator = page.locator("(//h2[normalize-space()='Dashboard'])[1]");
  await expect(locator).toBeVisible();
  
  await page.locator('#ember31').click();
  await page.getByRole('link', { name: 'Sign out' }).click();
 
  const locator2 = page.locator("(//span[contains(text(),'Sign in →')])[1]");
  await expect(locator2).toBeVisible();


});

test('LOGIN02.Login usuario registrado con password incorrecto', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(faker.internet.password());
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Your password is incorrect");
});


test('LOGIN03.Login con email de usuario no registrado', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(faker.internet.exampleEmail());
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(faker.internet.password());
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("There is no user with that email address");
});

test('LOGIN04.Login con email o password vacio', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(faker.internet.exampleEmail());
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Please fill out the form to sign in");
});

test('LOGIN05.Login con email con formato inválido', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(faker.internet.exampleEmail()+'@'+faker.internet.domainSuffix());
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(faker.internet.password());
  await page.getByRole('button', { name: 'Sign in →' }).click();

   
  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Please fill out the form to sign in");
});


test('LOGIN06.Forgot sin ingresar email', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').click();
  await page.getByPlaceholder('•••••••••••••••').fill(faker.internet.password());
  await  page.locator("(//span[contains(text(),'Forgot?')])[1]").click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("We need your email address to reset your password");
});


test('LOGIN07.Forgot con email de usuario registrado', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(faker.internet.password());
  await  page.locator("(//span[contains(text(),'Forgot?')])[1]").click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("Failed to send email");
});


test('LOGIN08.Forgot con email de usuario no registrado', async ({ page }) => {
  await page.goto(GhostURL);

  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(faker.internet.exampleEmail());
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(faker.internet.password());
  await  page.locator("(//span[contains(text(),'Forgot?')])[1]").click();

  const locator = page.locator("(//p[@class='main-error'])[1]");
  await expect(locator).toContainText("User not found");
});
