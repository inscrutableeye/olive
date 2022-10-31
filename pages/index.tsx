import { Divider, Flex , Image} from "@chakra-ui/react";
import Carousel from "../src/components/Carousel/Carousel";
import Header from "../src/components/Header/Header";


export default function Home() {
  return (
   <>
   <Flex direction={"column"} bg="white"  >
<Header/>
<Carousel/>
   </Flex>
   </>
  )
}
