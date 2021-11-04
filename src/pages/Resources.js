import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/core";
import { Layout } from "../Component/Layout";
import styles from "./resources.module.css";
import { FileResourceCard } from "../Component/Cards";
import { useWindowDimensions } from "../lib/hooks";
import resource1 from "../assets/icons/pngtree-pdf-file-document-icon-png-image_4187646.jpg";
import fallbackSrc from "../assets/icons/pngtree-pdf-file-document-icon-png-image_4187646.jpg";

import { formatDate } from "../lib/utils";
import { allresources } from "../lib/utils/mock";
import axios from "axios";
import FilterSearch from "../Component/FilterSearch";

function Resources(props) {
  const [resourcesList, setResourcesList] = useState([]);
  const [isFetchLoading, setFetchIsLoading] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const [resourceParams, setResourceParam] = useState({});
  const { width } = useWindowDimensions();
  const [filteredResource, setFilteredResources] = useState([]);
  const [filteredValuePresent, setFilteredValuePresent] = useState("All");

  const isMobile = width <= 700;

  console.log(searchParam);

  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };

  const filteredItems =
    searchParam === ""
      ? resourcesList
      : resourcesList.filter((item) =>
          item?.description.toLowerCase().includes(searchParam.toLowerCase())
        );

  useEffect(() => {
    const fetchAllResources = async () => {
      try {
        // setFetchIsLoading(true);
        // const { data } = await getAllResources();
        // console.log(data.data);

        const { data } = await axios.get("http://localhost:1337/resources");

        setFetchIsLoading(false);

        setResourcesList(data);
      } catch (err) {
        setFetchIsLoading(false);
        console.log("err", err);
      }
    };
    fetchAllResources();
  }, []);

  const filterResoures = (value) => {
    setFilteredValuePresent(value);
    let newProjectList = [...resourcesList];
    let filteredData = [];
    console.log(newProjectList);
    if (value) {
      filteredData =
        newProjectList.filter((item) => item.type === value) || newProjectList;
    } else {
      filteredData = newProjectList;
    }

    setFilteredResources(filteredData);
  };

  console.log(resourceParams);
  return (
    <Layout>
      <Box className={styles.resource}></Box>
      <Modal isOpen={isOpen} onClose={onClose} size="1000px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resource</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              d="flex"
              justifyContent="space-between"
              alignItems="center"
              p="10"
              flexDirection="row"
              h="100%"
            >
              <Box mr="6" flex="1">
                <Image
                  src={
                    resourceParams?.resource?.type === "docs"
                      ? resourceParams?.imageSrc
                      : resourceParams?.resource?.type === "image"
                      ? resourceParams?.resource?.imageSrc?.formats?.large?.url
                      : resourceParams?.fallbackImg
                  }
                  objectFit={
                    resourceParams?.resource?.type === "docs"
                      ? "contain"
                      : "cover"
                  }
                  w={
                    resourceParams?.resource?.type === "docs"
                      ? "200px"
                      : "350px"
                  }
                  h="100%"
                  mx="auto"
                />
              </Box>
              <Stack flex="1">
                <Text fontSize="16px" fontWeight="500" px="4" pt="4" mt="auto">
                  {resourceParams.resource?.description}
                </Text>
                <Flex align="center" justify="space-between" pl="4" py="0">
                  <Text
                    flex="1"
                    width="100%"
                    fontSize="14px"
                    fontWeight="600"
                    color="#837d85"
                  >
                    Posted By:
                    {resourceParams.resource?.author
                      ? resourceParams.resource?.author
                      : "N/A"}
                  </Text>
                  <Text
                    flex="1"
                    fontSize="14px"
                    fontWeight="500"
                    color="#837d85"
                  >
                    {resourceParams.resource?.date
                      ? formatDate(resourceParams.resource?.date)
                      : "Date: N/A"}
                  </Text>
                </Flex>
                <Flex align="center" mt="4">
                  <Button
                    rightIcon="arrow-down"
                    variant="outline"
                    alignSelf="start"
                    variantColor="green"
                    m="4"
                  >
                    <a
                      href={resourceParams.resource?.path}
                      download
                      target="blank"
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
        bottom={!isMobile && "60px"}
        bottom='300px'
        top={isMobile && "20px"}
        left='0px'
        w='100%'
        h={["40%", "20%"]}
        zIndex='200'
        color='white'
      >
        <Stack mt={["40", "40"]} ml={["10", "40"]}>
          <Text fontWeight='700' fontSize={["xl", "4xl"]}>
            RESOURCES
          </Text>
        </Stack>
      </Box> */}
      <Flex
        justify="space-between"
        p="60px"
        align="center"
        flexDirection={["column", "row"]}
      >
        <Text fontSize="48px" fontWeight="800">
          Resources
        </Text>
        <Box
          ml="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={["column", "row"]}
        >
          {" "}
          <Box width="100%">
            {" "}
            <FilterSearch
              filterTerms={["Annual", "Publication", "All"]}
              onSearch={(val) => filterResoures(val)}
            />
          </Box>
          <form>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pl="4"
                  children={<Icon name="search" color="gray.300" />}
                />

                <Input
                  placeholder="Search for resource"
                  w={["90vw", "600px"]}
                  ml="2"
                  type="text"
                  onChange={handleChange}
                  value={searchParam}
                ></Input>
              </InputGroup>
            </FormControl>
          </form>
        </Box>
      </Flex>
      {filteredValuePresent === "All" ? (
        <Box px="60px" py="30px" mb="20">
          {/* <Flex wrap='wrap' justify='space-between'> */}

          {resourcesList.length > 0 ? (
            <Grid
              templateColumns={[
                "repeat(auto-fit, minmax(250px, 1fr))",
                "repeat(auto-fit, minmax(250px, 270px))",
              ]}
              gap="6"
            >
              {filteredItems.map((resource) => (
                <FileResourceCard
                  key={resource.id}
                  width={["100%", "270px"]}
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
              <Text textAlign="center">
                There are no resoures at the moment
              </Text>
            </Box>
          )}

          {/* </Flex> */}
          {resourcesList.length > 0 && (
            <Box my="10" d="flex" justifyContent="center">
              <Button variant="link" variantColor="green">
                Load More
              </Button>
            </Box>
          )}
        </Box>
      ) : (
        <Box px="60px" py="30px" mb="20">
          {/* <Flex wrap='wrap' justify='space-between'> */}

          {filteredResource.length > 0 ? (
            <Grid
              templateColumns={[
                "repeat(auto-fit, minmax(250px, 1fr))",
                "repeat(auto-fit, minmax(250px, 270px))",
              ]}
              gap="6"
            >
              {filteredResource.map((resource) => (
                <FileResourceCard
                  key={resource.id}
                  width={["100%", "270px"]}
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
              <Text textAlign="center">
                There are no resoures at the moment
              </Text>
            </Box>
          )}

          {/* </Flex> */}
          {filteredResource.length > 0 && (
            <Box my="10" d="flex" justifyContent="center">
              <Button variant="link" variantColor="green">
                Load More
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Layout>
  );
}

export default Resources;
