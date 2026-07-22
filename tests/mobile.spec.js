import { test, expect } from '@playwright/test';

test.describe('Mobile Browser Emulation', () => {
  // Playwright configuration handles mobile emulation through projects
  
  test('should show hamburger menu and allow mobile navigation', async ({ page, isMobile }) => {
    // Only run this test for mobile viewports
    if (!isMobile) test.skip();
    
    await page.goto('/');
    
    // Hamburger icon should be visible
    const hamburger = page.locator('.bx-menu');
    await expect(hamburger).toBeVisible();
    
    // Desktop links should not be visible directly
    const navMenu = page.locator('nav').first();
    await expect(navMenu).not.toBeInViewport();
    
    // Click hamburger to open menu
    await hamburger.click();
    
    // Menu should slide in (be visible)
    await expect(navMenu).toBeInViewport();
    
    // Click a link in the mobile menu
    await page.getByRole('button', { name: 'About Us' }).first().click({ force: true });
    
    // Should navigate and close menu automatically
    await expect(page.getByAltText(/About Star Gardens/i).first()).toBeVisible();
    await expect(navMenu).not.toBeInViewport();
  });
});
