import React, { useEffect, useState } from 'react'
import { Layout } from '../Component/Layout'
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/core'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
// import { images } from '../lib/utils/mock'
import axios from 'axios'

function Video(props) {
  const [data, setData] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:1337/videos')

        setData(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  // const images = data.map((el) => el.Picture[0])
  // console.log(images);
  return (
    <Layout>
      <Box mt='90px' padding='10px'>
        {' '}
        <Text fontSize={['36px', '48px']} fontWeight='800'>
          Videos
          <Text
            borderBottom='3px solid gold'
            width={['50%', '5%']}
            marginTop={['5px', '10px']}
          ></Text>
        </Text>
      </Box>

      <Box width='100vw' bg='#131212' mt='10px'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 700: 3, 900: 3 }}>
          <Masonry columnsCount={3} gutter='10px'>
            {data.map((image, id) => {
              return (
                <Box
                  key={id}
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  color='white'
                  border='2px solid #a6b3bf'
                >
                  {' '}
                  <a href={`http://localhost:1337${image.url}`} download>
                    {' '}
                    <iframe
                      width='100%'
                      height='100%'
                      src={image.link}
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen
                    ></iframe>{' '}
                    <Box display='flex' justifyContent='center'>
                      {image.description}
                    </Box>
                  </a>
                  <Box display='flex' justifyContent='center'>
                    <Text padding='10px'>{image.caption}</Text>{' '}
                  </Box>
                </Box>
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </Layout>
  )
}

export default Video
