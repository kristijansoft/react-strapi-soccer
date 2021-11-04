import React, { useEffect, useState } from 'react'
import { Layout } from '../Component/Layout'
import { Box, Flex, Text, Image, Button } from '@chakra-ui/core'
import { content } from '../lib/utils/mock'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import axios from 'axios'

import 'normalize.css'
import './slider-animation.css'
import './styles.css'
import { MissionSection } from '../Component/MissionSection'
import CeoSection from '../Component/CeoSection'
import OngoingProjects from '../Component/OngoingProjects'
//check
// import { FinishedProject, ResourceCard } from '../Component/Cards'
// CHeck Later
import { Link } from 'react-router-dom'

function Main(props) {
  const [Onprojects, setOngoingProject] = useState([])
  const [Fiprojects, setFinishedProject] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:1337/ongoingprojects'
        )
        const FinishedProject = await axios.get(
          'http://localhost:1337/finishedprojects'
        )

        data && setOngoingProject(data)
        FinishedProject.data && setFinishedProject(FinishedProject.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  console.log(content)
  return (
    <Layout>
      <Box marginBottom='5px'>
        <Slider
          className='slider-wrapper'
          autoplay='5000'
          infinite={true}
          touchDisabled={true}
        >
          {content.map((item, index) => (
            <Box
              key={index}
              className='slider-content'
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <Box className='inner'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Link to={item.path}>
                  {' '}
                  <button className='button'>{item.button}</button>
                </Link>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box>
        <CeoSection />
      </Box>

      {/* <Box>
        <OngoingProjects />
      </Box>
      <Box marginTop={['40px', '100px']} class='xyz-out' xyz='fade up big'>
        <ResourceCard />
      </Box> */}

      {/* <Box marginTop={['150px', '100px']} marginBottom='150px'>
        <FinishedProject
          ongoingProjectLength={Onprojects.length}
          finishProjectLength={Fiprojects.length}
        />
      </Box> */}

      <Box marginTop={['20px', '50px']}>
        <MissionSection />
      </Box>

      <Box
        marginTop='100px'
        marginBottom='100px'
        width={['100%', '80%']}
        height={['25vh', '25vh']}
        background='linear-gradient(to right bottom, #8db3c3,#f2faf8)'
        display='flex'
        alignContent='center'
        justifyContent='center'
        flexDirection={['column', 'column']}
      >
        <Text
          padding='20px'
          paddingX={['5px', '150px']}
          fontSize={['16px', '26px']}
          fontWeight='500'
          width={['100%', '80%']}
        >
          <span
            style={{ color: '#010c2d', fontSize: '30px', fontWeight: 'bold' }}
          >
            "
          </span>
          We have very promising young talents amongst the ranks in the division
          three squad capable of achieving immerse success for themselves and
          the club as a whole. Effecient training regimes will go a long way to
          accomplishing greatness.
          <span
            style={{ color: '#010c2d', fontSize: '30px', fontWeight: 'bold' }}
          >
            "
          </span>
        </Text>
        <Text
          paddingX={['60px', '150px']}
          marginTop={['0px', '-10px']}
          color='#2d3d40'
        >
          Habib Bashiru, Assistant U13 Coach
        </Text>
      </Box>
    </Layout>
  )
}

export default Main
