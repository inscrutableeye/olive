import {
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    Input,
    Stack,
    Text,
    Image,
    Flex,
    LinkBox,
    LinkOverlay
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

  
  export const Footer = () => (
    <Flex as="footer"  role="contentinfo" bg="#f1eade" w={"full"}>
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Image src="OLIVE OUL3.svg"  />

        </Stack>

      </Stack>
    </Flex>
  )