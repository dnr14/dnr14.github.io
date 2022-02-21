import styled from '@emotion/styled';
import { mobile, tab } from 'components/Common/GlobalStyle';
import React, { FC } from 'react';

type ProjectsTitleProps = {
  title: string;
  period: string;
};

const ProjectsTop: FC<ProjectsTitleProps> = ({ title, period }) => {
  return (
    <div>
      <ProjectsTitle>{title}</ProjectsTitle>
      <ProjectsPeriod>{period}</ProjectsPeriod>
    </div>
  );
};

export default ProjectsTop;

const ProjectsTitle = styled.h2`
  padding-bottom: 0.5rem;
  font-family: Black Han Sans, sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  color: #222;
  text-align: center;
  ${tab} {
    font-size: 2rem;
  }
  ${mobile} {
    font-size: 1.8rem;
  }
`;

const ProjectsPeriod = styled.div`
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 1rem;
  color: #6c757d;
  text-align: center;
  opacity: 0.8;
`;
