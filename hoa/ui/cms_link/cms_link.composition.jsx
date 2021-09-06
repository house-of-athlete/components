import React from 'react';
import { CMSLink } from './cms_link';
import styled from '@emotion/styled';

const RedCMSLink = styled(CMSLink)`
  &,
  &:visited,
  &:hover,
  &:active {
    color: red;
  }
`;

export const RedExternalLink = () => (
  <RedCMSLink link={{ _type: 'externalLink', url: 'http://example.com' }}>
    External Link
  </RedCMSLink>
);

const BoldLink = styled.a`
  font-weight: bold;
`;

export const ExternalLinkWithRenderProps = () => (
  <CMSLink link={{ _type: 'externalLink', url: 'http://example.com' }}>
    {(props) => <BoldLink {...props}>Bold External Link</BoldLink>}
  </CMSLink>
);
