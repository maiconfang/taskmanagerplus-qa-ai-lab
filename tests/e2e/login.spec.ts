import { test, expect } from '../fixtures/test-fixture';

test.describe('Login', () => {
  test('happy path', async ({ loginPage, dashboardPage }) => {
    await loginPage.open();
    await loginPage.login('demo', 'demo123');
    await dashboardPage.expectLoaded();
    await dashboardPage.assertUrlContains(/dashboard/);
  });

  test('required fields', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('1', '');
    await loginPage.expectRequiredMessages();
  });


  test.only('username field present', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.expectUsernameFieldPresent();
  });

});
