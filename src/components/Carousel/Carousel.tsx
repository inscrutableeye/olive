/* eslint-disable react/jsx-key */
import React, { useRef } from 'react';
import {
  Box,
  Image,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const slickRef: any = useRef();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes


  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards: Array<{
    image:string
  }> = [
    {
 
      image:
        'olivetree.jpg',
    }, {
 
        image:
          'olivetree.jpg',
      },
 
  ];

  return (
    <>
    <Box
      position={'relative'}
      height={'50px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
     
      {/* Slider */}
      </Box>
      <Slider {...settings} ref={slickRef as any}>
        {cards.map((card, index) => (
          <Box  key={index}>
        <Image src={card.image.toString()}/>
        </Box>
        ))}
      </Slider>
      </>
  );
}