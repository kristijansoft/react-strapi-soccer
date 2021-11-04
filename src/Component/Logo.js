import { Box, Image } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/logo_sarifc_main-removebg-preview.png'

export const Logo = (props) => {
  return (
    <Box>
      <Link to='/'>
        <Image
          src={logo}
          width={['100%', '100%']}
          height={['90%', '100%']}
          objectFit='cover'
        ></Image>
      </Link>
    </Box>
  )
}
