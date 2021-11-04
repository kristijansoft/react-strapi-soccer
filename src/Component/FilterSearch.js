import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Flex,
  Button,
} from "@chakra-ui/core";
import { IconContext } from "react-icons/lib";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const FilterSearch = (props) => {
  const [searchValue, setValue] = useState("");

  const selectedValue = (e) => {
    console.log("hello");
    props.onSearch(e);
    setValue(e);
  };

  return (
    <Flex
      bg="#fff"
      justify={["center", "space-between"]}
      align={["start", "center"]}
      direction={["column", "row"]}
      w={["70%", "100%"]}
      p="2"
      my="4"
    >
      <Menu w="100%" closeOnSelect={true} bg="blue" mr={["1px", "auto"]}>
        <MenuButton
          as={Button}
          fontWeight="500"
          fontSize="14px"
          mb={["2", "0"]}
          bg="#fff"
          rounded="none"
          border="1px solid gray"
          width="150%"
        >
          {searchValue ? searchValue : "Filter By"}
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup
            bg="#fff"
            onChange={(e) => selectedValue(e)}
            defaultValue="All"
          >
            {props.filterTerms.map((term, idx) => (
              <MenuItemOption key={idx} value={term} bg="#fff">
                {term}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default FilterSearch;
