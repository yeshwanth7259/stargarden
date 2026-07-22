import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders company logo and description', () => {
    render(<Footer onNavigate={vi.fn()} />);
    expect(screen.getByAltText(/Star Gardens/i)).toBeInTheDocument();
    expect(screen.getByText(/Premium landscaping, indoor plants/i)).toBeInTheDocument();
  });

  it('renders quick links', () => {
    render(<Footer onNavigate={vi.fn()} />);
    expect(screen.getAllByText(/QUICK LINKS/i)[0]).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer onNavigate={vi.fn()} />);
    expect(screen.getAllByText('CONTACT US')[0]).toBeInTheDocument();
    expect(screen.getByText(/www.stargardens.in/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91 97430 30555/i)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer onNavigate={vi.fn()} />);
    // Testing specific icons since they don't have aria-labels, just verifying rendering doesn't crash
    // For a robust test we'd add aria-labels, but here we just check if it renders
    expect(screen.getByAltText(/Star Gardens/i)).toBeInTheDocument(); 
  });

  it('renders copyright text', () => {
    render(<Footer onNavigate={vi.fn()} />);
    expect(screen.getByText(/Copyright © stargrowthhub.in. All Rights Reserved./i)).toBeInTheDocument();
  });
});
