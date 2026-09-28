import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('user can complete a checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.loginAs('standard_user', 'secret_sauce');
  await expect(inventoryPage.productsHeading).toBeVisible();

  await inventoryPage.inventoryItems.first().getByRole('button', { name: /add to cart/i }).click();

  await cartPage.open();
  await expect(page).toHaveURL(/\/cart\.html$/);
  await expect(cartPage.productNames.first()).toBeVisible();

  await cartPage.proceedToCheckout();
  await expect(page).toHaveURL(/\/checkout-step-one\.html$/);

  await checkoutPage.fillInformation('John', 'Doe', '12345');
  await checkoutPage.continue();
  await expect(page).toHaveURL(/\/checkout-step-two\.html$/);

  await checkoutPage.finish();
  await expect(page).toHaveURL(/\/checkout-complete\.html$/);

  await expect(checkoutPage.completeHeader).toBeVisible();
  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});
