import { test, expect } from '@playwright/test';

test.describe('Navigation Flow', () => {
  test('should navigate through main sections successfully', async ({ page, isMobile }) => {
    // Skip this complex navigation test for mobile, as the menu requires clicking hamburger icon
    // Mobile navigation will be tested in mobile.spec.js
    if (isMobile) test.skip();
    
    await page.goto('/');
    
    // Check initial state
    await expect(page.locator('h1').first()).toBeVisible();
    
    // Navigate to Services (which should scroll or render the services section)
    await page.getByRole('button', { name: 'Services', exact: false }).first().click({ force: true });
    // Assuming Services navigation triggers rendering of the 'Services' section or route
    // The current implementation seems to be a single-page app conditionally rendering components
    // We will verify something that appears on the Services page
    await expect(page.getByText(/Complete Green/i).first()).toBeVisible();

    // Navigate to About
    await page.getByRole('button', { name: 'About Us' }).first().click({ force: true });
    await expect(page.getByAltText(/About Star Gardens/i).first()).toBeVisible();

    // Navigate to Contact
    await page.getByRole('button', { name: 'Contact' }).first().click({ force: true });
    await expect(page.getByText(/Send Us a Message/i).first()).toBeVisible();
    
    // Navigate back to Home
    await page.getByRole('button', { name: 'Home' }).first().click({ force: true });
    await expect(page.locator('h1').first()).toContainText(/Green Spaces/i);
  });
});
