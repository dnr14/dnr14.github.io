import styled from '@emotion/styled';
import React, { FC } from 'react';
import TitleLink from './TitleLink';
import { mobile, tab } from './GlobalStyle';

type TitleProps = {
  text: string;
  color?: string;
  borderColor?: string;
  handleTopFocuse: HandleTopFocuseFn;
  isWhite?: boolean;
};

const TitleWrapper = styled.div<{
  color?: string;
  borderColor?: string;
}>`
  position: relative;
  display: table;
  margin: 0 auto 3rem;
  color: ${({ color }) => color || '#000000'};
  border-bottom: 1px solid;
  border-bottom-color: ${({ borderColor }) => borderColor || '#cccccc'};
  font-family: Black Han Sans, sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.5;
  ${tab} {
    font-size: 2.5rem;
  }
  ${mobile} {
    font-size: 2rem;
  }
`;

const Title: FC<TitleProps> = ({
  text,
  color,
  borderColor,
  isWhite,
  handleTopFocuse,
}) => {
  return (
    <TitleWrapper color={color} borderColor={borderColor}>
      {text}
      <TitleLink handleOnClick={handleTopFocuse} isWhite={isWhite} />
    </TitleWrapper>
  );
};

export default Title;
