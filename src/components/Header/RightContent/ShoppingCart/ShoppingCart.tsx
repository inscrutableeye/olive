
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Icon,
    Stack,
  } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { authDrawerState, AuthDrawerState } from '../../../../Atom/Authdraweratom'
import CartItem from './CartItem'

export default function ShoppingCart() {
    const [drawerState, setDrawerState] = useRecoilState(authDrawerState)
    const btnRef = useRef()
    const handleClose = () => {
        setDrawerState(prev => ({
          ...prev,
          open: false
        }))
      }

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  
    return (
      <>
            <Icon as={FaShoppingCart} style={{width:"30px", height:"30px", color:"black"}} onClick={() => setDrawerState({ open: true, view: 'isOpen' })}  />
        <Drawer
          isOpen={drawerState.open}
          placement='right'
          onClose={handleClose}
          size="md"
      
        >
          <DrawerOverlay opacity={"0.1"} />
          <DrawerContent w={"100%"} bg={"white"} textColor="black">
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>
  
            <DrawerBody>
             <Stack>
              <CartItem name={''} description={''} image={''} quantity={0}/>
             </Stack>
            </DrawerBody>
  
            <DrawerFooter>
          
              <Button w={"100%"}  textColor="white"    bg={" #a8b417"}
             _hover={{
              bg:"#69742e"
             }}>Check Out</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


