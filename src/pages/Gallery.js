import React, { useEffect, useState } from 'react'
import { Layout } from '../Component/Layout'
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/core'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
//import { images } from "../lib/utils/mock";
import axios from 'axios'
import styles from './gallery.module.css'

function Gallery(props) {
  const [data, setData] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:1337/images')

        setData(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  const images = data.map((el) => el.Picture[0])
  console.log(images)
  return (
    <Layout>
      <Box mt='90px' padding='10px'>
        {' '}
        <Text fontSize={['36px', '48px']} fontWeight='800'>
          Pictures
          <Text
            borderBottom='3px solid gold'
            width={['50%', '5%']}
            marginTop={['5px', '10px']}
          ></Text>
        </Text>
      </Box>

      <Box width='100vw' bg='#131212' mt='10px' mb='100px'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 700: 3, 900: 3 }}>
          <Masonry columnsCount={3} gutter='5px'>
            {images.map((image, id) => {
              return (
                <Box
                  key={id}
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  color='white'
                  border='2px solid #a6b3bf'
                  className={styles.masonry}
                >
                  {' '}
                  <a href={`http://localhost:1337${image.url}`} download>
                    {' '}
                    <Image
                      src={`http://localhost:1337${image.url}`}
                    ></Image>{' '}
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

export default Gallery
