import { Box, Divider, Flex , Image} from "@chakra-ui/react";
import Carousel from "../src/components/Carousel/Carousel";
import { Footer } from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Items from "../src/components/Items/Items";
import ProductAddToCart from "../src/components/ProductAddToCart/ProductAddToCart";


export default function Home() {
  return (
   <>
   <Flex direction={"column"} bg="white"  >
<Header/>
<Carousel/>
<ProductAddToCart/>
<Items/>
<Footer/>
   </Flex>
   </>
  )
}
