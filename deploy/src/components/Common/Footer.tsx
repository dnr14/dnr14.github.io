import React, { FC } from 'react';
import styled from '@emotion/styled';
import { flexJustifyAlign } from './GlobalStyle';

const FooterWrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  margin-top: auto;
  color: #453a33;
  padding: 3.125rem 0;
  flex-direction: column;
  ${flexJustifyAlign('center', 'center')}
  line-height: 1.5;
`;

const Footer: FC = () => (
  <FooterWrapper>
    <p> Thank You for Visiting portfolio, Have a Good Day 😆</p>
    <p>© 2021 Developer MW, Powered By Gatsby.</p>
  </FooterWrapper>
);

export default Footer;
