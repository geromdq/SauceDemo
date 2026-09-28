import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('user can remove a product from the shopping cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.loginAs('standard_user', 'secret_sauce');

  await expect(inventoryPage.productsHeading).toBeVisible();
  const firstItem = inventoryPage.inventoryItems.first();
  const productName = await firstItem.locator('.inventory_item_name').innerText();
  await firstItem.getByRole('button', { name: /add to cart/i }).click();

  await cartPage.open();
  await expect(page).toHaveURL(/\/cart\.html$/);
  await expect(cartPage.productNames.first()).toBeVisible();
  await expect(cartPage.productNames).toContainText([productName]);

  await cartPage.removeProduct();

  await expect(cartPage.productNames).toHaveCount(0);
  await expect(page.getByText(productName)).not.toBeVisible();
});
