import { Flex, Box } from "@chakra-ui/core";
import React from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = (props) => {
  const [bg,setBg]=React.useState();
  
  return (
    
    <>
      <Navbar  />
      <Flex direction="column" minH="100vh" minW="100vw" mt="0">
        <Box flex="1">{props.children}</Box>
        <Footer  />
      </Flex >
    </>
  );
};
