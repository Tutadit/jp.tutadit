import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react Button', () => {
  render(<App />);
  const ButtonElement = screen.getByText(/learn react/i);
  expect(ButtonElement).toBeInTheDocument();
});
