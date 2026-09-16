import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async verifyProductInCart(productName: string) {
    const product = this.cartItems.filter({ hasText: productName });
    await expect(product).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}