import React from 'react';
import Carousel from 'components/hero-carousel';
import SliderComponent from './slider-component';
import BannerImageOne from 'assets/image/slider_01.jpg';
import BannerImageTwo from 'assets/image/slider_02.jpg';

const data = [
  { id: 1, background: BannerImageOne, children: <SliderComponent /> },
  { id: 2, background: BannerImageTwo, children: <SliderComponent /> },
];

export default function HeroBlock() {
  return (
    <div className="w-full relative min-h-480px">
      <Carousel data={data} />
    </div>
  );
}
