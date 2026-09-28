import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartButton: Locator;
  readonly productNames: Locator;
  readonly cartItems: Locator;
  readonly removeButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
    this.productNames = page.locator('.inventory_item_name');
    this.cartItems = page.locator('.cart_item');
    this.removeButton = page.getByRole('button', { name: 'Remove' });
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async goto() {
    await this.page.goto('/cart.html');
  }

  async open() {
    await this.cartButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async removeProduct(productName?: string) {
    if (productName) {
      await this.cartItems
        .filter({ hasText: productName })
        .getByRole('button', { name: 'Remove' })
        .click();
    } else {
      await this.removeButton.first().click();
    }
  }
}

