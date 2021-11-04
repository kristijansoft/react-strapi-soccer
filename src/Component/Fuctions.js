import React from 'react'
import { Box, Text, Icon, Flex, Stack, Button } from '@chakra-ui/core'

function Functions(props) {
  return (
    <Box
      width='100%'
      display='flex'
      my={['20px', '70px']}
      flexDirection={['column', 'column']}
      bg='gray.100'
      px={['0', '250px']}
      py={['6', '10']}
      justifyContent='center'
      alignItems='center'
    >
      <Box
        flex='1'
        mt={['20px', '70px']}
        mb={['15px', '30px']}
        display='flex'
        flexDirection='column'
        alignContent={['center', 'flex-end']}
        alignSelf={['center', 'center']}
        ml={['0', '6']}
      >
        <Text fontSize='32px' fontWeight='900' textAlign={['center', 'start']}>
          Sari Football Club Values
        </Text>
      </Box>
      <Flex justify='space-between' direction={['column', 'row']}>
        <Stack flex='1' marginRight={['0', '4']} spacing={['', '8']}>
          <Box
            display='flex'
            flexDirection='row'
            marginTop={['20px', '0px']}
            justifyContent={['start', 'flex-start']}
            alignItems='center'
          >
            <Box
              //   height={["40px", "60px"]}
              //   width={["40px", "60px"]}
              //   flexBasis='15%'
              height={['40px', '60px']}
              width={['40px', '60px']}
              display='flex'
              justifyContent='center'
              alignItems='center'
              backgroundColor='#1b2451'
              color='white'
              rounded='100%'
              margin={['15px', '20px']}
            >
              {/* <Icon name="check" w="100%" /> */}
              <Text>1</Text>
            </Box>
            <Box w={['90%', '80%']}>
              <Text fontWeight='500' w={['auto', '80%']} color='#284240'>
                RESPECT
              </Text>
            </Box>
          </Box>

          <Box
            display='flex'
            flexDirection='row'
            marginTop={['0px', '0px']}
            justifyContent={['start', 'flex-start']}
            alignItems='center'
          >
            <Box
              maxWidth='20%'
              height={['40px', '60px']}
              width={['40px', '60px']}
              display='flex'
              justifyContent='center'
              alignItems='center'
              backgroundColor='#1b2451'
              color='white'
              rounded='50%'
              margin={['15px', '20px']}
            >
              {/* <Icon name="check" /> */}
              <Text>2</Text>
            </Box>
            <Box w={['90%', '80%']}>
              <Text fontWeight='500' w={['auto', '80%']} color='#284240'>
                EFFORT
              </Text>
            </Box>
          </Box>

          <Box
            display='flex'
            flexDirection='row'
            marginTop={['0px', '0px']}
            justifyContent={['start', 'flex-start']}
            alignItems='center'
          >
            <Box
              height={['40px', '60px']}
              width={['40px', '60px']}
              display='flex'
              justifyContent='center'
              alignItems='center'
              backgroundColor='#1b2451'
              color='white'
              rounded='50%'
              margin={['15px', '20px']}
            >
              <Text>3</Text>
            </Box>
            <Box w={['90%', '80%']}>
              <Text fontWeight='500' w={['auto', '80%']} color='#284240'>
                AMBITION
              </Text>
            </Box>
          </Box>
        </Stack>
        <Stack
          flex='1'
          marginRight={['0', '4']}
          spacing={['', '8']}
          ml={['0', '10']}
        >
          <Box
            display='flex'
            flexDirection='row'
            marginTop={['0px', '0px']}
            justifyContent={['start', 'flex-start']}
            alignItems='center'
          >
            <Box
              height={['40px', '60px']}
              width={['40px', '60px']}
              display='flex'
              justifyContent='center'
              alignItems='center'
              backgroundColor='#1b2451'
              color='white'
              rounded='50%'
              margin={['15px', '20px']}
            >
              <Text>4</Text>
            </Box>
            <Box w={['90%', '80%']}>
              <Text fontWeight='500' w={['auto', '80%']} color='#284240'>
                TEAMWORK
              </Text>
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            marginTop={['0px', '0px']}
            justifyContent={['start', 'flex-start']}
            alignItems='center'
          >
            <Box
              height={['40px', '60px']}
              width={['40px', '60px']}
              display='flex'
              justifyContent='center'
              alignItems='center'
              backgroundColor='#1b2451'
              color='white'
              rounded='50%'
              margin={['15px', '20px']}
            >
              <Text>5</Text>
            </Box>
            <Box w={['90%', '80%']}>
              <Text fontWeight='500' w={['auto', '80%']} color='#284240'>
                HUMILITY
              </Text>
            </Box>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Functions
