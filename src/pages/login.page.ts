import { BasePage } from './base.page';
import { Locator, Page, expect } from '@playwright/test';
import { SEL } from '../../utils/selectors';

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly submit: Locator;
  readonly errorArea: Locator;

  constructor(page: Page) {
    super(page);
    this.username = this.getByTestId(SEL.login.username); // ex: 'login-username'
    this.password = this.getByTestId(SEL.login.password);
    this.submit   = this.getByTestId(SEL.login.submit);
    this.errorArea = page.locator(SEL.login.errorArea);   // pode ser CSS/text
  }

  async open() {
    await this.goto('/login');
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
}
