import { test, expect } from '@playwright/test';

test('User can log in', async ({ page }) => {
  await page.goto('https://app.example.com/login');

  // Fill credentials using accessible locators
  await page.getByLabel('Email').fill('test@gmail.com');
  await page.getByLabel('Password').fill('123456');

  // Click button matched by ARIA role
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('/dashboard');
});