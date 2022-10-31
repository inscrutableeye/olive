import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { authModalState } from '../Atom/Authmodalatom'
import Sign from '../components/Login/Login'
import { SignUp } from '../components/SignUp/SignUp'

type AuthInputProps = {}

const AuthInput: React.FC<AuthInputProps> = () => {
  const modalState = useRecoilValue(authModalState)
  return (
    <Flex direction={'column'} align='center' width={'100%'} mt='4'>
      {modalState.view === 'login' && <Sign />}
      {modalState.view === 'signup' && <SignUp />}
    </Flex>
  )
}
export default AuthInput