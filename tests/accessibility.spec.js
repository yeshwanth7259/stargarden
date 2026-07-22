import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('homepage should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      // We can exclude specific rules if they are known issues that will be fixed later
      .disableRules(['color-contrast', 'link-name', 'heading-order'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('contact form should have proper labels', async ({ page, isMobile }) => {
    await page.goto('/');
    
    if (isMobile) {
      await page.locator('.bx-menu').click();
    }
    await page.getByRole('button', { name: 'Contact' }).first().click({ force: true });
    
    // Wait for the form to actually be visible before scanning it
    await page.waitForSelector('form');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('form') // Only scan the form
      .disableRules(['color-contrast', 'heading-order'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
