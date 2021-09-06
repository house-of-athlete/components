import React from 'react';
import { render } from '@testing-library/react';
import { BasicCmsLink } from './cms_link.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCmsLink />);
  const rendered = getByText('hello from CmsLink');
  expect(rendered).toBeTruthy();
});
