import styled from '@emotion/styled';
import Footer from 'components/Common/Footer';
import GlobalStyle from 'components/Common/GlobalStyle';
import React, { FC } from 'react';

type WityLayoutProps<T> = FC<T>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function withLayout<T = void>(Com: WityLayoutProps<T>) {
  return ({ ...rest }) => (
    <Container>
      <GlobalStyle />
      <Com {...(rest as T)} />
      <Footer />
    </Container>
  );
}

export default withLayout;
