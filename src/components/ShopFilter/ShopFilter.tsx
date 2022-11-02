import { Box, Checkbox, Flex,List,ListItem,Stack,Text } from '@chakra-ui/react';
import React from 'react';

type ShopFilterProps = {
    
};

const ShopFilter:React.FC<ShopFilterProps> = () => {
    
    return(

       
        <Flex direction={"column"} alignItems="center" justifyContent={"center"}  py={"5%"}>
            
            <Box bg={"#f7f2ec"} display="flex" alignItems={"center"} justifyContent="center" w={"60%"}  height= "clamp(180px, 15vw, 250px);">

</Box>
<Flex direction={"row"}>
<Flex direction={"column"} alignItems="start" justify={"center"}>
            <Text fontSize={"20px"} fontWeight="400" display={"flex"} alignItems="center" color={"black"}>
                 KATEGORİ MENÜSÜ
            </Text>
            <List>
            <ListItem>
                Ürünler
            </ListItem>
            </List>
            <Stack spacing={3} direction='column'>
            <Text fontSize={"20px"} fontWeight="400" display={"flex"} alignItems="center" color={"black"}>
                GRAMAJ
            </Text>
            
  <Checkbox >
    200
  </Checkbox>
  <Checkbox >
    400
  </Checkbox>
  <Checkbox >
    600
  </Checkbox>
  <Checkbox >
    800
  </Checkbox>
  <Checkbox >
    1000
  </Checkbox>
</Stack>
</Flex>
<Box w={"50vw"} height="50vh" bg={"red"}>
hjghjg
</Box>
</Flex>
        </Flex>

    )
}
export default ShopFilter;