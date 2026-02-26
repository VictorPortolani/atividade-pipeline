//código padrão do Playwright.

// // @ts-check
// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

const {soma, multiplicacao} = require('../src/index.js');
//teste para soma
test('soma de 2 + 2 deve ser igual a 4', () => {
  expect(soma(2, 2)).toBe(4);
});

//teste para multiplicação
test('multiplicação de 3 * 4 deve ser igual a 12', () => {
  expect(multiplicacao(3, 4)).toBe(12);
});