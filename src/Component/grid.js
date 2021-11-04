;<Grid
  templateColumns='repeat(5, 1fr)'
  gap={6}
  display='flex'
  flexDirection={['column', 'row']}
>
  <Box w='100%' h='170px' bg='blue.500' marginTop='100px'>
    <Image
      borderRadius='md'
      rounded='10px'
      src={image7}
      width='100%'
      height='130%'
      objectFit='cover'
    ></Image>
  </Box>
  <Box w='100%' h='200px' marginTop='50px'>
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={20}
      display='flex'
      flexDirection='column'
    >
      <Box w='100%' h='150px' bg='tomato'>
        {' '}
        <Image
          borderRadius='md'
          rounded='10px'
          src={image6}
          width='100%'
          height='130%'
          objectFit='cover'
        ></Image>
      </Box>
      <Box w='100%' h='170px' bg='#0e6b24'>
        {' '}
        <Image
          borderRadius='md'
          rounded='10px'
          src={image4}
          width='100%'
          height='130%'
          objectFit='cover'
        ></Image>
      </Box>
    </Grid>
  </Box>
  <Box w='100%' h='10' bg='blue.500' marginTop='100px'>
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={20}
      display='flex'
      flexDirection='column'
    >
      <Box w='100%' h='200px' bg='tomato'>
        {' '}
        <Image
          borderRadius='md'
          rounded='10px'
          src={image5}
          width='100%'
          height='130%'
          objectFit='cover'
        ></Image>
      </Box>
      <Box w='100%' h='100px' bg='#0e6b24'>
        {' '}
        <Image
          borderRadius='md'
          rounded='10px'
          src={image8}
          width='100%'
          height='130%'
          objectFit='cover'
        ></Image>
      </Box>
    </Grid>
  </Box>
  <Box w='100%' h='10' bg='blue.500'>
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={20}
      display='flex'
      flexDirection='column'
    >
      <Box w='100%' h='200px' bg='tomato'>
        {' '}
        <Image
          borderRadius='md'
          rounded='10px'
          src={image10}
          width='100%'
          height='130%'
          objectFit='cover'
        ></Image>
      </Box>
      <Box w='100%' h='200px' bg='#0e6b24'>
        {' '}
        <Image
          borderRadius='md'
          rounded='10px'
          src={image8}
          width='100%'
          height='130%'
          objectFit='cover'
        ></Image>
      </Box>
    </Grid>
  </Box>
  <Box w='100%' h='10' bg='blue.500' marginTop='50px'>
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={20}
      display='flex'
      flexDirection='column'
    >
      <Box w='100%' h='200px' bg='tomato'>
        {' '}
        <Image
          borderRadius='md'
          rounded='10px'
          src={image12}
          width='100%'
          height='130%'
          objectFit='cover'
        ></Image>
      </Box>
      <Box w='100%' h='200px' bg='#0e6b24'>
        {' '}
        <Image
          borderRadius='md'
          rounded='10px'
          src={image10}
          width='100%'
          height='130%'
          objectFit='cover'
        ></Image>
      </Box>
    </Grid>
  </Box>
</Grid>
/* width="70%"
        maxHeight="70vh"
        flexWrap="wrap"
        paddingX="120px"
        paddingBottom="40px"
        border="1px solid red" */
