import React from 'react';
import Carousel from 'react-multi-carousel';
import InstagramCard from 'components/instagram-card';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';
import { useInstagram } from 'helpers/use-instagram';

type NavButtonProps = {
  onClick: Function;
  children: React.ReactNode | undefined;
};

const PrevButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      aria-label="prev-button"
      className="w-30px h-30px flex items-center justify-center rounded-full text-gray-00 bg-white shadow-navigation absolute left-0 ml-30px transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none"
    >
      {children}
    </button>
  );
};
const NextButton: React.FC<NavButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      aria-label="next-button"
      className="w-30px h-30px flex items-center justify-center rounded-full text-gray-00 bg-white shadow-navigation absolute right-0 mr-20px transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none"
    >
      {children}
    </button>
  );
};

type ButtonGroupProps = {
  next?: Function;
  previous?: Function;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="flex items-center absolute top-half w-full">
      <PrevButton onClick={() => previous()}>
        <ChevronLeft />
      </PrevButton>
      <NextButton onClick={() => next()}>
        <ChevronRight />
      </NextButton>
    </div>
  );
};

export default function InstagramReview() {
  const { posts, isLoading } = useInstagram();
  const responsive = {
    desktopExtraLarge: {
      breakpoint: { max: 3000, min: 1601 },
      items: 7,
    },
    desktopLarge: {
      breakpoint: { max: 1600, min: 1281 },
      items: 5,
      partialVisibilityGutter: 1,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1101 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1100, min: 861 },
      items: 3,
    },
    tabletSmall: {
      breakpoint: { max: 860, min: 465 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mb-40px lg:my-60px px-5 lg:px-40px">
      <div className="relative">
        {!isLoading && (
          <Carousel
            responsive={responsive}
            ssr={true}
            slidesToSlide={1}
            infinite={true}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            className="instagram-review-carousel mt-30px p-1 pt-0 -mx-4"
          >
            {posts?.map((post) => (
              <div className="p-2 pr-4 md:pr-2" key={post.id}>
                <InstagramCard post={post} />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}
