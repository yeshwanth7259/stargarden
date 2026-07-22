import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Contact from './Contact';

// Mock SiteVisitModal
vi.mock('./SiteVisitModal', () => {
  return {
    default: ({ isOpen, onClose }) => {
      return isOpen ? (
        <div data-testid="site-visit-modal">
          <button onClick={onClose}>Close Site Visit</button>
        </div>
      ) : null;
    }
  };
});

describe('Contact Component', () => {
  it('renders the main headings', () => {
    render(<Contact />);
    expect(screen.getByText(/Let's Create/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Greener/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Spaces/i)).toBeInTheDocument();
    expect(screen.getByText(/Together/i)).toBeInTheDocument();
    expect(screen.getByText(/Send Us a Message/i)).toBeInTheDocument();
  });

  it('renders contact information elements', () => {
    render(<Contact />);
    expect(screen.getByText(/Our Location/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Call Us/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/WhatsApp Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Working Hours/i)).toBeInTheDocument();
  });

  it('renders the contact form fields', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/Enter your full name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your phone number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell us about your project/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /SEND MESSAGE/i })).toBeInTheDocument();
  });

  it('opens SiteVisitModal when BOOK A SITE VISIT is clicked', async () => {
    render(<Contact />);
    
    expect(screen.queryByTestId('site-visit-modal')).not.toBeInTheDocument();

    const siteVisitBtn = screen.getByRole('button', { name: /BOOK A SITE VISIT/i });
    fireEvent.click(siteVisitBtn);

    await waitFor(() => {
      expect(screen.getByTestId('site-visit-modal')).toBeInTheDocument();
    });
  });

  it('submits form correctly', () => {
    window.open = vi.fn();
    render(<Contact />);
    
    // Check that window.open hasn't been called yet
    expect(window.open).not.toHaveBeenCalled();

    const form = screen.getByPlaceholderText(/Enter your full name/i).closest('form');
    HTMLFormElement.prototype.reset = vi.fn();
    
    // Mock FormData with a class constructor
    class MockFormData {
      get(key) {
        const data = {
          name: 'Test User',
          phone: '1234567890',
          email: 'test@example.com',
          subject: 'indoor',
          message: 'Hello'
        };
        return data[key];
      }
    }
    window.FormData = MockFormData;
    
    fireEvent.submit(form);

    // The form submission logic opens a WhatsApp link in a new tab
    expect(window.open).toHaveBeenCalled();
  });
});
