import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useSetRecoilState } from 'recoil';
import { authModalState } from '../../Atom/Authmodalatom';
import { auth } from '../../Firebase/ClientApp'
import { FIREBASE_ERRORS } from '../../Firebase/Error';


const Login:React.FC = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const [loginForm, setLoginForm] = useState({
      email: '',
      password: ''
    })
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error
    ] = useSignInWithEmailAndPassword(auth)
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  
      signInWithEmailAndPassword(loginForm.email, loginForm.password)
    }
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginForm(prev => ({
        ...prev,
        [event.target.name]: event.target.value
      }))
    }
    return ( <>
        <form  onSubmit={onSubmit}>
         <Input
           onChange={onChange}
         name='email'
         placeholder='Email'
         required 
        
         type={"email"}
         fontSize="10pt"
         textColor={"black"}
         _placeholder={{
           color: 'gray.500'
         }}
         _hover={{
           bg: 'white',
           border: '1px solid',
           borderColor: 'blue.500'
         }}
         _focus={{
           outline: 'none',
           bg: 'white',
           border: '1px solid',
           borderColor: 'blue.500'
         }}
         bg='gray.50'
     
         />
            <Input
              onChange={onChange}
            name="password"
         placeholder='Password'
       
         required
         type={"password"}
         fontSize="10pt"
         textColor={"black"}
         _placeholder={{
           color: 'gray.500'
         }}
         _hover={{
           bg: 'white',
           border: '1px solid',
           borderColor: 'blue.500'
         }}
         _focus={{
           outline: 'none',
           bg: 'white',
           border: '1px solid',
           borderColor: 'blue.500'
         }}
         bg='gray.50'
     mt="10px"
         />
       <Text textAlign={'center'} color='red' fontSize={'10pt'}>
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
     <Button
             mb={2}
             mt='2'
             w={'100%'}
             h='36px'
             type='submit'
             bg={"#69742e"}
             _hover={{
              bg:"#a8b417"
             }}
             isLoading={loading}
        
           >
             Login
           </Button>
           <Flex justifyContent={'center'} mb={2}>
        <Text fontSize={'9pt'} mr={1} color="black">
          Forgot your password?
        </Text>
        <Text
          fontSize={'9pt'}
          color={'#a8b417'}
          cursor={'pointer'}
          onClick={() =>
            setAuthModalState(prev => ({
              ...prev,
              view: 'resetPassword'
            }))
          }
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize={'9pt'} justifyContent='center'>
        <Text color={"black"}>Now Here?</Text>
        <Text
               color={'#a8b417'}
          fontWeight='700'
          cursor={'pointer'}
          onClick={() =>
            setAuthModalState(prev => ({
              ...prev,
              view: 'signup'
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
        </form>
        </>)
}
export default Login;