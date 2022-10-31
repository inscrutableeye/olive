import { Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../Atom/Authmodalatom'


const AuthButton: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  return (
    <> 
     <Icon  as={FaUser} w="30px" h={"30px"} color="black"   onClick={() => setAuthModalState({ open: true, view: 'login' })}   />
     
    </>
  )
}
export default AuthButton