import { Text } from '@chakra-ui/core'
import React from 'react'

export const Headingg = (props) => {
  return (
    <Text
      color='#003931'
      // fontSize={["6xl", "4xl"]}
      fontSize={['32px', '48px']}
      fontWeight='900'
      textAlign='center'
    >
      {props.heading}
    </Text>
  )
}
