/* eslint-disable react/jsx-key */
import React, { useRef, useState } from 'react';
import {
  Box,
  Image,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null)

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
          'olivetree1.jpg',
      }, {

        image:
          'olive.jpg',
      }
 
  ];

  return (
    <>
    <Box
      
      height={'50px'}
      width={'full'}
      >
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
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box   key={index}>
        <Image src={card.image.toString()}  />
        </Box>
        ))}

      </Slider>
      </>
  );
}