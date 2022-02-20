import styled from '@emotion/styled';
import { mobile, tab } from 'components/Common/GlobalStyle';
import React, { FC } from 'react';
const CardWrapper = styled.div`
  width: 33.333%;
  margin-bottom: 2rem;
  ${tab} {
    width: 50%;
  }
  ${mobile} {
    width: 100%;
  }
`;

const CardInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 14rem;
  margin: 0 auto;
  opacity: 0.8;
`;

const CardImgWrapper = styled.div`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  margin-top: 0.2rem;
  margin-right: 2rem;
`;

const CardImg = styled.img`
  width: 100%;
`;

const CardTextLabel = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
`;
const CardTextValue = styled.div`
  font-weight: 500;
  font-size: 1rem;
`;

type CardProps = {
  img: string;
  label: string;
  value: string;
};

const Card: FC<CardProps> = ({ img, label, value }) => {
  return (
    <CardWrapper>
      <CardInnerWrapper>
        <CardImgWrapper>
          <CardImg src={img} alt="calendar" />
        </CardImgWrapper>
        <div>
          <CardTextLabel>{label}</CardTextLabel>
          <CardTextValue> {value}</CardTextValue>
        </div>
      </CardInnerWrapper>
    </CardWrapper>
  );
};

export default Card;
