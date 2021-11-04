import React from 'react'
import { Layout } from '../Component/Layout'
import { Link, useRouteMatch } from 'react-router-dom'
import { Box, Flex, Image, Text, Stack } from '@chakra-ui/core'

function ProcurementAndStrategicPlan(props) {
  return (
    <Layout>
      {/* <Flex h="80vh" w="100vw" border="1px solid red">
        <Box w="50%" h="100%" border="1px solid green"></Box>
        <Box w="50%" h="100%" border="1px solid green"></Box>
      </Flex>{" "} */}
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
              <Text fontWeight='800'>sarifc.gh@gmail.com</Text>
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

export default ProcurementAndStrategicPlan
