import React from 'react';
import { render } from '@testing-library/react';
import { BasicSanityImage } from './sanity_image.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicSanityImage />);
  const rendered = getByText('hello from SanityImage');
  expect(rendered).toBeTruthy();
});

