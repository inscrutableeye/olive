import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../Firebase/ClientApp'

const OAuthButton: React.FC = () => {
  const [signInWithGoogle, userCred, loading, error] = useSignInWithGoogle(auth)

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, 'users', user.uid)
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)))
  }
  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user)
    }
  }, [userCred])
  return (
    <Flex direction={'column'} w='100%' mb='4'>
      <Button
        variant={'oauth'}
        mb='2'
        isLoading={loading}
        onClick={() => signInWithGoogle()}
        textColor="white"
        bg={"#69742e"}
        _hover={{
         bg:"#a8b417"
        }}
      >
        <Image src='/googlelogo.png' h={'20px'} mr='2' />
        Continue with Google
      </Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  )
}
export default OAuthButton