import styled from '@emotion/styled';
import React, { FC } from 'react';

const SkillsTitleWrapper = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

type SkillsTitleProps = {
  text: string;
};

const SkillsTitle: FC<SkillsTitleProps> = ({ text }) => {
  return <SkillsTitleWrapper>{text}</SkillsTitleWrapper>;
};

export default SkillsTitle;
