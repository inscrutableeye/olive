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

  LinkBox,
  LinkOverlay,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { Navigate , useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';

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

  const [slider, setSlider] = useState<Slider | null>(null)
  const router = useRouter()

 
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


        
        <Button onClick={()=> router.push("/Shop")}   borderRadius={"20px"}  bg="#372a28"  _hover={{
          bg:"#c7cdc5"
        }} zIndex={1} mt="-30%" ml={"10%"} padding="10">
          <Text color={"white"} fontSize="50px" fontStyle={"normal"} fontWeight="700" >
          Alışverişe Başla
          </Text>
          </Button>
        </Box>
        ))}

      </Slider>
      </>
  );
}