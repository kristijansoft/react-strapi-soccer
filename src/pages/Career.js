import React from 'react'
import { Layout } from '../Component/Layout'
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/core'
import image from '../assets/media0.png'
import { careerDivsion } from '../lib/utils/mock'

function Career(props) {
  return (
    <Layout>
      <Box
        border='1px solid #d0cfcf'
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          height: '40vh',

          color: 'white',
          objectFit: 'cover',
          marginTop: '70px',
        }}
        display='flex'
        marginBottom='20px'
        justifyContent={['center', 'flex-end']}
        alignItems={['flex-start', 'center']}
      >
        <Box
          height={['50px', '100px']}
          width={['100vw', '600px']}
          zIndex='initial'
          bg='#1f285a'
          opacity='0.6'
          rounded='md'
          border='1px solid #0a0f24'
          marginRight={['0px', '20px']}
        >
          {' '}
          <Text
            color='white'
            fontSize={['20px', '39px']}
            textAlign='center'
            fontWeight='500'
          >
            {' '}
            Career Opportunities
          </Text>
        </Box>
      </Box>

      <Box padding='50px'>
        <Text
          fontSize={['24px', '30px']}
          padding={['10px', '30px']}
          fontWeight='500'
        >
          Careers at Sari Football Club
          <Text borderBottom='3px solid gold' width={['20%', '10%']}></Text>
        </Text>
        <Text
          fontSize={['18px']}
          px={['0', '4']}
          lineHeight={['tall', 'taller']}
        >
          Below are some career Opportunities for people looking to work with us
          <br></br> <br></br>
          Find the details below showing the positions and duties assigned to
          these positions
        </Text>

        {careerDivsion.map((data, id) => {
          return (
            <Box
              key={id}
              width={['100%', '50%']}
              marginTop={['50px', '30px']}
              marginBottom={['50px', '30px']}
            >
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionHeader>
                    <Box flex='1' textAlign='left'>
                      {data.division}
                    </Box>
                    <AccordionIcon />
                  </AccordionHeader>
                  <AccordionPanel pb={4}>{data.career}</AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          )
        })}
      </Box>
    </Layout>
  )
}

export default Career
