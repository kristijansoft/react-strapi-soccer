import React, { useEffect, useState } from 'react'
import { OngoingProjectCard } from './Cards'
import project1 from '../assets/circle.jpg'
import tema from '../assets/Tema Motorway Interchange.jpg'
import obetsebi from '../assets/Obetsebi-Lamptey.jpg'
import {
  Icon,
  Box,
  Flex,
  Text,
  Image,
  Button,
  Stack,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/core'
import axios from 'axios'
import style from './styles.module.css'

function OngoingProjects(props) {
  const [projects, setOngoingProject] = useState([])

  const sortProjects = (project) => {
    console.log(project)
    return project?.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:1337/ongoingprojects'
        )
        sortProjects(data)
        data && setOngoingProject(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  return (
    <Box>
      <Flex justify='space-between' p={['28px', '60px']} align='center'>
        <Text
          fontSize={['32px', '48px']}
          fontWeight='800'
          marginLeft={['0px', '60px']}
          textAlign={['center', 'align-left']}
        >
          Up Coming Matches
        </Text>
      </Flex>

      <Box p={['28px', '60px']} pb={['0px', '30px']}>
        <Flex wrap='wrap' justify='space-around'>
          {projects
            .map((event, index) => {
              return (
                <Box className={style.parent}>
                  <OngoingProjectCard
                    alignment={['30', '60']}
                    width={['100%', `450px`]}
                    heading={event.heading}
                    path={`OngoingProjects/${event.id}`}
                    description={
                      event.body.length > 60
                        ? event.body.slice(0, 60)
                        : event.body
                    }
                    imageSrc={`http://localhost:1337${event.image[0].url}`}
                  />
                </Box>
              )
            })
            .slice(0, 3)}

          <OngoingProjectCard
            alignment={['30px', '60px']}
            width={['100%', '350px']}
            heading='Tema Motorway Interchange'
            imageSrc={tema}
            description='The Ghana Highway Authority (GHA) provides Road Infrastructure Engineering and Management Services: project appraisal'
            path='/OngoingProjects'
          />
          <OngoingProjectCard
            alignment={['30px', '60px']}
            width={['100%', '350px']}
            heading='Obetsebi Lamtey Interchange'
            imageSrc={obetsebi}
            description='The Ghana Highway Authority (GHA) provides Road Infrastructure Engineering and Management Services: project appraisal'
          />
          <OngoingProjectCard
            alignment={['30px', '120px']}
            width={['100%', '350px']}
            heading='Tema Steel Road Ongoing'
            imageSrc={project1}
            description='The Ghana Highway Authority (GHA) provides Road Infrastructure Engineering and Management Services: project appraisal'
          />
          <OngoingProjectCard
            alignment={['30px', '120px']}
            width={['100%', '350px']}
            heading='Tema Steel Road Ongoing'
            imageSrc={project1}
            description='The Ghana Highway Authority (GHA) provides Road Infrastructure Engineering and Management Services: project appraisal'
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default OngoingProjects
