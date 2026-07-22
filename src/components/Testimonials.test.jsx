import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Testimonials from './Testimonials';

describe('Testimonials Component', () => {
  it('renders the section title', () => {
    render(<Testimonials />);
    expect(screen.getByText(/What Our Clients Say/i)).toBeInTheDocument();
  });

  it('renders some of the testimonials text and authors', () => {
    render(<Testimonials />);
    // Check for some static text from the testimonials array
    expect(screen.getAllByText(/Star Gardens transformed our office/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Facilities Manager/i)[0]).toBeInTheDocument();
    
    expect(screen.getAllByText(/Beautiful outdoor landscaping/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Property Manager/i)[0]).toBeInTheDocument();
  });

  it('renders company names correctly', () => {
    render(<Testimonials />);
    expect(screen.getAllByText(/Accenture/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Cove Stays/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/OLA/i)[0]).toBeInTheDocument();
  });
});
