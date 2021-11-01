import React from 'react';
import { render } from '@testing-library/react';
import { BasicPreventScrolling } from './prevent_scrolling.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicPreventScrolling />);
  const rendered = getByText('hello from PreventScrolling');
  expect(rendered).toBeTruthy();
});

