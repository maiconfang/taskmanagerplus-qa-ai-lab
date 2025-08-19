import { test } from '../fixtures/test-fixture';

test('filters Pending on load', async ({ dashboardPage }) => {
  await dashboardPage.goto('/dashboard');
  await dashboardPage.expectLoaded();
  // aqui você adiciona asserts conforme sua lógica
});
