import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders the logo and contact information', () => {
    render(<Header />);
    
    // Check if WhatsApp number and email exist
    expect(screen.getByText(/WhatsApp: \+91 91083 36666/i)).toBeInTheDocument();
    expect(screen.getByText(/abhi@stargarden.in/i)).toBeInTheDocument();
    
    // Check if Logo image renders (alt text)
    expect(screen.getByAltText(/Star Gardens/i)).toBeInTheDocument();
  });

  it('renders primary navigation links', () => {
    render(<Header />);
    
    expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /About Us/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Services/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
  });

  it('calls onNavigate when a navigation link is clicked', () => {
    const onNavigateMock = vi.fn();
    render(<Header onNavigate={onNavigateMock} />);
    
    const aboutButton = screen.getByRole('button', { name: /About Us/i });
    fireEvent.click(aboutButton);
    
    expect(onNavigateMock).toHaveBeenCalledWith('about');
  });

  it('calls onOpenQuote when Request Quote button is clicked', () => {
    const onOpenQuoteMock = vi.fn();
    render(<Header onOpenQuote={onOpenQuoteMock} onNavigate={vi.fn()} />);
    
    const quoteButton = screen.getByRole('button', { name: /REQUEST QUOTE/i });
    fireEvent.click(quoteButton);
    
    expect(onOpenQuoteMock).toHaveBeenCalledTimes(1);
  });

  it('displays "Client Portal" when user is provided', () => {
    const user = { name: 'Test User' };
    render(<Header user={user} onNavigate={vi.fn()} />);
    
    expect(screen.getByText(/Client Portal/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument();
  });

  it('displays "Login" when user is not provided', () => {
    render(<Header user={null} onNavigate={vi.fn()} />);
    
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
