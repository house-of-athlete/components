import React from 'react';
import { render } from '@testing-library/react';
import { BasicExternalLink } from './external_link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicExternalLink />);
  const rendered = getByText('Hello');
  expect(rendered).toBeTruthy();
});
