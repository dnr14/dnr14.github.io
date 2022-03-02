import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { tab, whiteColor } from 'components/Common/GlobalStyle';
import Layout from 'components/Common/Layout';
import React, { ForwardedRef, forwardRef } from 'react';

const TopWrapper = styled.article`
  background-color: #77675a;
  text-align: center;
`;

const TopTextWrapper = styled.div`
  font-family: Black Han Sans, sans-serif;
  font-weight: 400;
  font-size: 4rem;
  color: #fff;
  word-break: keep-all;
  text-align: center;
  ${whiteColor}
  ${tab} {
    font-size: 3rem;
  }
`;
const BottomTextWrapper = styled.div`
  font-family: Black Han Sans, sans-serif;
  color: #fff;
  word-break: keep-all;
  text-align: center;
  display: flex;
  flex-direction: column;
  ${whiteColor}
  margin: 0 auto 2rem;
`;

const HR = styled.hr`
  width: 3.25rem;
  height: 0;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border-top: 0.2rem solid #f4623a;
`;

const Text = styled.p`
  line-height: 1.7;
  font-weight: 400;
  font-size: 1.25rem;
  opacity: 0.85;
  ${tab} {
    font-size: 1rem;
  }
`;

const Hover = () => css`
  :hover {
    background-color: hsl(9, 89%, 59%);
  }
`;

const MoreButton = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10rem;
  background-color: #f4623a;
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  line-height: 1.5;
  cursor: pointer;
  transition: opacity 0.25s ease-in;
  ${Hover}
`;

type TopProps = {
  handleTopFocuse: HandleTopFocuseFn;
};

const Top = ({ handleTopFocuse }: TopProps, ref: ForwardedRef<HTMLElement>) => {
  return (
    <TopWrapper ref={ref}>
      <Layout>
        <TopTextWrapper>
          - 이민욱 -
          <br /> 프론트엔드 개발자 포트폴리오
        </TopTextWrapper>
        <HR />
        <BottomTextWrapper>
          <Text>안녕하세요.</Text>
          <Text>천천히 꾸준히 공부하고싶은 프론트엔드 개발자 입니다.</Text>
          <Text>꾸준히 공부하기 위해 1일 1커밋 챌린지 중입니다.</Text>
        </BottomTextWrapper>
        <MoreButton onClick={handleTopFocuse}>더 알아보기 ↓</MoreButton>
      </Layout>
    </TopWrapper>
  );
};

export default forwardRef(Top);
