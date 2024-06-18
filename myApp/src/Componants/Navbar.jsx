"use client";

import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";

const Links = ["Home", "Products", "Pricing", "Contact"];

const NavLink = ({ children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "none",
        color: "rgba(150, 187, 124, 1)",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="rgba(255, 242, 243, 1)"
        px={4}
        p={{ base: 2, md: 4 }}
        color={"rgba(115, 115, 115, 1)"}
        fontFamily={"monsterrat, sans-serif"}
        fontWeight={700}
        position={"sticky"}
        top={0}
        zIndex={10}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
          <IconButton
            bg="rgba(255, 242, 243, 1)"
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={20} alignItems={"center"}>
            <Box>
              <Heading color={"black"}>Quvor</Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              // display={{ s: "none", md: "none" }} 
              color={"rgba(150, 187, 124, 1)"}
              bg={"rgba(255, 242, 243, 1)"}
              mr={4}
              _hover={{ bg: "none" }}
            >
              Login
            </Button>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              borderRadius={0}
              p={{ base: 4, md: 6 }}
              _hover={{ bg: "rgba(150, 187, 124, 1)" }}
              //   mr={4}
              bg={"rgba(150, 187, 124, 1)"}
              rightIcon={<ArrowForwardIcon />}
            >
              JOIN US
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                // bg="rgba(255, 242, 243, 1)"
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
