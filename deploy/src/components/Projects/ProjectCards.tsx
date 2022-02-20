import styled from '@emotion/styled';
import { hoverTextUnderline, mobile } from 'components/Common/GlobalStyle';
import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectCarousel';
import test from 'images/projects/test.png';

const ProjectCards = () => {
  return (
    <div>
      <ProjectCard
        title="똑똑하게 N빵하기"
        period="2022.02 (1人 개인 프로젝트)"
      >
        <ProjectCarousel imgs={[test, test, test, test, test]} />
        <div>
          <ProjectsDescriptionsMain>
            <b>
              서울대학교 중앙 동아리 햇빛봉사단에 관한 유익한 정보들을
              문서화하여 제공해주는 웹 서비스
            </b>
            입니다. 해당 동아리 활동을 하던 당시 동아리의 규모에 비해 제대로 된
            대표 웹사이트가 없었다는 점이 아쉬워 구상했었던 아이디어를 바탕으로
            개발하였습니다.
            <P />
            이미 Django 풀 스택으로 개발을 완료한 프로젝트였지만, React의 학습을
            위해 이를 React와 Django를 이용하여 다시 개발하였습니다. 그 과정에서
            Django REST Framework도 학습하여 백 엔드 지식을 더욱 탄탄히 하였고,
            AWS의 리소스들을 직접 할당, 연결, 설정하면서 배포 경험도 쌓을 수
            있었습니다.
          </ProjectsDescriptionsMain>
          <ProjectsDescription>
            <ProjectLabel>주요 기능</ProjectLabel>
            <ProjectValue>벨류</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl>https://github.com/dnr14</ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl>https://github.com/dnr14</ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>라벨</ProjectLabel>
            <ProjectValue>벨류</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>라벨</ProjectLabel>
            <ProjectValue>벨류</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>라벨</ProjectLabel>
            <ProjectValue>벨류</ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
      {/* <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard /> */}
    </div>
  );
};

const ProjectsDescriptionsMain = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  font-weight: 400;
  font-size: 1rem;
`;

const ProjectsDescription = styled.div`
  margin-bottom: 1rem;
`;

const ProjectLabel = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 8.4rem;
  font-weight: 900;
  font-size: 1rem;
  ::before {
    content: '✔';
    display: inline;
    padding-right: 0.5rem;
    ${mobile} {
      display: none;
    }
  }

  ${mobile} {
    display: table;
    width: auto;
    padding-left: 0.5rem;
    margin-bottom: 0.25rem;
    border-left: 5px solid #222;
  }
`;

const ProjectValue = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: calc(100% - 8.4rem);
  font-weight: 400;
  font-size: 1rem;
  ${mobile} {
    width: 100%;
  }
`;

const ProjectsUrl = styled.a`
  display: block;
  color: #258ddb;
  cursor: pointer;
  word-break: break-all;
  ${hoverTextUnderline}
`;

const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export default ProjectCards;
