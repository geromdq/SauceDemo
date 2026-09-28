import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('user can add a product to the shopping cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.loginAs('standard_user', 'secret_sauce');

  await expect(inventoryPage.productsHeading).toBeVisible();
  await inventoryPage.inventoryItems.first().getByRole('button', { name: /add to cart/i }).click();

  await cartPage.open();

  await expect(page).toHaveURL(/\/cart\.html$/);
  await expect(cartPage.productNames.first()).toBeVisible();
});
