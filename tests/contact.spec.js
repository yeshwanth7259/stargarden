import { test, expect } from '@playwright/test';

test.describe('Contact Form Flow', () => {
  test('should validate required fields and submit form', async ({ page, isMobile }) => {
    await page.goto('/');
    
    // Navigate to Contact page
    if (isMobile) {
      await page.locator('.bx-menu').click();
    }
    await page.getByRole('button', { name: 'Contact' }).first().click();
    
    // Verify we are on the contact section
    await expect(page.getByText(/Send Us a Message/i)).toBeVisible();
    
    // Fill the contact form
    await page.getByPlaceholder('Enter your full name').fill('John Doe QA');
    await page.getByPlaceholder('Enter your phone number').fill('9876543210');
    await page.getByPlaceholder('Enter your email address').fill('johndoe@example.com');
    
    // Select subject
    await page.locator('select[name="subject"]').selectOption('landscape');
    
    // Fill message
    await page.getByPlaceholder('Tell us about your project or requirement...').fill('This is a test message from Playwright automation.');
    
    // Check privacy policy
    await page.locator('input#privacy').check();
    
    // We won't actually submit because it opens a WhatsApp window which is hard to assert and could be disruptive,
    // but we can check if the button is enabled and ready to click.
    const submitBtn = page.getByRole('button', { name: 'SEND MESSAGE' });
    await expect(submitBtn).toBeEnabled();
    
    // Mock window.open to prevent actual WhatsApp navigation during test
    await page.evaluate(() => {
      window.open = () => null;
    });
    
    // Now click submit
    await submitBtn.click();
    
    // Since we mock window.open, it should clear the form (based on handleSubmit logic: e.target.reset())
    await expect(page.getByPlaceholder('Enter your full name')).toHaveValue('');
  });
});
