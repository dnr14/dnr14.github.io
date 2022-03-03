import styled from '@emotion/styled';
import { maxTab, mobile } from 'components/Common/GlobalStyle';
import React, { FC } from 'react';
import ProjectsTop from './ProjectsTop';

const ProjectCard: FC<ProjectCardProps> = ({
  children,
  period,
  title,
  subTitle,
}) => {
  return (
    <ProjectCardWrapper>
      <ProjectsTop title={title} period={period} subTitle={subTitle} />
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
`;
const ProjectsImgCarouselWrapper = styled.div`
  width: 45%;
  margin-right: 2rem;
  ${maxTab} {
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
  ${maxTab} {
    width: 90%;
  }
  ${mobile} {
    width: 100%;
  }
`;

export default ProjectCard;
