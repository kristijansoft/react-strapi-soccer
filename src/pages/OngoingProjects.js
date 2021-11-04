import React, { useEffect, useState } from 'react'

import { Box, Flex, Text, Button } from '@chakra-ui/core'
import { Layout } from '../Component/Layout'
//import styles from "../pages/About/Styles.module.css";

import { OngoingProjectCard } from '../Component/Cards'
import FilterSearch from '../Component/FilterSearch'

import { Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

export const OngoingProjects = () => {
  const [readMore, setReadMore] = React.useState(true)
  const [projects, setOngoingProject] = useState([])
  const [filfteredProjects, setFilteredProjects] = useState([])
  const [filteredValuePresent, setFilteredValuePresent] = useState('All')
  const [index, setIndex] = useState(4)
  const sortProjects = (project) => {
    console.log(project)
    return project?.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  }

  const arrayToHoldProject = []

  const { path } = useRouteMatch()

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

  const slicedData = (start, end) => {
    const newProject = projects.slice(start, end)
    arrayToHoldProject.push(newProject)

    console.log(arrayToHoldProject[0])
  }

  console.log(slicedData(0, index))

  const handleMore = () => {
    setIndex(index + 4)
    slicedData(0, index)
  }

  const filterOngoingProject = (value) => {
    setFilteredValuePresent(value)
    let newProjectList = [...projects]
    let filteredData = []
    console.log(newProjectList)
    if (value) {
      filteredData =
        newProjectList.filter((item) => item.location === value) ||
        newProjectList
    } else {
      filteredData = newProjectList
    }

    setFilteredProjects(filteredData)
  }

  console.log(filfteredProjects)
  return (
    <Layout>
      <Flex
        p={['10px', '60px']}
        align={['start', 'center']}
        direction={['column-reverse', 'row']}
        w='100%'
        marginTop={['100px', '50px']}
        justifyContent='space-between'
      >
        <Box>
          <Text fontSize={['36px', '48px']} fontWeight='800'>
            Upcoming
            <Text
              borderBottom='3px solid gold'
              width={['50%', '50%']}
              marginTop={['5px', '10px']}
            ></Text>
          </Text>
        </Box>
        <Box>
          {' '}
          <FilterSearch
            filterTerms={['Division Three', 'U17', 'U15', 'U13']}
            onSearch={(val) => filterOngoingProject(val)}
          />
        </Box>
      </Flex>
      <Box p={['10px 20px', '20px 60px']}>
        {filteredValuePresent === 'All' ? (
          <Flex wrap='wrap' justify='space-between' w='100%'>
            {arrayToHoldProject[0].map((event, index) => {
              return (
                <Box mb={['20px', '60px']} key={index}>
                  <Link to={`${path}/${event.id}`}>
                    <OngoingProjectCard
                      alignment='0px'
                      width={['100%', '300px']}
                      heading={event.heading}
                      description={
                        event.body.length > 60
                          ? event.body.slice(0, 60)
                          : event.body
                      }
                      imageSrc={`http://localhost:1337${event.image[0].url}`}
                    />
                  </Link>
                </Box>
              )
            })}
          </Flex>
        ) : (
          <Flex wrap='wrap' w='100%'>
            {filfteredProjects.map((event, index) => {
              return (
                <Box mb={['20px', '60px']} m='20px' display='flex'>
                  <Link to={`${path}/${event.id}`}>
                    <OngoingProjectCard
                      alignment='0px'
                      width={['100%', '300px']}
                      heading={event.heading}
                      description={
                        event.body.length > 60
                          ? event.body.slice(0, 60)
                          : event.body
                      }
                      imageSrc={`http://localhost:1337${event.image[0].url}`}
                    />
                  </Link>
                </Box>
              )
            })}
          </Flex>
        )}

        <Box mb='10' d='flex' justifyContent='center'>
          <Button
            variant='blue'
            variantColor='black'
            fontSize='17px'
            padding='18px'
            border='1px solid black'
            onClick={handleMore}
          >
            Load More
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}
