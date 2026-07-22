import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Services from './Services';

// Mock scrollTo to prevent errors
window.scrollTo = vi.fn();

// Mock Modals to easily test if they open
vi.mock('./QuoteModal', () => {
  return {
    default: ({ isOpen, onClose }) => {
      return isOpen ? (
        <div data-testid="quote-modal">
          <button onClick={onClose}>Close Quote</button>
        </div>
      ) : null;
    }
  };
});

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

describe('Services Component', () => {
  it('renders main headings', () => {
    render(<Services />);
    expect(screen.getByText(/Complete Green/i)).toBeInTheDocument();
    expect(screen.getByText(/For Every Space/i)).toBeInTheDocument();
  });

  it('renders the services list', () => {
    render(<Services />);
    expect(screen.getByText('Plants on Hire')).toBeInTheDocument();
    expect(screen.getByText('Landscape Work')).toBeInTheDocument();
    expect(screen.getByText('Vertical Gardening')).toBeInTheDocument();
    expect(screen.getByText('Indoor Plants')).toBeInTheDocument();
  });

  it('renders the stats section', () => {
    render(<Services />);
    expect(screen.getByText(/Projects Completed/i)).toBeInTheDocument();
    expect(screen.getByText(/Corporate Clients/i)).toBeInTheDocument();
  });

  it('opens SiteVisitModal when SCHEDULE A SITE VISIT is clicked', async () => {
    render(<Services />);
    
    expect(screen.queryByTestId('site-visit-modal')).not.toBeInTheDocument();

    const siteVisitBtn = screen.getByRole('button', { name: /SCHEDULE A SITE VISIT/i });
    fireEvent.click(siteVisitBtn);

    await waitFor(() => {
      expect(screen.getByTestId('site-visit-modal')).toBeInTheDocument();
    });
  });

  it('opens QuoteModal when REQUEST A PROPOSAL is clicked', async () => {
    render(<Services />);
    
    expect(screen.queryByTestId('quote-modal')).not.toBeInTheDocument();

    const quoteBtn = screen.getByRole('button', { name: /REQUEST A PROPOSAL/i });
    fireEvent.click(quoteBtn);

    await waitFor(() => {
      expect(screen.getByTestId('quote-modal')).toBeInTheDocument();
    });
  });
});
