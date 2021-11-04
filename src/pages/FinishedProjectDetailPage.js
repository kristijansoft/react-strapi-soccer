import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { NewsDetailCard } from "../Component/Cards";
import image8 from "../assets/African-work.jpg";
import axios from "axios";

import { Layout } from "../Component/Layout";
import { news } from "../lib/utils/mock";

export const FinishedProjectDetailPage = (props) => {
  const [singleProject, setSingleProject] = useState({});
  const params = useParams();

  console.log(params.id);

  const { path } = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:1337/finishedprojects/${params.id}`
        );

        data && setSingleProject(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Box
        p={["20px 30px", "60px 80px"]}
        mt="20"
        display="flex"
        alignContent="center"
        justifyContent="center"
        flexDirection={["column", "column"]}
      >
        <Flex mt="10" direction="column" w="100%">
          <Text
            fontSize={["xl", "4xl"]}
            fontWeight="800"
            fontStyle="italics"
            mb="10"
          >
            {singleProject.heading}
          </Text>
          <Box
            marginTop="15px"
            border="1px solid black"
            width={["1000px", "1000px"]}
            height="500px"
            style={{ "clip-path": " polygon(0 0, 100% 0, 100% 64%, 0 79%)" }}
          >
            <Image
              src={`http://localhost:1337${singleProject?.image?.[0]?.url}`}
              width="100%"
              height="100%"
              objectFit="fill"
            ></Image>
          </Box>
          <Flex direction="column" mt="-30px" w="100%">
            <Text fontSize="18px" fontWeight="800">
              Written By: {singleProject.author}
            </Text>
            <Text> {singleProject.date}</Text>
            <Text
              mt="10"
              fontSize="17px"
              lineHeight="taller"
              w={["100%", "70%"]}
              textAlign="justify"
            >
              {singleProject.body}
              <br></br>
              <br></br>
              Aenean tempor ornare ipsum, sit ametaliquam Lorem ipsum dolor sit
              ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit
              ametaliquam Lorem ipsum dolor sit ame consectetur adipiscing elit.
              Aenean tempor ornare ipsum, sit ametaliquam Lorem ipsum dolor sit
              ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit
              ametaliquamLorem ipsum dolor sit ame consectetur adipiscing elit.
              Aenean tempor ornare ipsum, sit ametaliquam
              <br></br>
              <br></br>
              Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean
              tempor ornare ipsum, sit ametaliquam.Lorem ipsum dolor sit ame
              consectetur adipiscing elit. Aenean tempor ornare ipsum, sit
              ametaliquam.Lorem ipsum dolor sit ame consectetur adipiscing elit.
              Aenean tempor ornare ipsum, sit ametaliquam Lorem ipsum dolor sit
              ame consectetur adipiscing elit.
            </Text>

            <hr style={{ width: "70%", marginTop: "60px" }}></hr>
          </Flex>
        </Flex>
        <Box mt={["10", "10"]}>
          <Text fontSize={["xl", "3xl"]} fontWeight="800">
            Other News
          </Text>
          <Flex wrap="wrap" justify="space-between" mt="10">
            {news
              .map((event) => {
                return (
                  <Box>
                    <Link to={`${path}/detail/2`}>
                      <NewsDetailCard
                        heading={event.heading}
                        imageSrc={event.image}
                        width={["100%", "280px"]}
                        marginRight={["0", "0"]}
                        views="10"
                      ></NewsDetailCard>
                    </Link>
                  </Box>
                );
              })
              .slice(0, 4)}
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};
