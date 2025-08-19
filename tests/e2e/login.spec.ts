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
    await loginPage.login('', '');
    await loginPage.expectRequiredMessages();
  });
});
