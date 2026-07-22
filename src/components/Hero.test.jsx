import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from './Hero';

// Mock QuoteModal to easily test if it opens
vi.mock('./QuoteModal', () => {
  return {
    default: ({ isOpen, onClose }) => {
      return isOpen ? (
        <div data-testid="quote-modal">
          <button onClick={onClose}>Close Modal</button>
        </div>
      ) : null;
    }
  };
});

describe('Hero Component', () => {
  it('renders main headings', () => {
    render(<Hero />);
    expect(screen.getByText(/Green Spaces/i)).toBeInTheDocument();
    expect(screen.getByText(/Inspire/i)).toBeInTheDocument();
  });

  it('renders call to action buttons', () => {
    render(<Hero />);
    expect(screen.getByRole('button', { name: /Request Consultation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Projects/i })).toBeInTheDocument();
  });

  it('renders the stats section', () => {
    render(<Hero />);
    expect(screen.getByText(/Years of Excellence/i)).toBeInTheDocument();
    expect(screen.getByText(/Corporate Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Plants Installed/i)).toBeInTheDocument();
  });

  it('opens QuoteModal when Request Consultation is clicked', async () => {
    render(<Hero />);
    
    // Initial state: modal should not be visible
    expect(screen.queryByTestId('quote-modal')).not.toBeInTheDocument();

    // Click the button
    const requestBtn = screen.getByRole('button', { name: /Request Consultation/i });
    fireEvent.click(requestBtn);

    // Modal should be visible now
    await waitFor(() => {
      expect(screen.getByTestId('quote-modal')).toBeInTheDocument();
    });

    // Click close inside mocked modal
    fireEvent.click(screen.getByText('Close Modal'));

    // Modal should be hidden again
    await waitFor(() => {
      expect(screen.queryByTestId('quote-modal')).not.toBeInTheDocument();
    });
  });
});
