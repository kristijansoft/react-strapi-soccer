import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
  Spinner,
  Image,
} from '@chakra-ui/core'
// import { useToast } from "@chakra-ui/react";
import React, { useState } from 'react'
import { Layout } from '../Component/Layout'
import styles from './resources.module.css'
import { useWindowDimensions } from '../lib/hooks'
import { useForm } from 'react-hook-form'
import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

const LeaveMessage = () => {
  const { width } = useWindowDimensions()
  const { register, handleSubmit, watch, errors } = useForm()

  const toast = useToast()

  const onSubmit = (data) => {
    if (!data) {
      alert('fill all inputs')
    } else {
      axios.post('http://localhost:1337/messages', data)
      toast({
        title: 'Message Sent Successfully',
        description: 'We will get back to you',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }

    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    )
    Array.from(document.querySelectorAll('Textarea')).forEach(
      (Textarea) => (Textarea.value = '')
    )
  }

  const isMobile = width <= 700

  return (
    <Layout>
      <Box
        className={styles.leaveMessage}
        position='relative'
        zIndex='100'
      ></Box>

      <Box padding={['10px', '100px 120px']} bg='#f2fafd'>
        <Flex
          direction={['column', 'column']}
          align='start'
          justify='start'
          bg='white'
          py={['4', '10']}
          px={['4', '40']}
          my='10'
          w='100%'
        >
          <Text
            fontWeight='900'
            fontSize={['2xl', '4xl']}
            lineHeight={['shorter', 'shorter']}
            mb={['4', '0']}
            fontFamily='Familiar Pro'
          >
            Send us a message
          </Text>
          <Box w='100%' mt='8'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                w='100%'
                flex='1'
                spacing='6'
                justify='start'
                align='start'
              >
                <FormControl w='100%'>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    id='inputTeext'
                    isFullWidth
                    placeholder='Full Name'
                    name='fullname'
                    ref={register({ required: true })}
                  />
                </FormControl>
                <FormControl w='100%'>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    isFullWidth
                    placeholder='Your email address'
                    name='email'
                    ref={register({ required: true })}
                  />
                </FormControl>
                <FormControl w='100%'>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    name='subject'
                    placeholder='Type your subject here'
                    ref={register({ required: true })}
                  />
                </FormControl>
                <FormControl w='100%'>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder='Write your message here…'
                    name='message'
                    ref={register({ required: true })}
                  />
                </FormControl>

                <Button
                  bg='#12133b'
                  color='#fff'
                  rightIcon='arrow-forward'
                  _hover={{ bg: '#3a405a', color: '#fff' }}
                  type='submit'
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Box>
      <Box
        my='40'
        p={['6', '60']}
        d='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Text fontWeight='800' fontSize={['2xl', '4xl']}>
          Contact Us
        </Text>
        <Text
          fontWeight='600'
          fontSize={['16px', 'xl']}
          textAlign={['center', 'start']}
        >
          For more information. You can reach us
        </Text>
        <Box
          mt={['4', '10']}
          px={['0', '20']}
          w={['100%', '70%']}
          mx='auto'
          py={['4', '10']}
          shadow={['none', 'lg']}
          border='1px solid red'
        >
          <Stack spacing='10'>
            <Flex justify='space-between' align='center'>
              <Flex align='center'>
                <Image
                  src='https://img.icons8.com/fluent/48/000000/email-open.png'
                  w={['30px', '40px']}
                />
                <Text ml='2'>Send us a mail</Text>
              </Flex>
              <Text fontWeight='800'>Sarifc.gh@gmail.com</Text>
            </Flex>
            <Flex justify='space-between' align='center'>
              <Flex align='center'>
                <Image
                  src='https://img.icons8.com/fluent/48/000000/contact-card.png'
                  w={['30px', '40px']}
                />
                <Text ml='2'>Phone Us</Text>
              </Flex>
              <Text fontWeight='800'>0245258551</Text>
            </Flex>
            <Flex justify='space-between' align='center'>
              <Flex align='center'>
                <Image
                  src='https://img.icons8.com/cotton/64/000000/location--v1.png'
                  w={['30px', '40px']}
                />
                <Text ml='2'>Locate Us</Text>
              </Flex>
              <Text fontWeight='800'>Nyankpala, Tamale, Ghana</Text>
            </Flex>
            <hr></hr>
            <Text textAlign='center' fontSize='xl' fontWeight='800' mt='10'>
              On Social Media
            </Text>
            <Flex justify='center' align='center'>
              <Stack isInline spacing='10'>
                <Link
                  href='https://facebook.com/sarifootballclub/'
                  rel='noreferrer'
                  target='blank'
                  _focus='none'
                >
                  <img
                    src='https://img.icons8.com/fluent/48/000000/facebook-new.png'
                    w={['30px', '40px']}
                  />
                </Link>
                <Link
                  href='https://twitter.com/sarifc_'
                  rel='noreferrer'
                  target='blank'
                  _focus='none'
                >
                  <img
                    src='https://img.icons8.com/fluent/48/000000/twitter.png'
                    w={['30px', '40px']}
                  />
                </Link>
                <Link
                  href='https://www.linkedin.com/company/sarifc/'
                  rel='noreferrer'
                  target='blank'
                  _focus='none'
                >
                  <img
                    src='https://img.icons8.com/fluent/48/000000/linkedin.png'
                    w={['30px', '40px']}
                  />
                </Link>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Layout>
  )
}

export default LeaveMessage
