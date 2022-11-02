import { Box, Flex, HStack, LinkBox, LinkOverlay, Image,Text } from '@chakra-ui/react';
import React from 'react';

type ItemsProps = {
    
};

const Items:React.FC<ItemsProps> = () => {
    
    return (
        <Flex alignItems={"center"} justifyContent="center" flexDirection={"row"} padding="20">
            <LinkBox bg={"#372a28"}>
<LinkOverlay href='/'>
<Flex alignItems={"center"} direction={"column"} pb="20">
<Image src='oliveboil.png'/>
<Text fontSize={"30px"} color="white">
Zeytin Yağları
</Text>
<Text color="white" fontSize={"20px"}>
Neque porro quisquam est qui dolorem<br></br> ipsum quia dolor sit amet, consectetur, <br></br> adipisci velit...
</Text>
</Flex>
</LinkOverlay>
            </LinkBox>

            <LinkBox bg={"#c7cdc5"}>
<LinkOverlay href='/'>
<Flex alignItems={"center"} direction={"column"} pb="20">
<Image src='olives.png'/>
<Text color="white" fontSize={"30px"}>
Zeytinler
</Text>
<Text color="white" fontSize={"20px"}>
Neque porro quisquam est qui dolorem<br></br> ipsum quia dolor sit amet, consectetur, <br></br> adipisci velit...
</Text>

</Flex>
</LinkOverlay>
            </LinkBox>

            <LinkBox bg={"#8ca280"}>
<LinkOverlay href='/'>
<Flex alignItems={"center"} direction={"column"} pb="20">
<Image src='olivesahampoo.png'/>
<Text color="white" fontSize={"30px"}>
Kişisel Bakım Ürünleri
</Text>
<Text color="white" fontSize={"20px"}>
Neque porro quisquam est qui dolorem<br></br> ipsum quia dolor sit amet, consectetur, <br></br> adipisci velit...
</Text>

</Flex>
</LinkOverlay>
            </LinkBox>
        </Flex>
    )
}
export default Items;