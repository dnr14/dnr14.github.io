import styled from '@emotion/styled';
import { mobile, tab } from 'components/Common/GlobalStyle';
import React, { FC } from 'react';
import ProjectsTop from './ProjectsTop';

type ProjectCardProps = {
  title: string;
  period: string;
  children: JSX.Element[];
};

const ProjectCard: FC<ProjectCardProps> = ({ children, period, title }) => {
  return (
    <ProjectCardWrapper>
      <ProjectsTop title={title} period={period} />
      <ProjectInfoWrapper>
        <ProjectsImgCarouselWrapper>{children[0]}</ProjectsImgCarouselWrapper>
        <ProjectsDescriptionsWrapper>{children[1]}</ProjectsDescriptionsWrapper>
      </ProjectInfoWrapper>
    </ProjectCardWrapper>
  );
};

const ProjectCardWrapper = styled.div`
  padding: 3rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProjectInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${tab} {
    flex-direction: column;
  }
`;
const ProjectsImgCarouselWrapper = styled.div`
  width: 45%;
  margin-right: 2rem;
  ${tab} {
    width: 90%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
  ${mobile} {
    width: 100%;
  }
`;
const ProjectsDescriptionsWrapper = styled.div`
  width: calc(55% - 2rem);
  ${tab} {
    width: 90%;
  }
  ${mobile} {
    width: 100%;
  }
`;

export default ProjectCard;
