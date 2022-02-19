import React, { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { tab } from 'components/Common/GlobalStyle';

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
          <ImgWrapper key={idx}>
            <Img src={item} alt="test" />
          </ImgWrapper>
        ))}
      </Slider>
    </ProjectCarouselWrapper>
  );
};

const ImgWrapper = styled.div`
  height: 450px;
  width: 100%;
  ${tab} {
    height: 400px;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const ProjectCarouselWrapper = styled.div`
  margin-bottom: 1.5rem;
  .slick-arrow {
    display: none !important;
  }
`;

export default ProjectCarousel;
