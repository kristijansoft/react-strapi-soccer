import { Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { navLInks } from '../lib/utils/mock'
import { Logo } from './Logo'
import { NavItem } from './NavItems'
import fs from 'fs'

export const Navbar = (props) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)
  const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
      fs.readfile(file, (data, err) => {
        if (err) reject('there was error')
        resolve()
      })
    })
  }

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      bg='seagreen'
      color='#000'
      position='fixed'
      top='0'
      padding='15px 40px'
      w={['100%', '100%']}
      zIndex='10000'
      {...props}
    >
      <Flex align='center' flex='3'>
        <Box
          width='40px'
          height='40px'
          display='flex'
          justifyContent={['flex-start', 'center']}
          alignContent={['flex-start', 'center']}
          marginLeft={['-25px', '-15px']}
        >
          <Logo />
        </Box>
        <Link to='/'>
          <Text
            textDecoration='none'
            fontWeight='900'
            ml={['2', '2']}
            fontSize={['16px', '20px']}
            color='white'
          >
            Sari Football Club
          </Text>
        </Link>
      </Flex>

      <Box display={['block', 'none']} onClick={handleToggle}>
        <svg
          fill='white'
          width='20px'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
        justifyContent='flex-end'
        justifySelf='flex-end'
        flexDirection={['column', 'row']}
      >
        {navLInks.map((navLink) => {
          return (
            <NavItem
              title={navLink.title}
              links={navLink.dropdownLinks}
              key={navLink.title}
              sublinks={navLink.dropdownLinks.filter(
                (link) => link.dropdownLinks !== 0
              )}
            />
          )
        })}
      </Box>
    </Flex>
  )
}
