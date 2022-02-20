import styled from '@emotion/styled';
import Layout from 'components/Common/Layout';
import Title from 'components/Common/Title';
import React, { forwardRef } from 'react';
import front1 from 'images/skills/front1.png';
import front2 from 'images/skills/front2.png';
import front3 from 'images/skills/front3.png';
import deploy1 from 'images/skills/deploy1.png';
import deploy2 from 'images/skills/deploy2.png';
import versionControl from 'images/skills/versionControl.png';
import communication from 'images/skills/communication.png';
import SkillsTech from './SkillsTech';
import { DivRef } from 'types/types';

const SkillsWrapper = styled.article`
  background-color: #f9c51d;
`;

const SkillsTechStacksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;

type SkillsProps = {
  handleTopFocuse: HandleTopFocuseFn;
};

const Skills = ({ handleTopFocuse }: SkillsProps, ref: DivRef) => {
  return (
    <SkillsWrapper ref={ref}>
      <Layout>
        <Title
          text="SKILLS"
          handleTopFocuse={handleTopFocuse}
          borderColor="#000"
        />
        <SkillsTechStacksContainer>
          <SkillsTech text="FrontEnd">
            <img src={front1} alt="front1" />
            <img src={front2} alt="front2" />
            <img src={front3} alt="front3" />
          </SkillsTech>
          <SkillsTech text="Deployment">
            <img src={deploy1} alt="deploy1" />
            <img src={deploy2} alt="deploy2" />
          </SkillsTech>
          <SkillsTech text="Version Control">
            <img src={versionControl} alt="versionControl" />
          </SkillsTech>
          <SkillsTech text="Communication">
            <img src={communication} alt="communication" />
          </SkillsTech>
        </SkillsTechStacksContainer>
      </Layout>
    </SkillsWrapper>
  );
};

export default forwardRef(Skills);
