import React from "react";
import { Box,Text,Heading } from "@chakra-ui/react";
import Crousel from "./com/Crousel";

const Body2 = () => {
  return (
    <Box
      mt={{ base: "20px", md: "0px", lg: "0px" }}
      width="100%"
      height={{
        base: "100%",
        md: "671px",
        lg: "849px",
      }}
      padding={{
        base: "10px 10px 10px 10px",
        md: "10px 0px 0px 0px",
        lg: "140px 195px 45px 198px",
      }}
      
      gap="10px"
      //   opacity={0}
      bg="rgba(255, 255, 255, 1)"
      // border={"1px solid red"}
      position={"relative"}
     
    >
      <Box>
        <Heading
          as="h6"
          fontFamily="Montserrat, sans-serif"
          fontSize={{ base: "24px", md: "14px", lg: "14px" }}
          fontWeight="700"
          lineHeight="54px"
          letterSpacing="0.2px"
          textAlign="left"
          color="rgba(150, 187, 124, 1)"
        >
          Team
        </Heading>
        <Heading
          as="h3"
          fontFamily="Montserrat, sans-serif"
          fontSize="24px"
          fontWeight="700"
          lineHeight="55px"
          letterSpacing="0.1px"
          textAlign="left"
          color="rgba(37, 43, 66, 1)"
        >
          Get Quality Education
        </Heading>
        <Text
          fontFamily="Montserrat, sans-serif"
          fontSize="17px"
          fontWeight={400}
          lineHeight="20px"
          letterSpacing="0.5px"
          textAlign="left"
          color={"rgba(115, 115, 115, 1)"}
        >
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian menchanics
        </Text>
      </Box>
      <Box
      width={"100%"}
      // border={"1px solid red"}
      display={"flex"}
      justifyContent={"center"}
      mt={{ base: 10, md: "100px" }}
      mx={"auto"}
      maxWidth={"1200px"}
      >
        <Crousel />
      </Box>
    </Box>
  );
};

export default Body2;
