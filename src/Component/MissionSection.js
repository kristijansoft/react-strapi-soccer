import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import React from 'react'

import agricIcon from '../assets/icons/agric.png'
import { Headingg } from './Heading'
import { MissionCard } from './Cards'
import iconos from '../assets/icons/5300887-carreteras-iconos-gratis-de-naturaleza-carretera-png-512_512_preview.png'
import icon1 from '../assets/icons/missionstatementiconhp1sarifclogo.png'
import icon3 from '../assets/icons/missionstatementicon1hp.png'
import icon2 from '../assets/icons/missionstatementhp3.jpg'

export const MissionSection = () => {
  return (
    <Box>
      <Flex justify='center' align='center' direction='column'>
        <Headingg heading='Our Club Structure' />

        <Text
          w={['90%', '35%']}
          textAlign='center'
          my='2'
          fontSize={['14px', '16px']}
        >
          SARI Football Club is based in Nyankpala, a Sub-District of Tolon, in
          the Northern Region. It is one of the oldest and most consistent clubs
          in the District. The club currently plays in the Tolon division three
          league. Indeed, this year’s the dream of the club is to qualify to
          division two this year and subsequently to the premier league soon.
        </Text>
      </Flex>
      <Flex justify='space-around' px={['0', '40']} my='10' wrap='wrap'>
        <MissionCard
          icon={icon1}
          heading='Vision'
          body='To be the best football club in Ghana, both on and off the pitch. To become the District’s leading football club that changes lives.'
        />
        <MissionCard
          icon={icon2}
          heading='Mission'
          body='To bring together the Sari F.C family to create life changing opportunities for children and young people in Tolon District and beyond.'
        />
        <MissionCard
          icon={icon3}
          heading='Our Core values'
          body='Respect, effort, ambition, teamwork and humility are the five principal values that define the spirit of Sari Football Club'
        />
      </Flex>
    </Box>
  )
}
