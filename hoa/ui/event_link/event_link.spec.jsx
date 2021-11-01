import React from 'react';
import { render } from '@testing-library/react';
import { BasicEventLink } from './event_link.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicEventLink />);
  const rendered = getByText('hello from EventLink');
  expect(rendered).toBeTruthy();
});

