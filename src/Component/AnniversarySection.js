import React from 'react'
import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/core'
import image2 from '../assets/teamphotovsarrowheads.jpg'

function AnniversarySection(props) {
  return (
    <Flex
      height={['750px', '600px']}
      marginTop='50px'
      flexDirection={['column', 'row']}
      width={['70%', '100%']}
      justifyContent='center'
      alignContent='center'
    >
      <Box
        d='flex'
        flexDirection='column'
        marginLeft={['100px', '150px']}
        padding='20px'
        width='40%'
        paddingLeft={['0px', '200px']}
        marginTop='20px'
        justifyContent='flex-start'
        alignContent='center'
      >
        <Box fontSize='30px' fontWeight='800' marginBottom='10px'>
          <Text color='#010c2d' fontSize='150px'>
            12
          </Text>
          <Text color='#010c2d'>Years of Succesfully</Text>
          <Text color='#010c2d'>Establishing Our Football Club</Text>
        </Box>

        <Button
          rightIcon='arrow-forward'
          color='#010c2d'
          mr={['2', '4']}
          variant='outline'
          fontWeight='800'
          variantColor='linear-gradient(to right bottom, #edb313, #454239)'
          px='10px'
          mt={['4', '10']}
          width={['150%', '80%']}
        >
          Read More
        </Button>
      </Box>
      <Box
        flex='1'
        position='relative'
        width={['100%', '40%']}
        marginTop='10px'
        justifyContent='center'
        alignContent='center'
        marginLeft={['50px', '0px']}
      >
        <Box
          height={['100%', '70%']}
          position='absolute'
          top='5px'
          width={['100%', '70%']}
          zIndex='34'
        >
          <Image
            src={image2}
            borderTopLeftRadius='100px'
            borderBottomRightRadius='100px'
            height='100%'
          ></Image>
        </Box>
        <Box
          position='absolute'
          top={['50px', '40px']}
          left={['50px', '30px']}
          width={['90%', '70%']}
          height={['90%', '70%']}
          border='5px solid #edb313'
          borderBottomRightRadius='100px'
        ></Box>
      </Box>
    </Flex>
  )
}

export default AnniversarySection
