import { test, expect } from '../fixtures/testFixtures';
import { users } from '../test-data/users';

test.describe('Shopping Cart', () => {

  test('user can add a product to the cart', {
  tag: ['@smoke', '@regression']
},
    async ({
    loginPage,
    productsPage,
    cartPage
  }) => {

    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.verifyProductsPageLoaded();

    const productName = 'Sauce Labs Backpack';

    await productsPage.addProductToCart(productName);

    await expect(productsPage.cartBadge).toHaveText('1');

    await productsPage.openCart();

    await cartPage.verifyProductInCart(productName);
  });

});