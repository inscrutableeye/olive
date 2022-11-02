import { Flex } from '@chakra-ui/react';
import React from 'react';
import Header from '../../src/components/Header/Header';
import ShopFilter from '../../src/components/ShopFilter/ShopFilter';

type indexProps = {
    
};

const Shop:React.FC<indexProps> = () => {
    
    return (
        <Flex direction={"column"}>
            <Header/>
            <ShopFilter/>
        </Flex>
    )
}
export default Shop;