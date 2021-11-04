import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Collapse,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Stack,
} from '@chakra-ui/core'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import image2 from '../assets/circle.jpg'
import divisionImg from '../assets/_MG_7809.jpg'
import icon2 from '../assets/circle.jpg'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import ceoimage from '../assets/redAmbassador_picture.jpg'
import image8 from '../assets/download-10.jpg'
import { formatAMPM, formatDate } from '../lib/utils'
import { FiUsers, FiArrowRight } from 'react-icons/fi'
import { IconContext } from 'react-icons'

export const SecondaryJobCard = (props) => {
  return (
    <Box
      w={['98vw', '80vw']}
      h={['500px', '400px']}
      bg='gray.700'
      my={['10', '14']}
      mx='auto'
      // pb={["8", "0"]}
    >
      <Flex
        h='100%'
        flexDirection={[
          props.isReversed ? 'column' : 'column',
          props.isReversed ? 'row-reverse' : 'row',
        ]}
        justify='center'
        align='center'
        bg='white'
        shadow='md'
      >
        <Box w={['100%', '45%']} h={['50%', '100%']}>
          <Image src={props.image} objectFit='fill' size='100%'></Image>
        </Box>
        <Flex
          w={['100%', '55%']}
          direction='column'
          p={['4', '10']}
          align='flex-start'
        >
          <Text color='#0B132B' fontSize={['xl', '3xl']} fontWeight='900'>
            {props.title}
          </Text>
          <Text
            mt='4'
            lineHeight={['tall', 'taller']}
            fontSize={['16px', '16px']}
            mb={['2', '0']}
          >
            {props.description}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export const MissionCard = (props) => {
  return (
    <Box
      bg='white'
      shadow={['sm', 'md']}
      rounded='lg'
      w={['90%', '27%']}
      mb={['4', '0']}
    >
      <Flex
        direction='column'
        justify='center'
        align='center'
        px={['4', '10']}
        py={['12', '10']}
      >
        <Box>
          <Image src={props.icon} size={['60px', '100px']}></Image>
        </Box>
        <Text
          fontSize={['md', 'xl']}
          fontWeight='700'
          color='#010c2d'
          textAlign='center'
          width='200px'
        >
          {props.heading}
        </Text>
        <Text
          textAlign='center'
          color='gray.600'
          mt='2'
          fontSize={['14px', '16px']}
        >
          {props.body}
        </Text>
      </Flex>
    </Box>
  )
}

export const OngoingProjectCard = (props) => {
  return (
    <Box
      w={[props.width[0], props.width[1]]}
      bg='white'
      shadow='md'
      mx={['auto', '70']}
      mb={['2', '10']}
    >
      <Flex direction='column'>
        <Box width='100%' height='200px'>
          <Image
            src={props.imageSrc}
            objectFit='cover'
            height='100%'
            width='100%'
          ></Image>
        </Box>
        <Text flex='1' fontSize='xl' fontWeight='800' p='4'>
          {props.heading}
        </Text>
        <Text flex='1' fontSize='16' fontWeight='200' p='2' px='4'>
          {props.description}
        </Text>

        <Button
          rightIcon='arrow-forward'
          variant='outline'
          alignSelf='start'
          variantColor='linear-gradient(to right bottom, #edb313, #454239)'
          m='2'
        >
          {props.path ? <Link to={props.path}>Read More</Link> : ' Read More'}
        </Button>
      </Flex>
    </Box>
  )
}
export const FileResourceCard = ({
  resource,
  imageSrc,
  width,
  fallbackImg,
  onOpen,
  setParams,
}) => {
  const truncate = (str, maxLength) =>
    str.length > maxLength ? `${str.substring(0, maxLength)} ...` : str

  console.log(resource.imageSrc[0]?.formats?.large?.url)
  const onOpenModal = () => {
    setParams()
    onOpen()
  }

  const splitDate = (date) => {
    const dateStr = date.split(',')
    const month = dateStr[0].split(' ')[0].slice(0, 3)
    const year = dateStr[1]

    console.log(month, year)

    return {
      month,

      year,
    }
  }

  return (
    <Box
      w={[width[0], width[1]]}
      bg='white'
      shadow='sm'
      pb='6'
      mx={['auto', '0']}
      mb={['8', '20']}
    >
      <Flex direction='column' h='100%' w='100%'>
        <Box width='100%' borderBottom='3px solid gold' flex='2' h='100%'>
          <Image
            src={
              resource.type === 'docs'
                ? imageSrc
                : resource.type === 'image'
                ? `http://localhost:1337${resource.imageSrc[0]?.formats?.large?.url}`
                : fallbackImg
            }
            objectFit={resource.type === 'docs' ? 'cover' : 'cover'}
            w={resource.type === 'docs' ? '150px' : '150px'}
            h='100%'
            mx='auto'
          ></Image>

          {/* <FilePreviewerThumbnail file={{ url: resource.url }} /> */}
        </Box>
        <Box flex='1' h='100%' w='100%'>
          <Text
            flex='1'
            width='100%'
            fontSize='16px'
            fontWeight='600'
            px='4'
            pt='4'
            mt='auto'
          >
            {truncate(resource.description, 25)}
          </Text>
          <Flex align='center' justify='space-between' px='4' py='0' w='100%'>
            <Text
              flex='1'
              width='100%'
              fontSize='14px'
              fontWeight='600'
              color='#837d85'
            >
              Posted By: {resource.author ? resource.author : 'N/A'}
            </Text>
            <Text
              flex='1'
              fontSize='14px'
              fontWeight='500'
              color='#837d85'
              mr='0'
              textAlign='right'
            >
              {resource.date
                ? `${splitDate(formatDate(resource.date)).month},${
                    splitDate(formatDate(resource.date)).year
                  }`
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
              <a href={resource.path} download target='blank'>
                Download
              </a>
            </Button>
            {resource.description.length > 25 ? (
              <Button
                variant='link'
                alignSelf='start'
                padding='10px'
                variantColor='#1f285a'
                fontSize='14px'
                alignSelf='center'
                onClick={onOpenModal}
              >
                Read More
              </Button>
            ) : (
              ''
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export const ResourceCard = () => {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <Flex height='100vh' marginTop='50px' flexDirection={['column', 'row']}>
      <Box
        d='flex'
        flexDirection='column'
        marginLeft={['0px', '80px']}
        padding='20px'
        width={['100%', '40%']}
        paddingLeft='50px'
      >
        <Box
          fontSize={['32px', '48px']}
          lineHeight={['35px', '60px']}
          fontWeight='800'
          marginBottom='10px'
        >
          <Text color='#010c2d'>Resource</Text>
          <Text color='#010c2d'>
            Center <span style={{ color: 'gold' }}>.</span>
          </Text>
        </Box>
        <Box width='80%' fontSize={['16px', '20px']} marginTop='20px'>
          {' '}
          <Text>
            The presence of a resource center shows a commitment to excellence
            within the organization and to the philanthropic community at
            large.Information collections often begin through expediency -
            material keeps piling up and something must be done with it.
          </Text>
          <Text marginTop={['10px', '30px']}>
            A resource center functions as a basic tool within our organization
            to support the work of staff and board members
          </Text>
        </Box>
        <Link to='/AnnualReport'>
          <Button
            rightIcon='arrow-forward'
            color='#010c2d'
            mr={['2', '4']}
            variant='outline'
            fontWeight='800'
            variantColor='linear-gradient(to right bottom, #edb313, #454239)'
            px='10px'
            mt={['4', '10']}
            width='40%'
          >
            Read More
          </Button>
        </Link>
      </Box>
      <Box
        flex='1'
        position='relative'
        width={['100%', '70%']}
        marginTop='10px'
      >
        <motion.div
          whileHover={{
            scale: 1,
            transition: { duration: 1 },
          }}
        >
          {' '}
          <Box
            position='absolute'
            top='5px'
            width='90%'
            zIndex='34'
            left={['10px', '-20px']}
          >
            <Image src={image2} rounded='2%'></Image>
          </Box>
        </motion.div>

        <Box
          position='absolute'
          top='180px'
          left='30px'
          width='90%'
          height='50%'
          background='linear-gradient(to right bottom, #edb313, #454239)'
          rounded='2%'
        ></Box>
      </Box>
    </Flex>
  )
}

export const FinishedProject = ({
  ongoingProjectLength,
  finishProjectLength,
}) => {
  const [start, setStart] = useState()

  useEffect(() => {}, [start])
  return (
    <Box
      display='flex'
      height='70vh'
      width='100%'
      flexDirection={['column-reverse', 'row']}
    >
      <Box flex='1'>
        {' '}
        <Image src={icon2} objectFit='cover' size='100%'></Image>
      </Box>
      <Box
        width={['100%', '50%']}
        background='linear-gradient(to right bottom,#ffff, #edb313)'
      >
        <Box fontSize={['32px', '42px']} fontWeight='800' margin='20px'>
          <Text paddingLeft='5px' color='#010c2d'>
            Match
          </Text>
          <Text
            paddingLeft='20px'
            marginLeft='30px'
            borderTopColor='#005a51'
            borderTopWidth='3px'
            width={['55%', '35%']}
            color='#010c2d'
          >
            Results <span style={{ color: '#005a51' }}>.</span>
          </Text>
        </Box>
        <Box display='flex' flexDirection='row'>
          <Box
            border='2px solid #e5eeed'
            width='45%'
            height={['70px', '50%']}
            display='flex'
            justifyContent='center'
            fontSize={['16px', '36px']}
            fontWeight='700'
            margin='15px'
            padding='20px'
            boxShadow='md'
            textShadow='sm'
            color='#204b22'
          >
            <CountUp
              end={finishProjectLength}
              redraw={true}
              duration={8}
              separator=','
              suffix=' Completed'
              preserveValue={true}
            >
              {/* {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} >  </span>
                
                </VisibilitySensor>
              )} */}
            </CountUp>
          </Box>
          <Box
            border='2px solid #e5eeed'
            width='40%'
            height={['70px', '50%']}
            display='flex'
            justifyContent='center'
            fontSize={['16px', '36px']}
            fontWeight='700'
            margin='15px'
            padding='20px'
            boxShadow='md'
            textShadow='sm'
            color='#6b240e'
          >
            <CountUp
              end={ongoingProjectLength}
              redraw={true}
              duration={8}
              separator=','
              suffix=' Ongoing'
              preserveValue={true}
            >
              {/* {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )} */}
            </CountUp>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export const CeoMessageCard = () => {
  return (
    <Box
      bg='gray.100'
      w={['100vw', '80vw']}
      h={['100vh', '80vh']}
      display='flex'
      marginBottom='100px'
      mx='auto'
      flexDirection={['column-reverse', 'row']}
    >
      <Box width={['100%', '50%']} height={['50%', '100%']}>
        <Flex
          w={['100%', '100%']}
          direction='column'
          p={['4', '20']}
          align='flex-start'
          mt={['0px', '50px']}
        >
          <Text color='#010c2d' fontSize={['xl', '4xl']} fontWeight='900'>
            CEO's MESSAGE
          </Text>
          <Text
            mt='2'
            lineHeight={['tall', '40px']}
            fontSize={['16px', '18px']}
            mb={['2', '0']}
            width={['105%', '120%']}
            fontWeight='500'
          >
            Football could be a very important tool for arresting the high
            poverty levels, social vices, and rural-urban migration problems
            faced by the District, given the abundance of talents. Thus, the
            development of the sport to higher standards would allow for the
            engagement of most of the idle youth to prevent them from getting
            involved in any antisocial behavior such as alcoholism and drug
            abuse. The youth would also find hope for a better future in the
            sport given that football is now much more a business than a sport.
            In one word, the sport could provide an alternative source of
            employment for the youth in the area.
          </Text>
        </Flex>
      </Box>
      <Box width={['100%', '70%']} height={['50%', '100%']}>
        <Box
          width={['100%', '80%']}
          height={['100%', '80%']}
          display='flex'
          justifyContent={['flex-start', 'center']}
          alignContent={['flex-start', 'center']}
          mx='auto'
          my={['0px', '50px']}
        >
          <Image
            src={ceoimage}
            width='100%'
            height='100%'
            objectFit='cover'
          ></Image>
        </Box>
      </Box>
      {/* <Box
        width={['70%', '30%']}
        height={['25%', '30%']}
        position=''
        borderLeft='13px solid gold'
        borderBottom='13px solid gold'
        top={['998px', '1200px']}
        background='#fff'
        display='flex'
        flexDirection='column'
        left={['120px', '190px']}
      >
        <Box display='flex' marginTop={['10px', '60px']}>
          {' '}
          <Text fontSize={['30px', '50px']} fontWeight='500' padding='10px'>
            "
          </Text>
          <Text
            fontSize={['14px', '16px']}
            padding={['10px', '20px']}
            fontWeight='400'
          >
            Sometimes the road less traveled is less traveled for a reason.
          </Text>
        </Box>
        <Box>
          {' '}
          <Text
            textAlign='right'
            fontSize={['14px', '24px']}
            marginRight='10px'
            marginTop={['-30px', '0px']}
          >
            __Ivy Lee
          </Text>
        </Box>
      </Box> */}
    </Box>
  )
}

export const CommentBox = ({ image, name, position, comment }) => {
  return (
    <Box
      width={['300px', '400px']}
      height={['190px', '200px']}
      border='1px solid #e5e5e5'
      borderTopLeftRadius='100px'
      borderBottomRightRadius='80px'
      position='relative'
      display='flex'
      boxShadow='md'
      marginTop={['30px', '0px']}
    >
      <Box
        position='absolute'
        top='50px'
        left={['-40px', '-80px']}
        width={['30%', '40%']}
        height={['50%', '60%']}
        borderTopLeftRadius='50px'
        borderBottomRightRadius='50px'
        boxShadow='md'
      >
        {' '}
        <Image
          borderTopLeftRadius='50px'
          borderBottomRightRadius='50px'
          src={image}
          width='150%'
          height='100%'
          objectFit='cover'
        ></Image>
      </Box>
      <Box width='100%' display='flex' flexDirection='column'>
        <Box display='flex'>
          <Box
            display='flex'
            height='30%'
            marginLeft='90px'
            marginTop={['20px', '45px']}
          >
            {' '}
            <Text fontWeight='700' fontSize={['14px', '18px']}>
              {name}
            </Text>{' '}
            <Text
              fontWeight='200'
              marginTop='2px'
              marginLeft={['-4px', '0px']}
              fontSize={['12px', '17px']}
            >
              ~{position}
            </Text>
          </Box>
          <Box marginTop={['5px', '30px']} marginLeft='15px'>
            {' '}
            <span
              style={{ color: '#e5d335', fontSize: '42px', fontWeight: 'bold' }}
            >
              "
            </span>
          </Box>
        </Box>

        <Box>
          <Text paddingLeft='90px' fontSize={['12px', '14px']}>
            {comment}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export const BoardCard = ({ name, date, image, position }) => {
  return (
    <Box
      display='flex'
      marginLeft='40px'
      width='300px'
      height='380px'
      boxShadow='md'
      border='1px solid #d8d8d8'
      position='relative'
      flexDirection='column'
      marginTop='80px'
    >
      <Box
        width='80%'
        position='absolute'
        height='55%'
        objectFit='contain'
        left='-15px'
        top='-15px'
      >
        <Image
          src={image}
          width='100%'
          height='100%'
          boxShadow='10px 10px 5px 0px #d8d8d8'
          rounded='md'
        ></Image>
      </Box>
      <Box marginTop='200px'>
        <Text
          fontSize='18px'
          fontWeight='700'
          letterSpacing='5px'
          padding='5px'
          paddingLeft='20px'
        >
          {name}
        </Text>
      </Box>

      <Box lineHeight='15px'>
        {' '}
        <Text padding='5px' paddingLeft='20px' fontSize='14px' color='#a4a4a4'>
          Board member since{' '}
        </Text>
        <Text padding='5px' paddingLeft='20px'>
          {date}
        </Text>
      </Box>
      <Box lineHeight='15px' marginTop='10px'>
        {' '}
        <Text padding='5px' paddingLeft='20px' fontSize='14px' color='#a4a4a4'>
          Position in Football Club
        </Text>
        <Text padding='5px' paddingLeft='20px'>
          {position}
        </Text>
      </Box>
    </Box>
  )
}

export const ImageHolder = ({ eventImage }) => {
  return (
    <Box
      display='flex'
      overflowX='hidden'
      width='450px'
      height='200px'
      justifyContent='center'
      alignContent='center'
      margin='5px'
      objectFit='contain'
    >
      <Image src={eventImage} width='100%' height='100%' rounded='md'></Image>
    </Box>
  )
}

export const NewsCard = ({ handle, show, r, header, imageSrc, body }) => {
  return (
    <Box
      width={['300px', '400px']}
      height={['550px', '450px']}
      border='1px solid gray'
      margin='20px'
      boxShadow='md'
      border='1px solid #d8d8d8'
    >
      <Box
        border='1px solid black'
        width='100%'
        height='50%'
        style={{ 'clip-path': ' polygon(0 0, 100% 0, 100% 64%, 0 79%)' }}
      >
        <Image
          src={imageSrc}
          width='100%'
          height='100%'
          objectFit='cover'
        ></Image>
      </Box>
      <Box marginTop='-60px'>
        <Text fontSize='28px' fontWeight='700' padding='10px'>
          {header}
        </Text>
      </Box>
      <Box>
        <Text fontSize='16px' fontWeight='400' padding='10px'>
          {body}
        </Text>
      </Box>

      <Box>
        {r ? (
          <Button
            padding='8px'
            rightIcon='arrow-forward'
            fontSize='16px'
            variant='link'
            color='#010c2d'
            mt={['4', '0']}
            onClick={handle}
          >
            Read More
          </Button>
        ) : null}
      </Box>
    </Box>
  )
}

export const NewsDetailCard = (props) => {
  return (
    <Box
      w={[props.width[0], props.width[1]]}
      mr={[props.marginRight[0], props.marginRight[1]]}
      ml={['auto', '0']}
      mb={['4', '10']}
      bg='white'
      // shadow='sm'
    >
      <Flex direction='column'>
        <Box width='100%' height='250px'>
          <Image
            src={props.imageSrc}
            objectFit='cover'
            height='100%'
            width='100%'
          ></Image>
        </Box>
        <Flex justify='space-between' align='center' p='4'>
          <Text
            flex='1'
            my='2'
            fontSize='xl'
            fontWeight='800'
            fontFamily='Familiar Pro'
          >
            {props.heading}
          </Text>
          {props.date && props.time && (
            <Flex align='flex-end' direction='column'>
              <Text fontSize='14px' fontWeight='800'>
                {props.date}
              </Text>
              <Text fontSize='12px'>{props.time}</Text>
            </Flex>
          )}
        </Flex>

        <Text flex='3' lineHeight='tall' px='4' pb='4'>
          {props.children}
        </Text>
      </Flex>
    </Box>
  )
}

export const DivisionCard = ({ modalData, onOpen, data }) => {
  const onOpenModal = () => {
    onOpen()
    modalData()
    console.log('fuck u')
  }

  return (
    <Box
      height='500px'
      width='350px'
      boxShadow='md'
      margin='10px'
      marginLeft='20px'
      bg='white'
      borderRadius='md'
    >
      <Box height='80%' width='100%'>
        <Stack spacing='5'>
          <IconContext.Provider
            value={{
              size: '50px',
              style: {
                background: '#200E32',
                padding: '10px',
                borderRadius: '50%',
                color: '#ffffff',
                marginLeft: '10px',
                marginTop: '10px',
              },
            }}
          >
            <FiUsers></FiUsers>
          </IconContext.Provider>

          <Box mt='10px'>
            <Text fontSize='18px' color='brown' padding='2px 10px'>
              Division
            </Text>
            <Text
              fontSize='24px'
              lineHeight='30px'
              padding='5px 10px'
              bgGradient='linear(to-l, #7928CA,#FF0080)'
              bgClip='text'
              fontWeight='extrabold'
            >
              {data.heading}
            </Text>
          </Box>
          <Box>
            {' '}
            <Text padding='5px 10px' fontSize='16px'>
              {data.body.length > 200
                ? `${data.body.slice(0, 350)}`
                : data.body}
            </Text>
          </Box>
        </Stack>
      </Box>

      <Box
        height='20%'
        width='100%'
        display='flex'
        justifyContent='flex-start'
        alignItems='center'
      >
        <Box
          as='button'
          width='50px'
          height='50px'
          background='#faf5f5'
          borderRadius='50%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          margin='5px'
          marginLeft='10px'
          onClick={onOpenModal}
          _hover={{
            background: 'white',
            color: '#200E32',
            outline: 'none',
          }}
        >
          {' '}
          <IconContext.Provider
            value={{
              size: '20px',
              style: {},
            }}
          >
            {' '}
            <FiArrowRight></FiArrowRight>{' '}
          </IconContext.Provider>{' '}
        </Box>
      </Box>
    </Box>
  )
}
