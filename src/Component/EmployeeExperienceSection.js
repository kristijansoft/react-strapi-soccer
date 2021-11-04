import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import React from 'react'
import { CommentBox } from './Cards'
import image10 from '../assets/ambassadorkasalgumatch.jpg'
import image11 from '../assets/habibbashirutaller.jpg'
import { Headingg } from './Heading'

export const EmployeeExperienceSection = () => {
  return (
    <Box>
      <Flex justify='center' align='center' direction='column'>
        <Headingg heading='Reviews and Acknowledgements' />

        <Text
          w={['90%', '35%']}
          textAlign='center'
          my='2'
          fontSize={['14px', '16px']}
        >
          We build our football club through teamwork and work closely with
          other clubs, scouts and agencies to achieve our common objectives.
        </Text>
      </Flex>
      <Flex
        justifyContent={['center', 'space-around']}
        my='20'
        wrap='wrap'
        marginX='auto'
      >
        <CommentBox
          name='Godwin A. Apullah'
          position='Head Coach'
          image={image10}
          comment='With the right resources this team will go places... The team spirit is high at the moment and winning streak is mounting strong.'
        />
        <CommentBox
          name='Habib Bashiru'
          position='Player'
          image={image11}
          comment='Training has been excellent this week and we going into the next match fully prepared to take all the three points '
        />
      </Flex>
    </Box>
  )
}
