import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productsHeading: Locator;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsHeading = page.getByText('Products', { exact: true });
    this.inventoryItems = page.locator('.inventory_item');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }
}
