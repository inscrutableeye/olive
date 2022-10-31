import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../Atom/Authmodalatom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../Firebase/ClientApp'
import { FIREBASE_ERRORS } from '../../Firebase/Error'
import { User } from 'firebase/auth'
export const SignUp = () => {

  const setAuthModalState = useSetRecoilState(authModalState)

  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [
    createUserWithEmailAndPassword,
    userCred,
    loading,
    userError
  ] = useCreateUserWithEmailAndPassword(auth)
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (error) setError('')
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError('Password do not match')
      return
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
  }
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  return (
   <>
   <form onSubmit={onSubmit}>
    <Input
     name='email'
    placeholder='Email'
    required
    onChange={onChange}
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
       name='password'
    placeholder='Password'
    required
    onChange={onChange}
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
      <Input
       name='confirmPassword'
    placeholder='Confirm Password'
    required
    type="password"
    fontSize="10pt"
    onChange={onChange}
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
    {(error || userError) && (
        <Text textAlign={'center'} color='red' fontSize={'10pt'}>
          {error ||
            FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
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
        Sign Up
      </Button>

      <Flex fontSize={'9pt'} justifyContent='center'>
        <Text color={"black"}>Already a redditor?</Text>
        <Text
          color={'#a8b417'}
          fontWeight='700'
          cursor={'pointer'}
          onClick={() =>
            setAuthModalState(prev => ({
              ...prev,
              view: 'login'
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>

   </form>
   </>
  )
}
