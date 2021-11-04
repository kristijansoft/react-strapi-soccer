import { Box, Grid, Image } from '@chakra-ui/core'
import React from 'react'
import image from '../assets/img/image1.jpg'
import image1 from '../assets/img/image2.jpg'
import image2 from '../assets/img/image3.jpg'
import image3 from '../assets/img/image1.jpg'
import image4 from '../assets/img/image1.jpg'
import image5 from '../assets/img/image1.jpg'
import image6 from '../assets/img/image1.jpg'
import image7 from '../assets/img/image1.jpg'
import image8 from '../assets/img/image1.jpg'

function GridPage(props) {
  return (
    <Box width='100%' height='50vh' display='flex' padding='30px'>
      <Box width='50%' height='100%'></Box>
      <Box width='50%' height='100%'>
        {' '}
        <Grid
          templateColumns='repeat(5, 1fr)'
          gap={6}
          display='flex'
          flexDirection={['column', 'row']}
        >
          <Box w='100%' h='170px' bg='blue.500' marginTop='100px'>
            <Image
              borderRadius='md'
              rounded='10px'
              src={image}
              width='100%'
              height='130%'
              objectFit='cover'
            ></Image>
          </Box>
          <Box w='100%' h='200px' marginTop='50px'>
            <Grid
              templateColumns='repeat(2, 1fr)'
              gap={20}
              display='flex'
              flexDirection='column'
            >
              <Box w='100%' h='150px' bg='tomato'>
                {' '}
                <Image
                  borderRadius='md'
                  rounded='10px'
                  src={image1}
                  width='100%'
                  height='130%'
                  objectFit='cover'
                  borderColor='gray'
                ></Image>
              </Box>
              <Box w='100%' h='170px' bg='#0e6b24'>
                {' '}
                <Image
                  borderRadius='md'
                  rounded='10px'
                  src={image2}
                  width='100%'
                  height='130%'
                  objectFit='cover'
                ></Image>
              </Box>
            </Grid>
          </Box>
          <Box w='100%' h='10' bg='blue.500' marginTop='100px'>
            <Grid
              templateColumns='repeat(2, 1fr)'
              gap={20}
              display='flex'
              flexDirection='column'
            >
              <Box w='100%' h='200px' bg='tomato'>
                {' '}
                <Image
                  borderRadius='md'
                  rounded='10px'
                  src={image3}
                  width='100%'
                  height='130%'
                  objectFit='cover'
                ></Image>
              </Box>
              <Box w='100%' h='100px' bg='#0e6b24'>
                {' '}
                <Image
                  borderRadius='md'
                  rounded='10px'
                  src={image4}
                  width='100%'
                  height='130%'
                  objectFit='cover'
                ></Image>
              </Box>
            </Grid>
          </Box>
          <Box w='100%' h='10' bg='blue.500'>
            <Grid
              templateColumns='repeat(2, 1fr)'
              gap={20}
              display='flex'
              flexDirection='column'
            >
              <Box w='100%' h='200px' bg='tomato'>
                {' '}
                <Image
                  borderRadius='md'
                  rounded='10px'
                  src={image5}
                  width='100%'
                  height='130%'
                  objectFit='cover'
                ></Image>
              </Box>
              <Box w='100%' h='200px' bg='#0e6b24'>
                {' '}
                <Image
                  borderRadius='md'
                  rounded='10px'
                  src={image6}
                  width='100%'
                  height='130%'
                  objectFit='cover'
                ></Image>
              </Box>
            </Grid>
          </Box>
          <Box w='100%' h='10' bg='blue.500' marginTop='50px'>
            <Grid
              templateColumns='repeat(2, 1fr)'
              gap={20}
              display='flex'
              flexDirection='column'
            >
              <Box w='100%' h='200px' bg='tomato'>
                {' '}
                <Image
                  borderRadius='md'
                  rounded='10px'
                  src={image7}
                  width='100%'
                  height='130%'
                  objectFit='cover'
                ></Image>
              </Box>
              <Box w='100%' h='200px' bg='#0e6b24'>
                {' '}
                <Image
                  borderRadius='md'
                  rounded='10px'
                  src={image8}
                  width='100%
                  '
                  height='130%'
                  objectFit='cover'
                ></Image>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}

export default GridPage
