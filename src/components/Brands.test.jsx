import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Brands from './Brands';

describe('Brands Component', () => {
  it('renders the brands section successfully', () => {
    const { container } = render(<Brands />);
    expect(container).toBeInTheDocument();
  });

  it('displays the esteemed clients image', () => {
    render(<Brands />);
    const image = screen.getByAltText(/Our Esteemed Clients - Star Gardens/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/clients-grid.jpg');
  });
});
