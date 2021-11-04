import React, { useEffect } from 'react'
import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/core'
import { Layout } from '../Component/Layout'
import axios from 'axios'
import { BoardCard, CeoMessageCard, SecondaryJobCard } from '../Component/Cards'
import img from '../assets/shlaki.jpg'
import { organizationalTenets } from '../lib/utils/mock'

function MessageFromCeo(props) {
  const [members, setMembers] = React.useState([])
  const [directors, setDirectorate] = React.useState([])

  useEffect(() => {
    const fetchBoardMember = async () => {
      try {
        const { data } = await axios.get('http://localhost:1337/board-members')
        const directorate = await axios.get('http://localhost:1337/directors')

        data && setMembers(data)
        directorate.data && setDirectorate(directorate.data)
        console.log(data)
      } catch (error) {}
    }
    fetchBoardMember()
  }, [])

  return (
    <Layout>
      <Box height={['400px', '600px']} width='100%'>
        <Image src={img} width='100%' height='90%' objectFit='cover'></Image>
      </Box>

      <Box fontSize='40px' fontWeight='700' marginTop={['10px', '100px']}>
        <CeoMessageCard />
      </Box>

      <Text
        fontSize={['38px', '48px']}
        fontWeight='800'
        pt='10'
        pb='20'
        ml={['0px', '24px']}
        px='10'
        textAlign='center'
        marginTop='10px'
      >
        Sari Football Club
      </Text>

      <Box bg='gray.100' w='100vw' mx='auto' mt={['0', '0px']} pb={['4', '10']}>
        <Stack>
          {organizationalTenets.map((job, index) => {
            return (
              <SecondaryJobCard
                key={index}
                title={job.title}
                image={job.image}
                description={job.description}
                isReversed={job.isReversed}
              />
            )
          })}
        </Stack>
      </Box>
      <Box>
        <Box
          padding={['10px 20px', '60px 80px']}
          bg='white'
          marginTop={['20px', '70px']}
        >
          <Flex direction={['column', 'row']} align='start' justify='start'>
            <Box flex='1' ml={['0', '105px']} bg='white'>
              <Text fontSize='30px' fontWeight='900'>
                The Structure of the Club
              </Text>
            </Box>
            <Stack flex={['1', '2']} alignSelf='flex-start' spacing='4'>
              <Text
                fontSize={['16px', '18px']}
                px={['0', '4']}
                lineHeight={['tall', 'taller']}
              >
                Educated and competent people manage the club. The club has a
                board chaired by a person of high esteem and integrity. The
                board gives directives to the management regarding how the
                affairs of the club are managed as well as work in tandem with
                management to ensure that best practices are applied in the
                management of the club’s affairs. Indeed, the day-to-day affairs
                of the club are managed by the President who is ably supported
                by his Chief Executive Officer, General Manager, Director of
                Communications/Public Relations Officer, Team Manager, Equipment
                Manager, and the coaching staff/ Managers of the playing body.
                Moreover, the club’s CEO who doubles as the head coach is CAF
                Incense D coach, hence, the technical team of the club is highly
                qualified and competent enough to develop the playing body for
                enhanced performance. Every management member has a clearly
                defined job description and schedules that he or she must
                strictly follow within the confines of the club's statutes and
                regulations. This creates a congenial atmosphere for unity and a
                great sense of purpose in the administration of the club's
                affairs. By working in this way, management members can achieve
                set targets and objectives as evidenced by our qualification to
                the elite division. We, therefore, have a formidable team in
                place to manage the affairs of the club and ensure that it keeps
                growing from strength to strength. This will also ensure that
                our sponsor’s brand image keeps improving and expanding to such
                an extent that they get value for money for deciding to sponsor
                us.
                <br></br>
                <Text fontWeight='800'>Breakdown</Text>
                <hr />
                <br></br>
                Owner<Text fontWeight='800'>Godwin A. Apullah</Text>
                <br></br>
                Chairman
                <Text fontWeight='800'>Alhassan Beyom</Text>
                <br></br>
                Vice Chairman
                <Text fontWeight='800'>Victor Kanbe</Text>
                <br></br>
                Medical Support
                <Text fontWeight='800'>Achiru Awudu</Text>
                <br></br>
                Head Coach
                <Text fontWeight='800'>Godwin A. Apullah</Text>
                <br></br>
                Assistant Coach
                <Text fontWeight='800'>Abdulai</Text>
                <br></br>
                Kit Manager
                <Text fontWeight='800'>Habib Bashiru</Text>
                <br></br>
                Director of Communications
                <Text fontWeight='800'>Apiligu Asakiso</Text>
              </Text>
              <Button
                variant='link'
                alignSelf='start'
                ml={['0', '4']}
                color='#0fa311'
              >
                Read More
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Flex p={['20px', '60px']} align='center' justifyContent='center'>
          <Text fontSize={['32px', '48px']} fontWeight='800'>
            Board Of Directors
          </Text>
        </Flex>

        <Box
          display='flex'
          flexWrap='wrap'
          justifyContent='center'
          alignContent='center'
          marginBottom='100px'
        >
          {members.map((el, id) => (
            <BoardCard
              key={id}
              name={el.Fullname}
              date={el.Date}
              position={el.Position}
              image={`http://localhost:1337${el.Image.formats.large.url}`}
            ></BoardCard>
          ))}
        </Box>
      </Box>
      <Box>
        <Flex p={['20px', '60px']} align='center' justifyContent='center'>
          <Text fontSize={['32px', '48px']} fontWeight='800'>
            Directorates
          </Text>
        </Flex>

        <Box
          display='flex'
          flexWrap='wrap'
          justifyContent='center'
          alignContent='center'
          marginBottom='100px'
        >
          {directors.map((el, id) => (
            <BoardCard
              key={id}
              name={el.Fullname}
              date={el.Date}
              position={el.Position}
              image={`http://localhost:1337${el.Image[0].formats.large.url}`}
            ></BoardCard>
          ))}
        </Box>
      </Box>
    </Layout>
  )
}

export default MessageFromCeo
