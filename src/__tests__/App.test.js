import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders correctly', () => {
  const { getByText } = render(<App />);
  const nav = getByText(/view properties/i);
  expect(nav).toBeInTheDocument();
});
