import styled from '@emotion/styled';
import Layout from 'components/Common/Layout';
import Title from 'components/Common/Title';
import React, { forwardRef } from 'react';
import gitHub from 'images/archiving/git-hub.png';
import {
  hoverPositionDown,
  hoverTextUnderline,
} from 'components/Common/GlobalStyle';
import { DivRef } from 'types/types';

type Archiving = {
  handleTopFocuse: HandleTopFocuseFn;
};

const Archiving = ({ handleTopFocuse }: Archiving, ref: DivRef) => {
  return (
    <ArchivingWrapper ref={ref}>
      <Layout>
        <Title
          text="ARCHIVING"
          handleTopFocuse={handleTopFocuse}
          color="#FFF"
          isWhite
        />
        <ArchivingInnerWrapper>
          <ArchivingGitHub>
            <GithubImgWrapper>
              <GithubImg src={gitHub} alt="gitHub" />
            </GithubImgWrapper>
            <ArchivingUrl href="https://github.com/dnr14" target={'_blank'}>
              https://github.com/dnr14
            </ArchivingUrl>
            <ArchivingDescription>
              <b>소스 코드 저장소</b>입니다.
            </ArchivingDescription>
            <ArchivingTextWrapper>
              <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
              <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
              <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
            </ArchivingTextWrapper>
          </ArchivingGitHub>
        </ArchivingInnerWrapper>
      </Layout>
    </ArchivingWrapper>
  );
};

export default forwardRef(Archiving);

const ArchivingWrapper = styled.article`
  background-color: #222;
`;
const ArchivingInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ArchivingGitHub = styled.div`
  width: 26rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  ${hoverPositionDown}
`;

const GithubImgWrapper = styled.div`
  display: block;
  width: 12rem;
  margin-bottom: 1rem;
`;
const GithubImg = styled.img`
  width: 100%;
`;

const ArchivingUrl = styled.a`
  display: inline-block;
  color: #258ddb;
  ${hoverTextUnderline}
`;

const ArchivingDescription = styled.p`
  color: #444;
  margin: 1rem 0;
`;

const ArchivingTextWrapper = styled.ul`
  padding-left: 1rem;
  margin: 0;
  color: #444;
  & > li {
    position: relative;
    margin-bottom: 0.5rem;
    ::before {
      display: block;
      position: absolute;
      content: '';
      width: 7.5px;
      height: 7.5px;
      border-radius: 50%;
      background-color: #444;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 103%;
    }
  }
`;
