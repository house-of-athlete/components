import React from 'react';
import { render } from '@testing-library/react';
import { BasicPreview } from './preview.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicPreview />);
  const rendered = getByText('hello from Preview');
  expect(rendered).toBeTruthy();
});

