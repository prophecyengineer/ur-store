import React from 'react';
import MultiCarousel from 'react-multi-carousel';

import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';

import {
  NavButtonGroupBase,
  NavArrowButtonBase,
  NavPrevButtonRadius,
  NavNextButtonRadius,
  HeroCarouselBase,
} from 'components/utils/theme';

type CustomButtonProp = {
  onClick?: (e: any) => void;
  children: React.ReactNode;
};

type ButtonGroupProps = {
  next?: Function;
  previous?: Function;
};

interface CarouselItemProps {
  background?: string;
  children: React.ReactNode | undefined;
}

type CarouselProps = {
  data: CarouselItemProps[];
  autoPlay?: boolean;
  infinite?: boolean;
  itemClass?: string;
  className?: string;
  containerClass?: string;
};

const PrevButton: React.FC<CustomButtonProp> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      aria-label="prev-button"
      className={NavArrowButtonBase + ' ' + NavPrevButtonRadius}
    >
      {children}
    </button>
  );
};
const NextButton: React.FC<CustomButtonProp> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      aria-label="next-button"
      className={NavArrowButtonBase + ' ' + NavNextButtonRadius}
    >
      {children}
    </button>
  );
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className={NavButtonGroupBase}>
      <PrevButton onClick={() => previous()}>
        <ChevronLeft height="12px" />
      </PrevButton>
      <NextButton onClick={() => next()}>
        <ChevronRight height="12px" />
      </NextButton>
    </div>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3600, min: 0 },
    items: 1,
  },
};

const Carousel: React.FC<CarouselProps> = ({
  data,
  autoPlay,
  infinite,
  itemClass,
  className,
  containerClass,
  ...props
}) => {
  return (
    <MultiCarousel
      arrows={false}
      responsive={responsive}
      ssr={true}
      showDots={false}
      slidesToSlide={1}
      infinite={infinite}
      containerClass={containerClass}
      itemClass={itemClass}
      autoPlay={autoPlay}
      autoPlaySpeed={3000}
      renderButtonGroupOutside={true}
      additionalTransfrom={0}
      customButtonGroup={<ButtonGroup />}
      className={className}
      {...props}
    >
      {data.map((item, index) => (
        <div
          className={HeroCarouselBase + ' ' + 'hero-carousel-item-base'}
          style={{
            backgroundImage: `url(${item.background})`,
            backgroundColor: '#F5FAFB',
          }}
          key={index}
        >
          {item.children}
        </div>
      ))}
    </MultiCarousel>
  );
};

const defaultProps = {
  autoPlay: false,
  infinite: true,
  className: '',
};

Carousel.defaultProps = defaultProps;

export default Carousel;
