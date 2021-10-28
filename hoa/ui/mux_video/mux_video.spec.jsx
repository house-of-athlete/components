import React from 'react';
import { render } from '@testing-library/react';
import { BasicMuxVideo } from './mux_video.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicMuxVideo />);
  const rendered = getByText('hello from MuxVideo');
  expect(rendered).toBeTruthy();
});

