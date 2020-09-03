import React from 'react';
import { render } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

it('renders properties', () => {
  const { getByText, asFragment } = render(<PropertyCard />);
  expect(asFragment()).toMatchSnapshot();
  expect(getByText(/email/).textContent).toBe('email');
});
