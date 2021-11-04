import { Box, Button, Flex, Stack, Text, Input } from '@chakra-ui/core'
import React from 'react'

import { navLInks } from '../lib/utils/mock'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterNav } from './FooterNav'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <Box
      bg='white'
      w='100vw'
      padding={['40px 5px', '60px 120px']}
      borderTop='2px solid #eee'
      mx={['auto', '0']}
    >
      <Flex direction={['column-reverse', 'row']} wrap='wrap'>
        <Flex
          flexBasis={['25%']}
          direction='column'
          mx={['auto', '0']}
          mt={['4', '0']}
        >
          <Text
            fontWeight='900'
            fontSize={['18px', '24px']}
            color='black'
            mb={['2', '4']}
          >
            Sari Football Club
          </Text>
          <Flex width={['100%', '35%']} justify={['space-between']}>
            <a href='https:facebook.com/sarifootballclub'>
              {' '}
              <FaFacebookF />
            </a>

            <a href='https:twitter.com/sarifc_'>
              {' '}
              <FaTwitter />
            </a>
            <a href='https:instagram/sarifootballclub'>
              {' '}
              <FaInstagram />
            </a>

            <a href='https:linkedin.com/company/sarifc'>
              {' '}
              <FaLinkedin />
            </a>
          </Flex>
          <Flex
            flexBasis={['100%', '75%']}
            justify={['start', 'space-between']}
            mx={['auto', '0']}
            flexDirection={['row', 'row']}
            wrap='wrap'
          >
            {navLInks.map((link, index) => {
              return (
                <FooterNav
                  title={link.title}
                  links={link.dropdownLinks}
                  key={index}
                />
              )
            })}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
