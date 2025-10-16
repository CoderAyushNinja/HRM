import { Page } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  async navigateToAdmin() {
    // Wait until the Admin menu is visible
    const adminMenu = this.page.locator('a[href="/web/index.php/admin/viewAdminModule"]');
    await adminMenu.waitFor({ state: 'visible' });

    // Click Admin menu
    await adminMenu.click();

    // Wait for the User Management header to ensure page loaded
    await this.page.waitForSelector('text=User Management');
  }
}
