import React, { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { mobile } from 'components/Common/GlobalStyle';

type ProjectCarouselProps = {
  imgs: string[];
};

const ProjectCarousel: FC<ProjectCarouselProps> = ({ imgs }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ProjectCarouselWrapper>
      <Slider {...settings}>
        {imgs.map((item, idx) => (
          <div key={idx}>
            <Img src={item} alt="img" />
          </div>
        ))}
      </Slider>
    </ProjectCarouselWrapper>
  );
};

const Img = styled.img`
  min-height: 500px;
  height: 100%;
  width: 100%;
  ${mobile} {
    min-height: 250px;
  }
`;

const ProjectCarouselWrapper = styled.div`
  margin-bottom: 1.5rem;
  .slick-arrow {
    display: none !important;
  }
`;

export default ProjectCarousel;
