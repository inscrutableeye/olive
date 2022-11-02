import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text,
    IconButton,
    Button
  } from '@chakra-ui/react';
  import ArrowL from "../../../public/ArrowS.svg";
  import ArrowR from "../../../public/ArrowR.svg";
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import { authDrawerState } from '../../Atom/Authdraweratom';
  
  const data : Array<{
    imageURL:String
    name:string
    price:number
    
  }>  = [ {
    imageURL:
      'olive1.jpg',
    name: 'Sızma Zeytinyağı',
    price: 4.5,

  }, {
    imageURL:
      'olive1.jpg',
    name: 'Sızma Zeytinyağı',
    price: 4.5,

  }, {
    imageURL:
      'olive1.jpg',
    name: 'Sızma Zeytinyağı',
    price: 4.5,

  }, {
    imageURL:
      'olive1.jpg',
    name: 'Sızma Zeytinyağı',
    price: 4.5,

  } ]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  
  function ProductAddToCart() {
    const [slider, setSlider] = useState<Slider | null>(null)
    const [drawerState, setDrawerState] = useRecoilState(authDrawerState)
    return (
        <>
      <Flex       
      flexDirection={'column'}
        justifyContent={{ base: 'center', lg: "space-between" }}
        bg="#fcffde"
    mt={"-5%"}
        >
   

        {/* Left Icon */}

        <Box ml={"150px"}  transform="translateY(300px)">
        
            <Text fontSize={"50px"} fontStyle="normal"  fontWeight="600" color={"black"}>
                FIRSAT <br></br> ÜRÜNLERİ
            </Text>
        <IconButton
          aria-label='left-arrow'
          bg="#a8b417"
          borderRadius='full'
          _hover={{
            bg:"#69742e"
          }}
       mr={"5"}
         
          onClick={() => slider?.slickPrev()}
          zIndex={2}
        >
          <BiLeftArrowAlt color='white' />
        </IconButton>
        {/* Right Icon */}

        <IconButton
          aria-label='right-arrow'
          bg="#a8b417"
          borderRadius='full'
          _hover={{
            bg:"#69742e"
          }}
          onClick={() => slider?.slickNext()}
          zIndex={2}
        >
          <BiRightArrowAlt color='white' />
        </IconButton>
      
        </Box>
        {/* Slider */}
  
      <Box
          width={{ xl: "70%", base: "100%" }}
          marginTop={{ base: "30px" }}
        ml="30%"
          p={"12"}
         
         
        >
<Slider {...settings} ref={slider => setSlider(slider)}>
{data.map((val,index)=> (
        <Box
        mb={"10"}
        ml="12px"
          bg={'white'}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="xl"
          position="relative"
          key={index}
          >
     
  
          <Image
            src={val.imageURL.toString()}
            alt={`Picture of ${val.name}`}
            roundedTop="lg" 
          />
  
          <Box p="6" bg={"#a8b417"}>
       
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                >
                {val.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
       
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} onClick={() => setDrawerState({ open: true, view: 'item' }) } />
       
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={"white"}>
             
                {val.price.toFixed(2)}
                <Box as="span" color={'white'} fontSize="lg">
              ₺
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
))}
         </Slider>
         </Box>
         </Flex>
         </>
    );
  }
  
  export default ProductAddToCart;