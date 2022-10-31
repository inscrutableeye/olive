import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  MenuDivider,
  Box,
  Text
} from '@chakra-ui/react'
import { signOut, User } from 'firebase/auth'
import React from 'react'
import { FaRedditSquare, FaUserCheck } from 'react-icons/fa'
import { VscAccount } from 'react-icons/vsc'
import { IoSparkles } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineLogin } from 'react-icons/md'

import { useSetRecoilState } from 'recoil'


import { auth } from '../../../Firebase/ClientApp'
import { authModalState } from '../../../Atom/Authmodalatom'
type UserMenuProps = {
  user?: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState)
  return (
    <Menu>
      <MenuButton
        cursor={'pointer'}
        padding='0px 6px'
        borderRadius={4}
        _hover={{
          outline: '1px solid',
          outlineColor: 'gray.400'
        }}
      >
        <Flex align={'center'}>
          <Flex align={'center'}>
            {user ? (
              <>
        <Icon as={FaUserCheck} w="30px" h={"30px"} color="black" mr={2} />
                <Box
                  display={{ base: 'none', lg: 'flex' }}
                  flexDirection='column'
                  fontSize='8pt'
                  alignItems='flex-start'
                  mr={8}
                >
                  <Text color='black' fontWeight={700}>
                    {user?.displayName || user?.email?.split('@')[0]}
                  </Text>
                  <Flex alignItems='center'>
                    <Icon as={IoSparkles} color='brand.100' mr={1} />
                  </Flex>
                </Box>
              </>
            ) : (
              <Icon fontSize={24} color='gray.400' mr={1} as={VscAccount} />
            )}
          </Flex>
          <ChevronDownIcon color={'gray.300'} />
        </Flex>
      </MenuButton>
      <MenuList bg={"white"}>
        {user ? (
          <>
            {' '}
            <MenuItem
              fontSize={'10pt'}
              color='black'
              _hover={{
                bg:"#a8b417",
                color: 'white'
              }}
            >
              <Flex align={'center'}>
                <Icon fontSize={20} mr='2' as={CgProfile}  />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize={'10pt'}
              color='black'
              _hover={{
                bg:"#a8b417",
                color: 'white'
              }}
              onClick={() => signOut(auth)}
            >
              <Flex align={'center'}>
                <Icon fontSize={20} mr='2' as={FaUserCheck} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize={'10pt'}
              color='gray.400'
              _hover={{
                bg: 'blue.500',
                color: 'white'
              }}
              onClick={() => setAuthModalState({ open: true, view: 'login' })}
            >
              <Flex align={'center'}>
                <Icon fontSize={20} mr='2' as={MdOutlineLogin} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  )
}
export default UserMenu
