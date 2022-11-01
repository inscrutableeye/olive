import { Box, Center, Flex, HStack, Icon, Link, Stack, Wrap, WrapItem ,Image ,Text, Select, useColorModeValue, SelectProps, Button } from '@chakra-ui/react';

import React from 'react';
import { FiGift } from 'react-icons/fi';

type CartItemProps = {
    isGiftWrapping?: boolean
    name: string
    description: string
    image: string
    onChangeQuantity?: (quantity: number) => void
    onClickGiftWrapping?: () => void
    onClickDelete?: () => void
    quantity: number
};

const QuantitySelect = (props: SelectProps) => {
    return (
      <Select
        maxW="64px"
        aria-label="Select quantity"
  
        {...props}
      >
        <option style={{backgroundColor:"white"}} value="1">1</option>
        <option style={{backgroundColor:"white"}} value="2">2</option>
        <option style={{backgroundColor:"white"}} value="3">3</option>
        <option style={{backgroundColor:"white"}} value="4">4</option>
      </Select>
    )
  }

const CartItem:React.FC<CartItemProps> = (props: CartItemProps) => {
    const { isGiftWrapping = true, image, name, description,    onChangeQuantity,  onClickDelete, quantity } = props
    return(

        <Flex direction={"row"}>
        <Stack direction="column" spacing="20" width="100px">
        <Image
          rounded="lg"
          width="90px"
          height="90px"
          fit="cover"
          src={"olive1.jpg"}
          alt={"zeytin"}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{name}</Text>
            <Text color={"gray.400"} fontSize="sm">
              {description}
            </Text>
          </Stack>
        </Box>
      </Stack>
      <Flex direction={"column"}>
        <Text color="black"> Anotolia Zeytinyağı </Text>
        <Text color="gray.400">Riviera</Text>
      <QuantitySelect   value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}/>
          </Flex>
          <Flex direction={"column"} ml="100" alignItems={"center"}>
            <Text color={"black"} pb="5">
                400₺
            </Text>
            <Button textColor={"black"} variant="ghost" _hover={{bg:"green"}}>
Kaldır
            </Button>
          </Flex>
      </Flex>
    )
}
export default CartItem;