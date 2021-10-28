import React from 'react';
import { render } from '@testing-library/react';
import { BasicImageOrVideo } from './image_or_video.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicImageOrVideo />);
  const rendered = getByText('hello from ImageOrVideo');
  expect(rendered).toBeTruthy();
});

