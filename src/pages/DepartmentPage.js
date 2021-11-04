import React from "react";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/core";
import { Layout } from "../Component/Layout";

import img1 from "../assets/12.jpg";
import img2 from "../assets/evan-dvorkin.jpg";

function DepartmentPage(props) {
  return (
    <Layout>
      <Box
        mt={["100px", "100px"]}
        height={["100%", "100%"]}
        width={["100%", "100%"]}
      >
        <Text
          padding="10px"
          fontWeight="800"
          fontSize="33px"
          textAlign={["center", "center"]}
          marginLeft={["0px", "0px"]}
        >
          Welcome from MIS Administrator
        </Text>
        <Flex
          height={["50%", "100%"]}
          width={["100%", "95%"]}
          border="1px solid #d1d1d1"
          marginX="auto"
          flexDirection={["column", "row"]}
        >
          <Box flex="1" width={["100%", "100%"]} height={["60%", "100%"]}>
            <Image
              src={img2}
              width="100%"
              height="100%"
              objectFit="cover"
            ></Image>{" "}
          </Box>
          <Box flex="1" width="100%" height="100%">
            <Text
              padding="20px"
              lineHeight={["20px", "30px"]}
              fontWeight="400"
              fontSize={["14px", "16px"]}
            >
              At PageGroup we have a purpose – “we change lives for people
              through creating opportunity to reach potential“. We’re world
              leaders at what we do – and we do it every day. At PageGroup we
              have a purpose – “we change lives for people through creating
              opportunity to reach potential“. We’re world leaders at what we do
              – and we do it every day. At PageGroup we have a purpose – ame
              consectetur adipiscing elit. “we change lives for people through
              creating opportunity to reach potential“. We’re world leaders at
              what we do – and we do it every day.<br></br> <br></br>At
              PageGroup we have a purpose – “we change lives for people through
              creating opportunity to reach potential“. We’re world leaders at
              what we do – and we do it every day. At PageGroup we have a
              purpose – “we change lives for people through creating opportunity
              to reach potential“. ame consectetur adipiscing elit. We’re world
              leaders at what we do – and we do it every day. At PageGroup we
              have a purpose – “we change lives for people through creating
              opportunity to reach potential“. We’re world leaders at what we do
              – and we do it every day. At PageGroup we have a purpose – “we
              change lives for people through creating opportunity to reach
              potential“. We’re world leaders at what we do – and we do it every
              day.
            </Text>
          </Box>
        </Flex>
        <Box
          marginTop="100px"
          marginBottom={["100px", "100px"]}
          bg="gray.100"
          height={["100%", "100%"]}
          padding="20px"
          marginBottom="100px"
          width={["100vw", "100vw"]}
        >
          <Text
            padding="30px"
            fontWeight="800"
            fontSize="32px"
            marginLeft={["0px", "210px"]}
            textAlign={["center", "left"]}
          >
            MIS Division
          </Text>
          <Box
            width={["90vw", "70vw"]}
            height="100%"
            border="1px solid #d1d1d1"
            marginX="auto"
            bg="white"
          >
            <Text
              fontSize={["14px", "16px"]}
              lineHeight={["20px", "40px"]}
              fontWeight="400"
              padding="20px"
            >
              Our strategy remains consistent: organic growth by region and
              discipline, a focus on growth markets, development of home-grown
              management expertise and a structure that champions our own
              talent.In March 2006, when I was promoted to CEO, it was a proud
              day for me, not just because of the title, but because it was
              Michael Page. Like the majority of our senior leadership team, I
              recruitment consultant. Our strategy remains consistent: organic
              growth by region and discipline, a focus on growth markets,
              development of home-grown management expertise and a structure
              that champions our own talent.In March 2006, when I was promoted
              to CEO, it was a proud day for me, not just because of the title,
              but because it was Michael Page. Like the majority of our senior
              leadership team, I started my career here as a recruitment
              consultant.
            </Text>

            <Text
              fontSize={["14px", "16px"]}
              lineHeight={["20px", "40px"]}
              fontWeight="400"
              padding="20px"
            >
              Our strategy remains consistent: organic growth by region and
              discipline, a focus on growth markets, development of home-grown
              management expertise and a structure that champions our own
              talent.In March 2006, when I was promoted to CEO, it was a proud
              day for me, not just because of the title, but because it was
              Michael Page. Like the majority of our senior leadership team, I
              started my career here as a recruitment consultant. Our strategy
              remains consistent: organic growth by region and discipline, a
              focus on growth markets, development of home-grown management
              expertise and a structure that champions our own talent.In March
              2006, when I was promoted to CEO, it was a proud day for me, not
              just because of the title, but because it was Michael Page. Like
              the majority of our senior leadership team, I started my career
              here as a recruitment consultant.
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default DepartmentPage;
