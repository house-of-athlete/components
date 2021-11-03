import React from 'react';
import { render } from '@testing-library/react';
import { BasicImageByText } from './image_by_text.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicImageByText />);
  const rendered = getByText('hello from ImageByText');
  expect(rendered).toBeTruthy();
});

