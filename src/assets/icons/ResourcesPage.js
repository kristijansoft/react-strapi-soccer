import {
  Box,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
  Button,
  Grid,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  Image,
} from '@chakra-ui/core'
import React from 'react'
import { ResourceCard } from '../../components/Card'
import { Layout } from '../../layouts/Layout'
import styles from './styles.module.css'
import resource1 from '../../assets/icons/document.png'
import fallbackSrc from '../../assets/icons/icon-file.png'

import { getAllResources } from '../../api/media.service'
import { useWindowDimensions } from '../../lib/utils/hooks'
import { formatDate } from '../../lib/utils/utils'

const ResourcesPage = () => {
  const [resourcesList, setResourcesList] = React.useState([])
  const [isFetchLoading, setFetchIsLoading] = React.useState(false)
  const [searchParam, setSearchParam] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const [resourceParams, setResourceParam] = React.useState({})

  const { width } = useWindowDimensions()

  const isMobile = width <= 700

  console.log(searchParam)

  const handleChange = (e) => {
    setSearchParam(e.target.value)
  }

  const filteredItems =
    searchParam === ''
      ? resourcesList
      : resourcesList.filter((item) =>
          item?.description.toLowerCase().includes(searchParam.toLowerCase())
        )

  React.useEffect(() => {
    const fetchAllResources = async () => {
      try {
        setFetchIsLoading(true)
        const { data } = await getAllResources()
        console.log(data.data)
        setFetchIsLoading(false)
        setResourcesList(data.data)
      } catch (err) {
        setFetchIsLoading(false)
        console.log('err', err)
      }
    }
    fetchAllResources()
  }, [])
  return (
    <Layout>
      <Box className={styles.Hero}></Box>
      <Modal isOpen={isOpen} onClose={onClose} size='1000px'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Match Center</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              d='flex'
              justifyContent='space-between'
              alignItems='center'
              p='10'
              flexDirection='row'
              h='100%'
            >
              <Box mr='6' flex='1'>
                <Image
                  src={
                    resourceParams?.resource?.type === 'docs'
                      ? resourceParams?.imageSrc
                      : resourceParams?.resource?.type === 'image'
                      ? resourceParams?.resource?.url
                      : resourceParams?.fallbackImg
                  }
                  objectFit={
                    resourceParams?.resource?.type === 'docs'
                      ? 'contain'
                      : 'cover'
                  }
                  w={
                    resourceParams?.resource?.type === 'docs'
                      ? '200px'
                      : '350px'
                  }
                  h='100%'
                  mx='auto'
                />
              </Box>
              <Stack flex='1'>
                <Text fontSize='16px' fontWeight='500' px='4' pt='4' mt='auto'>
                  {resourceParams.resource?.description}
                </Text>
                <Flex align='center' justify='space-between' pl='4' py='0'>
                  <Text
                    flex='1'
                    width='100%'
                    fontSize='14px'
                    fontWeight='600'
                    color='#837d85'
                  >
                    Posted By:
                    {resourceParams.resource?.author
                      ? resourceParams.resource?.author
                      : 'N/A'}
                  </Text>
                  <Text
                    flex='1'
                    fontSize='14px'
                    fontWeight='500'
                    color='#837d85'
                  >
                    {resourceParams.resource?.date
                      ? formatDate(resourceParams.resource?.date)
                      : 'Date: N/A'}
                  </Text>
                </Flex>
                <Flex align='center' mt='4'>
                  <Button
                    rightIcon='arrow-down'
                    variant='outline'
                    alignSelf='start'
                    variantColor='green'
                    m='4'
                  >
                    <a
                      href={resourceParams.resource?.url}
                      download
                      target='blank'
                    >
                      Download
                    </a>
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* <Box
        className={styles.Overlay}
        position='absolute'
        bottom={!isMobile && '60px'}
        bottom='300px'
        top={isMobile && '20px'}
        left='0px'
        w='100%'
        h={['40%', '20%']}
        zIndex='200'
        color='white'
      >
        <Stack mt={['40', '40']} ml={['10', '40']}>
          <Text fontWeight='700' fontSize={['xl', '4xl']}>
            RESOURCES
          </Text>
        </Stack>
      </Box> */}
      <Flex justify='space-between' p='60px' align='center'>
        <Text fontSize='48px' fontWeight='800'>
          Match Center
        </Text>
        <form>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pl='4'
                children={<Icon name='search' color='gray.300' />}
              />

              <Input
                placeholder='Search for resource'
                w={['90vw', '600px']}
                ml='2'
                type='text'
                onChange={handleChange}
                value={searchParam}
              ></Input>
            </InputGroup>
          </FormControl>
        </form>
      </Flex>

      <Box px='60px' py='30px' mb='20'>
        {/* <Flex wrap='wrap' justify='space-between'> */}
        {resourcesList.length > 0 ? (
          <Grid
            templateColumns={[
              'repeat(auto-fit, minmax(250px, 1fr))',
              'repeat(auto-fit, minmax(250px, 270px))',
            ]}
            gap='6'
          >
            {filteredItems.map((resource) => (
              <ResourceCard
                key={resource.id}
                width={['100%', '270px']}
                resource={resource}
                heading={resource.description}
                author={resource.author}
                date={resource.date}
                imageSrc={resource1}
                fallbackImg={fallbackSrc}
                onOpen={onOpen}
                setParams={() =>
                  setResourceParam({
                    resource: resource,
                    imageSrc: resource1,
                    fallbackImg: fallbackSrc,
                  })
                }
              />
            ))}
          </Grid>
        ) : (
          <Box>
            <Text textAlign='center'>There are no resoures at the moment</Text>
          </Box>
        )}

        {/* </Flex> */}
        {resourcesList.length > 0 && (
          <Box my='10' d='flex' justifyContent='center'>
            <Button variant='link' variantColor='green'>
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </Layout>
  )
}

export default ResourcesPage
