import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage should match baseline snapshot', async ({ page }) => {
    await page.goto('/');
    
    // Wait for any animations to settle (if possible)
    await page.waitForTimeout(1000);
    
    // Take full page screenshot and compare
    // Note: The first time this runs, it will create a baseline. 
    // Subsequent runs will compare against the baseline.
    await expect(page).toHaveScreenshot('homepage-baseline.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.1 // Allow 10% difference for slight font/animation rendering variations (especially in Webkit)
    });
  });
});
