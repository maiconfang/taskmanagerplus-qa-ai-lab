import { BasePage } from './base.page';
import { Locator, Page, expect } from '@playwright/test';
import { SEL } from '../../utils/selectors';

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly submit: Locator;
  readonly errorArea: Locator;
  readonly titleLabel: Locator; // <-- add

  constructor(page: Page) {
    super(page);
    this.username = this.getByTestId(SEL.login.username); // ex: 'login-username'
    this.password = this.getByTestId(SEL.login.password);
    this.submit   = this.getByTestId(SEL.login.submit);
    this.errorArea = page.locator(SEL.login.errorArea);   // pode ser CSS/text
    this.titleLabel = this.getByTestId(SEL.login.titleLabel); // <-- add
  }

  async open() {
    await this.goto('/#/login');
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
  }

  async expectRequiredMessages() {
    await expect(this.errorArea).toContainText('Username is required');
    await expect(this.errorArea).toContainText('Password is required');
  }

  // Assert that the title is visible and (optionally) has the expected text
  async expectTitleVisible(expectedText?: string) {
    await expect(this.titleLabel).toBeVisible();
    if (expectedText) {
      await expect(this.titleLabel).toHaveText(expectedText, { useInnerText: true });
    }
  }

  async expectUsernameFieldPresent() {
  const username = this.page.locator(
    '[data-testid="login_username"], #login_username, [name="login_username"]'
  );
  await expect(username.first()).toBeVisible();
  await expect(username.first()).toBeEditable();
}
}
