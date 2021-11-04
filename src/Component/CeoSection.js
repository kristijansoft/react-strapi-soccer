import React from 'react'
import { Box, Flex, Text, Image, Button, Stack } from '@chakra-ui/core'
import ceoimage from '../assets/etty-fidele.jpg'
import ceoimage1 from '../assets/redAmbassador_picture.jpg'
import ceoimage2 from '../assets/Blank-Avatar-Man-in-Suit.jpg'
import { Link } from 'react-router-dom'

function CeoSection(props) {
  return (
    <Box
      bg='gray.100'
      w='100vw'
      mx='auto'
      mt={['150px', '90px']}
      pb={['4', '10']}
    >
      <Stack>
        <Box
          w={['98vw', '80vw']}
          h={['500px', '400px']}
          bg='gray.700'
          my={['10', '14']}
          mx='auto'
          // pb={["8", "0"]}
        >
          <Flex
            h='100%'
            flexDirection={[
              true ? 'column' : 'column',
              false ? 'row-reverse' : 'row',
            ]}
            justify='center'
            align='center'
            bg='white'
            shadow='md'
          >
            <Box w={['100%', '45%']} h={['50%', '100%']}>
              <Image src={ceoimage1} objectFit='cover' size='100%'></Image>
            </Box>
            <Flex
              w={['100%', '55%']}
              direction='column'
              p={['4', '10']}
              align='flex-start'
            >
              <Text color='#010c2d' fontSize={['xl', '4xl']} fontWeight='900'>
                CEO's MESSAGE
              </Text>
              <Text
                mt='2'
                lineHeight={['tall', 'taller']}
                fontSize={['14px', '16px']}
                mb={['2', '0']}
              >
                Welcome to the website of Sari Football Club. SARI F.C has the
                desire to project the image of the Tolon District and Northern
                Region in Ghana by playing football to the highest level; a feat
                that can only be made possible with the support of likes of you.
                SARI F.C, given that we have the potential to grow exponentially
                and propel the accelerated growth of sports in the District as
                well as Ghana.
              </Text>
              <Flex
                justify='space-between'
                w='100%'
                align='center'
                mt={['4', '8']}
                mb={['80px', '4']}
              >
                <Link to='/MessagesFromCeo'>
                  <Button
                    rightIcon='arrow-forward'
                    variant='link'
                    color='#010c2d'
                    mt={['4', '0']}
                  >
                    Read More
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Stack>
    </Box>
  )
}

export default CeoSection
