import Layout from 'components/Common/Layout';
import Title from 'components/Common/Title';
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import Card from './Card';
import calendar from 'images/about/calendar-fill.svg';
import envelope from 'images/about/envelope-fill.svg';
import geo from 'images/about/geo-alt-fill.svg';
import person from 'images/about/person-fill.svg';
import telephone from 'images/about/telephone-fill.svg';

const AboutInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type AboutProps = {
  handleTopFocuse: HandleTopFocuseFn;
};

const About = ({ handleTopFocuse }: AboutProps, ref: DivRef) => {
  return (
    <article ref={ref}>
      <Layout>
        <Title text="ABOUT ME" handleTopFocuse={handleTopFocuse} />
        <AboutInnerWrapper>
          <Card img={person} label="이름" value="이민욱" />
          <Card img={calendar} label="생년월일" value="92.11.01" />
          <Card img={geo} label="주소지" value="경기도 의정부시" />
          <Card img={telephone} label="연락처" value="010-4720-5164" />
          <Card img={envelope} label="이메일" value="dnr0145@gmail.com" />
        </AboutInnerWrapper>
      </Layout>
    </article>
  );
};

export default forwardRef(About);
