import styled from '@emotion/styled';
import React, { FC } from 'react';
import { minWidth } from './GlobalStyle';

const LayoutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 4rem 2rem;
  ${minWidth};
`;

const Layout: FC = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
