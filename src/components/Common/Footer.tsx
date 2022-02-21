import React, { FC } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  font-family: 'Ubuntu', sans-serif;
  color: #fff;
  padding: 3.125rem 0;
  line-height: 1.5;
  height: 8rem;
  background-color: #222;
  text-align: center;
`;

const Footer: FC = () => (
  <FooterWrapper>
    <p> Thank You for Visiting portfolio, Have a Good Day 😆</p>
    <p>© 2021 Developer MW, Powered By Gatsby.</p>
  </FooterWrapper>
);

export default Footer;
