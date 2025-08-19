// Simple wrapper for Applitools (Eyes Classic). Call from tests or pages if needed.
import { Eyes, ClassicRunner, Target } from '@applitools/eyes-playwright';
import type { Page } from '@playwright/test';

export async function visualCheck(page: Page, appName: string, testName: string, tag: string) {
  const runner = new ClassicRunner();
  const eyes = new Eyes(runner);
  await eyes.open(page, appName, testName);
  await eyes.check(tag, Target.window().fully());
  await eyes.close();
}
