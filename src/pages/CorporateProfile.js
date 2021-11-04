import React from 'react'
import { Layout } from '../Component/Layout'
import { Box, Flex, Image, Stack, Text, Button } from '@chakra-ui/core'
import styles from './resources.module.css'
import { useWindowDimensions } from '../lib/hooks'
import Functions from '../Component/Fuctions'

function CorporateProfile(props) {
  const { width } = useWindowDimensions()

  const isMobile = width <= 700
  return (
    <Layout>
      <Box className={styles.Hero} position='relative' zIndex='100'></Box>

      <Flex direction={'column'}>
        <Box>
          <Box
            padding={['10px 20px', '60px 80px']}
            bg='white'
            marginTop={['20px', '70px']}
          >
            <Flex direction={['column', 'row']} align='start' justify='start'>
              <Box flex='1' ml={['0', '105px']} bg='white'>
                <Text fontSize='30px' fontWeight='900'>
                  Establishment
                </Text>
                <Text marginLeft='10px' fontSize='18px' fontWeight='700'>
                  Since 2009
                </Text>
              </Box>
              <Stack flex={['1', '2']} alignSelf='flex-start' spacing='4'>
                <Text
                  fontSize={['16px', '18px']}
                  px={['0', '4']}
                  lineHeight={['tall', 'taller']}
                >
                  Welcome to the website of Sari Football Club. SARI F.C has the
                  desire to project the image of the Tolon District and Northern
                  Region in Ghana by playing football to the highest level; a
                  feat that can only be made possible with the support of likes
                  of you. SARI F.C, given that we have the potential to grow
                  exponentially and propel the accelerated growth of sports in
                  the District as well as Ghana.
                  <br></br>
                  <br></br>
                  Welcome to the website of Sari Football Club. SARI F.C has the
                  desire to project the image of the Tolon District and Northern
                  Region in Ghana by playing football to the highest level; a
                  feat that can only be made possible with the support of likes
                  of you. SARI F.C, given that we have the potential to grow
                  exponentially and propel the accelerated growth of sports in
                  the District as well as Ghana.
                  <br></br>
                  {/* <br></br>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque deserunt blanditiis dicta itaque dolorem! Dolores
                  eligendi ipsum delectus provident quibusdam nesciunt
                  doloremque, placeat possimus, velit optio voluptate soluta
                  vitae officia?
                  <br></br>
                  Lorem ipsum dolor sit amet. */}
                </Text>
                <Button
                  variant='link'
                  alignSelf='start'
                  ml={['0', '4']}
                  color='#0fa311'
                >
                  Read More
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Box>
        <Functions />
        <Box>
          <Box
            padding={['10px 20px', '60px 80px']}
            bg='white'
            marginTop={['20px', '70px']}
          >
            <Flex direction={['column', 'row']} align='start' justify='start'>
              <Box flex='1' ml={['0', '105px']} bg='white'>
                <Text fontSize='30px' fontWeight='900'>
                  About
                </Text>
              </Box>
              <Stack flex={['1', '2']} alignSelf='flex-start' spacing='4'>
                <Text
                  fontSize={['16px', '18px']}
                  px={['0', '4']}
                  lineHeight={['tall', 'taller']}
                >
                  Welcome to the website of Sari Football Club. SARI F.C has the
                  desire to project the image of the Tolon District and Northern
                  Region in Ghana by playing football to the highest level; a
                  feat that can only be made possible with the support of likes
                  of you. SARI F.C, given that we have the potential to grow
                  exponentially and propel the accelerated growth of sports in
                  the District as well as Ghana.
                  <br></br>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, voluptatem! */}
                </Text>
                <Button
                  variant='link'
                  alignSelf='start'
                  ml={['0', '4']}
                  color='#0fa311'
                >
                  Read More
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default CorporateProfile
