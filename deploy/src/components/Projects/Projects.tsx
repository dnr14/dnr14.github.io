import styled from '@emotion/styled';
import Layout from 'components/Common/Layout';
import Title from 'components/Common/Title';
import React, { forwardRef } from 'react';
import { DivRef } from 'types/types';
import ProjectCards from './ProjectCards';

type ProjectsProps = {
  handleTopFocuse: HandleTopFocuseFn;
};

const Projects = ({ handleTopFocuse }: ProjectsProps, ref: DivRef) => {
  return (
    <ProjectsWrapper ref={ref}>
      <Layout>
        <Title
          text="PROJECTS"
          handleTopFocuse={handleTopFocuse}
          color="#FFF"
          isWhite
        />
        <ProjectCards />
      </Layout>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.article`
  background-color: #1d809f;
`;

export default forwardRef(Projects);
