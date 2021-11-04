import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/core";
import "./styles.css";
import Carousel from "react-elastic-carousel";
import { images } from "../lib/utils/mock";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "axios";

import { Layout } from "../Component/Layout";
import MediaHeader from "../Component/MediaHeader";
import { ImageHolder, NewsCard } from "../Component/Cards";
import { EmployeeExperienceSection } from "../Component/EmployeeExperienceSection";
import AnniversarySection from "../Component/AnniversarySection";

function Media(props) {
  const [data, setData] = React.useState([]);
  const [newss, setFetchNews] = useState([]);
  const [members, setMembers] = React.useState([]);

  const [show, setShow] = React.useState(false);
  const { path } = useRouteMatch();

  const handleToggle = () => setShow(!show);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:1337/images");
        const news = await axios.get("http://localhost:1337/news");

        setFetchNews(news.data);

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const images = data.map((el) => el.Picture[0].url);
  console.log(newss);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Layout>
      <MediaHeader />
      <Box marginTop={["100px", "90px"]}>
        <EmployeeExperienceSection />
      </Box>
      <Box marginTop={["50px", "300px"]}>
        <AnniversarySection />
      </Box>

      <Flex
        p={["40px", "60px"]}
        align="center"
        justifyContent="center"
        marginTop={["90px", "0px"]}
      >
        <Text fontSize={["32px", "42px"]} fontWeight="800">
          Recent News Update
        </Text>
      </Flex>
      <Box
        marginTop="30px"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
      >
        {newss
          .map((data) => (
            <Link to={`/newsPage`}>
              <NewsCard
                handle={handleToggle}
                show={show}
                header={data.heading}
                body={
                  data.body.length > 60 ? data.body.slice(0, 60) : data.body
                }
                imageSrc={`http://localhost:1337${data.image[0]?.url}`}
              />
            </Link>
          ))
          .slice(0, 3)}
      </Box>
      <Box mt="25px" d="flex" justifyContent="center">
        <Link to="/newsPage">
          {" "}
          <Button
            variant="blue"
            variantColor="black"
            fontSize="17px"
            padding="18px"
            border="1px solid black"
          >
            Load More
          </Button>
        </Link>
      </Box>

      <Box marginY="100px" marginX="auto">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={5000}
          infinite={true}
        >
          {images.map((el, id) => (
            <ImageHolder
              key={id}
              eventImage={`http://localhost:1337${el}`}
            ></ImageHolder>
          ))}
        </Carousel>
      </Box>
    </Layout>
  );
}
// {images.map((image) => (
// <ImageHolder key={image.id} image={image.url}></ImageHolder>

// ))}

export default Media;
