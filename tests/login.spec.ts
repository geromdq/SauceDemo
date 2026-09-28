import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.loginAs('standard_user', 'secret_sauce');

  await expect(page.locator('.inventory_list')).toBeVisible();
});
