import { Flex, Stack, Text } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const FooterNav = (props) => {
  return (
    <Flex direction='column' flexWrap='wrap' p='10px'>
      <Text fontWeight='800' color='black' mb='4' fontSize={['16px', '16px']}>
        {props.title}
      </Text>
      <Stack>
        {props.links.map((link, index) => {
          return (
            <Link to={link.path} key={index}>
              <Text mb='2' fontSize={['14px', '16px']}>
                {link.title}
              </Text>
            </Link>
          )
        })}
      </Stack>
    </Flex>
  )
}
