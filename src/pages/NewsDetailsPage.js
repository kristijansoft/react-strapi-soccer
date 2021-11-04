import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { NewsDetailCard } from "../Component/Cards";
import image8 from "../assets/African-work.jpg";
import axios from "axios";

import { Layout } from "../Component/Layout";
import { news } from "../lib/utils/mock";

export const NewsDetailPage = (props) => {
  const [singleNews, setSingleNews] = useState({});
  const [otherNews, setOtherNews] = useState([]);
  const params = useParams();

  console.log(params.id);

  const { path } = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:1337/news/${params.id}`
        );
        const news = await axios.get(`http://localhost:1337/other-news`);
        news.data && setOtherNews(news.data);
        data && setSingleNews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(otherNews);

  return (
    <Layout>
      <Box
        p={["20px 30px", "60px 80px"]}
        mt="20"
        display="flex"
        alignContent="center"
        justifyContent="center"
        flexDirection={["column", "row"]}
      >
        <Flex mt="10" direction="column" w="100%">
          <Text
            fontSize={["xl", "3xl"]}
            fontWeight="800"
            fontStyle="italics"
            mb="10"
          >
            {singleNews.heading}
          </Text>
          <Box
            marginTop="15px"
            border="1px solid black"
            width={["100%", "80%"]}
            height="50%"
            style={{ "clip-path": " polygon(0 0, 100% 0, 100% 64%, 0 79%)" }}
          >
            <Image
              src={`http://localhost:1337${singleNews?.image?.[0]?.url}`}
              width="100%"
              height="100%"
              objectFit="fill"
            ></Image>
          </Box>
          <Flex direction="column" mt="-30px" w="100%">
            <Text fontSize="18px" fontWeight="800">
              Written By: {singleNews.author}
            </Text>
            <Text> {singleNews.date}</Text>
            <Text
              mt="10"
              fontSize="17px"
              lineHeight="taller"
              w={["100%", "70%"]}
              textAlign="justify"
            >
              {singleNews.body}
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
            {otherNews
              .map((event, index) => {
                return (
                  <a href={event.Link} key={index}>
                    {" "}
                    <NewsDetailCard
                      heading={event.Heading}
                      imageSrc={`http://localhost:1337${event.image[0].url}`}
                      width={["100%", "280px"]}
                      marginRight={["0", "0"]}
                      views="10"
                    ></NewsDetailCard>
                  </a>
                );
              })
              .slice(0, 4)}
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};
