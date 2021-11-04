import React from 'react'
import { Box, Button, Flex, Image, Stack, Text, Grid } from '@chakra-ui/core'
import '../pages/styles.css'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import image2 from '../assets/circle.jpg'
import image3 from '../assets/jack.jpg'
import image4 from '../assets/download-1.jpg'
import image5 from '../assets/download-3.jpg'
import image8 from '../assets/download-8.jpg'
import image12 from '../assets/download-12.jpg'
import image10 from '../assets/download-10.jpg'
import image11 from '../assets/download-4.jpg'
import image16 from '../assets/media0.png'

function MediaHeader(props) {
  return (
    <Box
      display='flex'
      marginTop='100px'
      flexDirection={['column', 'row']}
      height={['100%', '100%']}
    >
      <Box width={['100%', '50%']} height={['100%', '100%']}>
        <Box marginTop={['50px', '100px']}>
          <Box
            fontSize={['40px', '50px']}
            lineHeight='70px'
            fontWeight='800'
            marginLeft={['0px', '150px']}
            letterSpacing='2px'
          >
            <Text color='#010c2d'>Sari Football</Text>
            <Text color='#010c2d' marginLeft={['50px', '0px']}>
              Club <span style={{ color: 'gray' }}>.</span>
            </Text>
          </Box>
        </Box>
        <Box
          height='20%'
          width={['100%', '70%']}
          marginLeft={['10px', '150px']}
          paddingY='30px'
          paddingX={['40px', '0px']}
          fontSize='16px'
        >
          <Text>
            SARI F.C has the desire to project the image of the Tolon District
            and Northern Region in Ghana by playing football to the highest
            level
          </Text>
        </Box>
      </Box>

      <Box
        width={['100%', '50%']}
        flex='1'
        height={['150px', '100%']}
        padding='20px'
      >
        <Image src={image16}></Image>
      </Box>
    </Box>
  )
}

export default MediaHeader
