import { BasePage } from './base.page';
import { Locator, Page, expect } from '@playwright/test';
import { SEL } from '../../utils/selectors';

export class DashboardPage extends BasePage {
  readonly title: Locator;
  readonly filterPending: Locator;
  readonly filterCompleted: Locator;

  constructor(page: Page) {
    super(page);
    this.title = this.getByTestId(SEL.dashboard.title); // ex: 'dashboard-title'
    this.filterPending = this.getByTestId(SEL.dashboard.filterPending);
    this.filterCompleted = this.getByTestId(SEL.dashboard.filterCompleted);
  }

  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }
}
