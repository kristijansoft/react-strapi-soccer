import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Layout } from "../Component/Layout";
import styles from "./resources.module.css";
import { useWindowDimensions } from "../lib/hooks";
import axios from "axios";

const ContactPage = () => {
  const { width } = useWindowDimensions();
  const [addreses, setAddresses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:1337/addresses");

        data && setAddresses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const isMobile = width <= 700;
  console.log(addreses);
  return (
    <Layout>
      <Box className={styles.Hero} position="relative" zIndex="100"></Box>
      {/* <Box
        className={styles.Overlay}
        position="absolute"
        bottom={!isMobile && "30px"}
        top={isMobile && "30px"}
        left="0px"
        w="100%"
        h={["40%", "40%"]}
        zIndex="200"
        color="white"
      >
        <Stack mt={["40", "90"]} ml={["10", "40"]}>
          <Text fontWeight="700" fontSize={["xl", "4xl"]}>
            Contact
          </Text>
        </Stack>
      </Box> */}
      <Box padding={["10px", "100px 120px"]} bg="#f2fafd">
        {addreses.map((data, id) => (
          <Box key={id}>
            <Flex
              direction={["column", "row"]}
              align="start"
              justify="start"
              bg="white"
              p={["4", "10"]}
            >
              <Box flex="2" mr={["0", "12"]} bg="white">
                <Text
                  fontWeight="900"
                  fontSize={["2xl", "2xl"]}
                  lineHeight={["shorter", "shorter"]}
                  mb={["4", "0"]}
                  fontFamily="Familiar Pro"
                  w="80%"
                  textAlign={["left", "left"]}
                >
                  {data.region}
                </Text>
                <Text
                  fontWeight="500"
                  fontSize={["2xl", "18px"]}
                  lineHeight={["shorter", "50px"]}
                  mb={["4", "0"]}
                  fontFamily="Familiar Pro"
                  w="80%"
                  textAlign={["left", "left"]}
                >
                  <span
                    style={{
                      fontSize: "25px",
                      color: "#7a2910",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Director:
                  </span>
                  <span
                    style={{
                      fontSize: "20px",

                      fontWeight: "bold",
                    }}
                  >
                    {data.director}
                  </span>
                </Text>
              </Box>

              <Stack
                flex={["1", "1.5"]}
                alignSelf="flex-start"
                spacing="2"
                mb="0"
                ml={["0", "6"]}
                mr="8"
              >
                <Text
                  fontSize={["17px"]}
                  px={["0", "4"]}
                  lineHeight={["tall", "tall"]}
                >
                  {data.PostalCode} <br></br>
                  {data.location}
                  <Text mt="4"></Text>
                  <strong>PHONE:</strong> {data.Phone}
                  <Text mt="4"></Text> <strong>EMAIL:</strong> {data.mail}
                  <Text mt="4"></Text>
                  <strong>Digital Address:</strong>
                  {data.digitalAddress}
                  <br></br>
                  <br></br>
                </Text>
              </Stack>
            </Flex>
            <hr></hr>
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default ContactPage;
