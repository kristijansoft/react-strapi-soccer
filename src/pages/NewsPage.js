import React, { useEffect, useState } from "react";

import { Box, Flex, Text, Button } from "@chakra-ui/core";
import { Layout } from "../Component/Layout";
//import styles from "../pages/About/Styles.module.css";

import { NewsCard } from "../Component/Cards";
import { news } from "../lib/utils/mock";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "axios";

export const NewsPage = () => {
  const [readMore, setReadMore] = React.useState(true);
  const [index, setIndex] = useState(4);

  const arrayToHoldNews = [];

  const [newss, setFetchNews] = useState([]);
  const { path } = useRouteMatch();
  const sortNews = (news) => {
    console.log(news);
    return news?.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:1337/news");
        console.log(data);
        sortNews(data);
        data && setFetchNews(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const slicedData = (start, end) => {
    const newNews = newss.slice(start, end);
    arrayToHoldNews.push(newNews);
    console.log(arrayToHoldNews[0]);
  };

  console.log(slicedData(0, index));

  const handleMore = () => {
    setIndex(index + 4);
    slicedData(0, index);
  };

  return (
    <Layout>
      <Flex
        p={["10px", "60px"]}
        align="center"
        direction={["column-reverse", "row"]}
        w="100%"
        marginTop={["100px", "50px"]}
      >
        <Text fontSize={["36px", "48px"]} fontWeight="800">
          News
          <Text
            borderBottom="3px solid gold"
            width={["50%", "50%"]}
            marginTop={["5px", "10px"]}
          ></Text>
        </Text>
      </Flex>
      <Box p={["10px 20px", "20px 60px"]}>
        <Flex wrap="wrap" justify="space-between" w="100%">
          {arrayToHoldNews[0].map((data, index) => {
            return (
              <Box mb={["20px", "60px"]}>
                {console.log(path)}
                <Link to={`${path}/${data.id}`}>
                  <NewsCard
                    header={data.heading}
                    body={
                      data.body.length > 60 ? data.body.slice(0, 60) : data.body
                    }
                    imageSrc={`http://localhost:1337${data.image[0]?.url}`}
                    width={["100px", "380px"]}
                    marginRight={["0", "0"]}
                    views="10"
                    r={readMore}
                  ></NewsCard>
                </Link>
              </Box>
            );
          })}
        </Flex>
        <Box mb="10" d="flex" justifyContent="center">
          <Button
            variant="blue"
            variantColor="black"
            fontSize="17px"
            padding="18px"
            border="1px solid black"
            onClick={handleMore}
          >
            Load More
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};
