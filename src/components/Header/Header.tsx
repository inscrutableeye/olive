/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/alt-text */
import { Input, Flex, Image, Text, InputGroup, InputRightElement, Stack, FormControl, LinkBox, LinkOverlay, Icon, Divider, Button, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, useDisclosure, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {SearchIcon} from "@chakra-ui/icons"
import {SlBasket} from "react-icons/sl"
import {AiOutlineSearch, AiOutlineUser} from "react-icons/ai"
import AuthButton from '../../Modal/AuthButton';
import AuthModal from '../../Modal/AuthModal';
import RightContent from './RightContent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "../../Firebase/ClientApp"
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
const HeaderLinks : Array<{
  name:string
  link:string
}> = [
{
    name:"Biz Kimiz?",
    link:"/"
},{
    name:"Haberler",
    link:"/"
},{
    name:"İletişim",
    link:"/"
}
]
const HeaderLink : Array<{
    name:string
    link:string
  }> = [
  {
      name:"ZEYTİN YAĞI",
      link:"/"
  },{
      name:"ZEYTİN",
      link:"/"
  },{
      name:"TEMEL GIDA",
      link:"/"
  },{
    name:"EV VE YAŞAM",
    link:"/"
  }
  ]

const Header:React.FC = () => {
    const [user, loading, error] = useAuthState(auth)
    return(
        <>

        <Flex direction={"column"}  >

        <Flex direction={"row"}   height={"200px"} align={"center"} justify="space-evenly">
           
<Stack  direction={"row"} spacing="20" >
{
    HeaderLinks.map((val, index)=> {
        return(
           <Stack key={index}  >
                <LinkBox  >
                <LinkOverlay textDecoration={"none"} color={"black"}    _hover={{
                    color:"#93aa52"
                }} href={val.link.toString()} > 
                
                <Text
                fontStyle="normal"
                fontSize={"20px"}
             
             
                >
                    {val.name}
                </Text>
                </LinkOverlay>
                </LinkBox>
                </Stack>
            
        )
    })
}
</Stack>
      
            <Image  width={"450px"} height="450px" pr={"170"} src='OLIVE OUL3.svg'/>
           
            <Stack direction={"row"} spacing="10">
            <Icon as={FaSearch}  style={{width:"30px", height:"30px", color:"black"}} />
            <RightContent user={user}/>
           <Icon as={FaShoppingCart} style={{width:"30px", height:"30px", color:"black"}} />
            </Stack>
          
        </Flex>

        <Flex  alignItems={"center"} justifyContent="center">
{
    HeaderLink.map((val,index)=>{ return(
       
         <LinkBox key={index}>
                <LinkOverlay textDecoration={"none"} color={"black"}    _hover={{
                    color:"#93aa52"
                }} href={val.link.toString()} > 
                
                <Text
                fontStyle="normal"
                fontSize={"20px"}
                pr="20"
             
                >
                    {val.name}
                </Text>
                </LinkOverlay>
                </LinkBox>
 
    )})
}

        </Flex>
       
        </Flex>
        
        </>
    )
}
export default Header;