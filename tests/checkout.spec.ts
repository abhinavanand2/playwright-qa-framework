import { test, expect } from '../fixtures/testFixtures';
import { users } from '../test-data/users';
import { checkoutData } from '../test-data/checkoutData';

test.describe('Checkout', () => {

  test('user can complete an order successfully', {
    tag: ['@smoke', '@regression']
  }, async ({
    page,
    loginPage,
    productsPage,
    cartPage,
    checkoutPage
  }) => {

    const productName = 'Sauce Labs Backpack';

    // Login
    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    // Add product
    await productsPage.verifyProductsPageLoaded();
    await productsPage.addProductToCart(productName);

    await expect(productsPage.cartBadge).toHaveText('1');

    // Cart
    await productsPage.openCart();
    await cartPage.verifyProductInCart(productName);
    await cartPage.proceedToCheckout();

    // Customer information
    await checkoutPage.enterCustomerInformation(
      checkoutData.validCustomer.firstName,
      checkoutData.validCustomer.lastName,
      checkoutData.validCustomer.postalCode
    );

    await checkoutPage.continueCheckout();

    // Verify checkout overview
    await expect(page).toHaveURL(/checkout-step-two/);

    // Complete order
    await checkoutPage.finishOrder();

    // Verify successful purchase
    await checkoutPage.verifyOrderConfirmation();

    await expect(page).toHaveURL(/checkout-complete/);
  });

});