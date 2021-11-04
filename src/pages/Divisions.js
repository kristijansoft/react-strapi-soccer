import React, { useState, useEffect } from 'react'
import { DivisionCard } from '../Component/Cards'
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Modal,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/core'
import { Layout } from '../Component/Layout'
import styles from './resources.module.css'
// import img from '../assets/img/image1.jpg'
import axios from 'axios'

function Divisions(props) {
  const [modalData, setModalData] = useState({})
  const [divisions, setDivisions] = useState([])
  const [isFetchLoading, setFetchIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  console.log(isOpen)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchIsLoading(true)
        const { data } = await axios.get('http://localhost:1337/divisions')
        console.log(data)
        setDivisions(data)
        setFetchIsLoading(false)
      } catch (error) {
        setFetchIsLoading(false)
        console.log('err', error)
      }
    }
    fetchData()
  }, [])

  console.log(modalData.heading)
  return (
    <Layout>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size={['sm', '6xl']}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {modalData.heading} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              d='flex'
              justifyContent='space-between'
              alignItems='center'
              p='10'
              flexDirection={['column', 'row']}
              h={['20%', '100%']}
            >
              <Box mr='6' flex='1'>
                <Image
                  src={`http://localhost:1337${modalData?.image?.[0]?.url}`}
                  objectFit='contain'
                  w='450px'
                  h='100%'
                  mx='auto'
                />
              </Box>
              <Stack flex='1'>
                <Text fontWeight='700' fontSize='16px' px='4'>
                  Message from {modalData.heading}
                </Text>
                <Text
                  fontSize='16px'
                  fontWeight='500'
                  px='4'
                  pt='4'
                  mt='auto'
                  style={{ columns: '1' }}
                >
                  {modalData.body}
                </Text>
                <Flex align='center' justify='space-between' pl='4' py='0'>
                  <Text
                    flex='1'
                    width='100%'
                    fontSize='14px'
                    fontWeight='600'
                    color='#837d85'
                  >
                    Administrator:
                    {modalData?.director ? modalData?.director : 'N/A'}
                  </Text>
                  <Text
                    flex='1'
                    fontSize='14px'
                    fontWeight='500'
                    color='#837d85'
                  >
                    {/* {modalData ? modalData : "N/A"} */}
                  </Text>
                </Flex>
              </Stack>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box className={styles.resource}></Box>
      <Flex
        marginTop='105px'
        mb='105px'
        marginX='auto'
        bg='gray.100'
        justifyItems='center'
        border='1px solid red'
      >
        <Box
          display='flex'
          flexWrap='wrap'
          marginX='0px auto'
          flexDirection={['column', 'row']}
        >
          {divisions.map((item, key) => {
            return (
              <Box key={key}>
                <DivisionCard
                  modalData={() => {
                    setModalData(item)
                  }}
                  onOpen={onOpen}
                  data={item}
                ></DivisionCard>
              </Box>
            )
          })}
        </Box>
      </Flex>
    </Layout>
  )
}

export default Divisions
