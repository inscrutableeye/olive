import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, Link, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '../Atom/Authmodalatom';
import { auth } from '../Firebase/ClientApp';
import AuthInput from './AuthInput';
import OAuthButton from './OAuthButton';
import ResetPassword from './ResetPassword';

const AuthModal:React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)
    const [user, loading, error] = useAuthState(auth)
    const handleClose = () => {
      setModalState(prev => ({
        ...prev,
        open: false
      }))
    }

    useEffect(() => {
      if (user) handleClose()
      console.log('user', user)
    }, [user])
    return (
        <>
        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader bg={"white"} textColor={"black"} textAlign={'center'}>
              {modalState.view === 'login' && 'login'}
              {modalState.view === 'signup' && 'signup'}
              {modalState.view === 'resetPassword' && 'Reset Password'}
            </ModalHeader>
            <ModalCloseButton  color={'#a8b417'}  />
            <ModalBody
              display={'flex'}
              flexDirection='column'
              alignItems={'center'}
              justifyContent='center'
              pb={'6'}
              bg="white"
            >
                  <Flex
              direction={'column'}
              align='center'
              justify={'center'}
              width='70%'
            >
              {modalState.view === 'login' || modalState.view === 'signup' ? (
                <>
                  <OAuthButton />
                  <Text color={'gray.400'} fontWeight='700'>
                    OR
                  </Text>
                  <AuthInput />
                </>
              ) : (
               <ResetPassword/>
              )}
            </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
export default AuthModal;

