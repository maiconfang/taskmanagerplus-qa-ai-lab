import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Prefer data-testid, fallback para CSS/XPath quando necessário
  getByTestId(id: string): Locator {
    return this.page.getByTestId(id);
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async assertUrlContains(fragment: RegExp | string) {
    if (fragment instanceof RegExp) {
      await expect(this.page).toHaveURL(fragment);
    } else {
      await expect(this.page).toHaveURL(new RegExp(fragment));
    }
  }
}
