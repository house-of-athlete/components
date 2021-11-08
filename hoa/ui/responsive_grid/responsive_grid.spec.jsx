import React from 'react';
import { render } from '@testing-library/react';
import { BasicResponsiveGrid } from './responsive_grid.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicResponsiveGrid />);
  const rendered = getByText('hello from ResponsiveGrid');
  expect(rendered).toBeTruthy();
});

