import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  console.log('URL after goto:', await page.url());
  console.log('TITLE after goto:', await page.title());
  console.log('Email count:', await page.locator('#Email').count());
  console.log('Password count:', await page.locator('#Password').count());
  console.log('Login button count:', await page.getByRole('button', { name: 'Log in' }).count());
  console.log('Body text start:', (await page.locator('body').innerText()).slice(0, 500));

  await page.screenshot({ path: 'test-results/login-diagnostic.png', fullPage: true });

  await loginPage.loginAs('admin@yourstore.com', 'admin123');

  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});
