import React from 'react';
import Carousel from 'components/carousel/carousel';
import CouponImg from 'https://media.giphy.com/media/IwjBgHzWf1ziU3m0Pq/giphy.gif';
import OrderImg from 'https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif';
import DeliveryImg from 'https://media.giphy.com/media/FlcekXZFek8XHrRU46/giphy.gif';
import FemaleCareImg from 'https://media.giphy.com/media/EdealKz0LxKTGs0hYA/giphy.gif';

const data = [
  {
    id: 1,
    image: DeliveryImg,
    link: '#',
    title: 'Fast delivery',
  },
  {
    id: 2,
    image: CouponImg,
    link: '#',
    title: 'Coupon savings',
  },
  {
    id: 3,
    image: OrderImg,
    link: '#',
    title: 'Custom order',
  },
  {
    id: 4,
    image: FemaleCareImg,
    link: '#',
    title: 'Female care',
  },
];

export default function HeroBlock() {
  return (
    <div className="w-full relative my-35px">
      <Carousel data={data} itemClass="px-5px" />
    </div>
  );
}
