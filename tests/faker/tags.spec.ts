import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { USERNAME, PASSWORD,GhostURL } from '../../properties.json';

test('TAG01. Crear Tag con datos básicos', async ({ page }) => {
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

    
  await page.locator('#ember31').click();
  await page.getByRole('link', { name: 'Sign out' }).click();
 
  const locator2 = page.locator("(//span[contains(text(),'Sign in →')])[1]");
  await expect(locator2).toBeVisible();

 
});



test('TAG02. Actualizar Tag. Crear Tag con datos básicos y actualizar', async ({ page }) => {
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

  
  await page.getByRole('button', { name: 'Expand' }).nth(2).click();
  
  
  await page.locator("(//input[@id='og-title'])[1]").click();
  await page.locator("(//input[@id='og-title'])[1]").fill(faker.company.name());


  await page.locator("(//textarea[@id='og-description'])[1]").click();
  await page.locator("(//textarea[@id='og-description'])[1]").fill(faker.commerce.productDescription());


  await page.getByRole('button', { name: 'Save' }).click();

  
  await page.locator('#ember31').click();
  await page.getByRole('link', { name: 'Sign out' }).click();
 
  const locator2 = page.locator("(//span[contains(text(),'Sign in →')])[1]");
  await expect(locator2).toBeVisible();

 
});


test('TAG03. Eliminar Tag. Crear Tag con datos básicos y Eliminar Tag', async ({ page }) => {
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

test('TAG04. Crear Tag con datos básicos excepto el campo name', async ({ page }) => {
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.getByPlaceholder('•••••••••••••••').press('Enter');
  await page.getByRole('link', { name: 'Tags' }).click();
  

  await page.locator("//span[normalize-space()='New tag']").click();


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

 
  const locator = page.locator("(//p[@class='response'])[1]");
  await expect(locator).toContainText("You must specify a name for the tag");


   
});



test('TAG05. Crear Tag con datos básicos  y con una longitud mayor a 191 en el campo name', async ({ page }) => {
  await page.goto(GhostURL);
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill(USERNAME);
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('•••••••••••••••').fill(PASSWORD);
  await page.getByPlaceholder('•••••••••••••••').press('Enter');
  await page.getByRole('link', { name: 'Tags' }).click();
  
  await page.locator("//span[normalize-space()='New tag']").click();
  

  let salir=false;
  let nameLong=faker.commerce.productDescription();
  while(!salir){
     nameLong=nameLong+' '+faker.commerce.productDescription();
     if(nameLong.length>191){
      salir=true;
     }
  }


  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill(nameLong);


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

 
  const locator = page.locator("(//p[@class='response'])[1]");
  await expect(locator).toContainText("Tag names cannot be longer");

 
});


test('TAG06. Crear Tag con datos que tengan formato inválido', async ({ page }) => {
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


  await page.locator("(//input[@name='accent-color'])[1]").click();
  await page.locator("(//input[@name='accent-color'])[1]").fill(faker.name.firstName());

 
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

 
  const locator = page.locator("(//p[@class='response'])[2]");
  await expect(locator).toContainText("The colour should be in valid hex format");


   
});



test('TAG07. Crear Tag y Crear un Post y agregar el tag al Post y visualizar el Preview', async ({ page }) => {
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


  


  await page.locator("(//a[@title='New post'])[1]").click();
 

  await page.getByPlaceholder('Post title').fill('Productos de Tecnolog');
  await page.getByRole('button', { name: 'Settings' }).click();

  
  await page.locator("(//div[@id='tag-input'])[1]").click();
  await page.getByRole('option', { name: tagName }).click();

  /*
  await page.getByRole('button', { name: 'Publish' }).click();
  await page.getByRole('button', { name: 'Continue, final review →' }).click();

    
  //TODO. Boton publicar
  await page.locator('.gh-btn-large').first().click();
  await page.getByRole('button', { name: 'Back to editor' }).click();
  await page.getByRole('link', { name: 'Posts' }).click();*/

  await page.getByRole('button', { name: 'Preview' }).click();
  await page.getByRole('button', { name: 'Editor' }).click();
  await page.getByRole('link', { name: 'Posts' }).click();


  await page.locator("(//div[@class='flex-auto flex items-center'])[1]").click();
  await page.getByRole('link', { name: 'Sign out' }).click();
 
  const locator2 = page.locator("(//span[contains(text(),'Sign in →')])[1]");
  await expect(locator2).toBeVisible();


   
});












