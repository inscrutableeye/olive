import React from 'react'
import { Button, Flex, Icon } from '@chakra-ui/react'
import {FaUserCheck} from "react-icons/fa"


import { signOut, User } from 'firebase/auth'

import AuthModal from '../../../Modal/AuthModal'
import AuthButton from '../../../Modal/AuthButton'
import UserMenu from './UserMenu'

type RightContentProps = {
    user?: User | null
  }
  

const RightContent:React.FC<RightContentProps> = ({ user }) => {
    
    return(
        <>
        <AuthModal />
        <Flex justify={'center'} align='center' >
          {user ?  <UserMenu user={user} /> :<AuthButton/> }
     
        </Flex>
      </>
    )
}
export default RightContent;