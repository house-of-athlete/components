import React from 'react';
import { render } from '@testing-library/react';
import { BasicUseFullWidthSizes } from './use_full_width_sizes.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicUseFullWidthSizes />);
  const rendered = getByText('hello from UseFullWidthSizes');
  expect(rendered).toBeTruthy();
});

