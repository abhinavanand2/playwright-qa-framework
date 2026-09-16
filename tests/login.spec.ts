import { test, expect } from '../fixtures/testFixtures';
import { users } from '../test-data/users';

test.describe('Login', () => {

  test('user can login with valid credentials', {
    tag: ['@smoke', '@regression']
  }, async ({
    page,
    loginPage
  }) => {

    await loginPage.goto();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });


  test('user cannot login with invalid credentials', {
    tag: '@regression'
  }, async ({
    loginPage
  }) => {

    await loginPage.goto();

    await loginPage.login(
      users.invalid.username,
      users.invalid.password
    );

    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });

});