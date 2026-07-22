import { test, expect } from '@playwright/test';

test.describe('SEO Tests', () => {
  test('homepage should have correct SEO metadata', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Star Gardens/i);

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /landscaping|green spaces/i);

    // Check canonical link if it exists
    // const canonical = page.locator('link[rel="canonical"]');
    // await expect(canonical).toHaveAttribute('href', 'https://www.stargardens.in/');
    
    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    if (await ogTitle.count() > 0) {
      await expect(ogTitle).toHaveAttribute('content', /Star Gardens/i);
    }
  });
});
