import React, { FC } from 'react';
import black from 'images/titleLink/black-link.png';
import white from 'images/titleLink/white-link.png';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

const hover = () => css`
  :hover {
    opacity: 0.7;
  }
`;

const TitleLinkWrapper = styled.div`
  position: absolute;
  right: 100%;
  left: -3rem;
  top: 0;
  width: 2rem;
  height: 2rem;
  opacity: 0.5;
  cursor: pointer;
  ${hover}
`;

const TitleLinkImg = styled.img`
  width: 100%;
`;

type TitleLinkProps = {
  handleOnClick: HandleTopFocuseFn;
  isWhite?: boolean;
};

const TitleLink: FC<TitleLinkProps> = ({ handleOnClick, isWhite }) => {
  return (
    <TitleLinkWrapper onClick={handleOnClick}>
      <TitleLinkImg src={isWhite ? white : black} alt="linkImg" />
    </TitleLinkWrapper>
  );
};

export default TitleLink;
