import styled from '@emotion/styled';
import { hoverPositionDown } from 'components/Common/GlobalStyle';
import React, { FC } from 'react';
import SkillsTitle from './SkillsTitle';

const SkillsTechStacksWrapper = styled.div`
  flex-shrink: 0;
  width: 17rem;
  padding: 1.5rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
  ${hoverPositionDown}

  img {
    width: 100%;
  }
`;

type SkillsTechProps = {
  text: string;
};
const SkillsTech: FC<SkillsTechProps> = ({ text, children }) => {
  return (
    <SkillsTechStacksWrapper>
      <SkillsTitle text={text} />
      {children}
    </SkillsTechStacksWrapper>
  );
};

export default SkillsTech;
