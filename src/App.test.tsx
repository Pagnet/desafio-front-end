import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders default component', () => {
  render(<App />);
  const title = screen.getByText(/PokéFind/i);
  expect(title).toBeInTheDocument();
});
