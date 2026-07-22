import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage and display correct title', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Star Gardens/i);
    
    // Check for the main hero heading
    const heroHeading = page.locator('h1');
    await expect(heroHeading).toContainText(/Green Spaces/i);
    
    // Check if Request Consultation button is visible
    const requestBtn = page.getByRole('button', { name: /Request Consultation/i });
    await expect(requestBtn).toBeVisible();
  });
  
  test('should render header and navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Header should be visible
    const header = page.locator('header').first();
    await expect(header).toBeVisible();
    
    // Essential navigation links should be visible in desktop view
    await expect(page.getByRole('button', { name: 'Home' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'About Us' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Services' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Contact' }).first()).toBeVisible();
  });
});
