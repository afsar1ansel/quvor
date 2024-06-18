import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import teacher from "../assets/teacher.png";
import expert from "../assets/expert.png";
import { m } from "framer-motion";

const Body1 = () => {
  return (
    <Box
      width="100%"
    //   height="571px"
      padding={{
        base: "10px 0px 0px 0px",
        md: "10px 0px 0px 0px",
        lg: "140px 195px 45px 198px",
      }}
      // border={"1px solid red"}
      bg={"rgba(255, 255, 255, 1)"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      gap={12}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        //   justifyContent={"space-between"}
        gap={8}
        // border={"1px solid red"}
        p={6}
        width={"100%"}
      >
        <Box
          width="94px"
          height="7px"
          gap="0px"
          // opacity="0"
          bg="rgba(231, 64, 64, 1)"
        ></Box>
        <Box>
          <Heading
            as="h2"
            fontFamily="Montserrat, sans-serif"
            fontSize="40px"
            fontWeight="700"
            lineHeight="50px"
            letterSpacing="0.5px"
            textAlign="left"
            color="rgba(37, 43, 66, 1)"
          >
            Approdable Packages
          </Heading>
          <Text
            as="h4"
            fontFamily="Montserrat, sans-serif"
            fontSize="18px"
            fontWeight="400"
            lineHeight="30px"
            letterSpacing="0.3px"
            textAlign="left"
            color={"rgba(115, 115, 115, 1)"}
            width={{ base: "100%", md: "85%", lg: "87%" }}
            mt={6}
            // border={"1px solid red"}
          >
            Problems trying to resolve the conflict between the two major reals
            of Classical physics: Newtonian mechanics
          </Text>
        </Box>
        <Box
          display={"flex"}
          color={"rgba(150, 187, 124, 1)"}
          gap={"10px"}
          _hover={{ gap: "15px" }}
          cursor={"pointer"}
          //  border={"1px solid red"}
          width={"fit-content"}
          transition={"all 0.5s ease"}
        >
          <Heading
            as="h4"
            fontFamily="Montserrat, sans-serif"
            fontSize="20px"
            fontWeight="400"
            lineHeight="30px"
            letterSpacing="0.5px"
            textAlign="left"
            // width={{ base: "100%", md: "40%", lg: "40%" }}
            mt={-1}
          >
            Learn More{" "}
          </Heading>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="rgba(150, 187, 124, 1)"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </Box>
      </Box>

      <Box display={"flex"} flexDirection={{ xs:"column", sm: "row", base: "column", m:"column",  md: "row", lg: "row" }}  width={"fit-content"} gap={6} justifyContent={"start"} ml={{xs:"100px"}}  >
        <Box
          width="249px"
          height={{ base: "250px", md: "250px", lg: "292px" }}
          padding="35px 40px"
          gap="20px"
          bg="rgba(255, 255, 255, 1)"
          display="flex"
          flexDirection="column"
          //   border="1px solid red"
          boxShadow={
            "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px"
          }
          _hover={{ boxShadow: "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px" }}
        >
          <Image
            width="60%"
            padding="2px 0px 0px 19px"
            gap="10px"
            borderRadius="10px 0px 0px 0px"
            src={teacher}
          />
          <Text
            fontSize="14px"
            fontWeight="700"
            lineHeight="20px"
            letterSpacing="0.1px"
            textAlign="left"
            padding="0px 19px"
            color="rgba(37, 43, 66, 1)"
            fontFamily="Montserrat, sans-serif"
          >
            Certified Teacher
          </Text>
          <Box
            width="50px"
            height="7px"
            gap="0px"
            // bg="rgba(231, 64, 64, 1)"
            border={"2px solid red"}
            margin={"0px 18px"}
          />
          <Text
            fontFamily="Montserrat, sans-serif"
            fontSize="14px"
            fontWeight="400"
            lineHeight="20px"
            letterSpacing="0.2px"
            textAlign="left"
            color="rgba(115, 115, 115, 1)"
            padding={{ base: "0px", md: "0px", lg: "0px 19px" }}
          >
            The gradual accumulation of information about
          </Text>
        </Box>
        <Box
          width="249px"
          height={{ base: "250px", md: "250px", lg: "292px" }}
          padding="35px 40px"
          gap="20px"
          bg="rgba(255, 255, 255, 1)"
          display="flex"
          flexDirection="column"
          boxShadow={
            "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px"
          }
          _hover={{ boxShadow: "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px" }}
            // border="1px solid red"
        >
          <Image
            width="60%"
            padding="2px 0px 0px 19px"
            gap="10px"
            borderRadius="10px 0px 0px 0px"
            src={expert}
          />
          <Text
            fontSize="14px"
            fontWeight="700"
            lineHeight="20px"
            letterSpacing="0.1px"
            textAlign="left"
            padding="0px 19px"
            color="rgba(37, 43, 66, 1)"
            fontFamily="Montserrat, sans-serif"
          >
            Expert instruction
          </Text>
          <Box
            width="50px"
            height="7px"
            gap="0px"
            // bg="rgba(231, 64, 64, 1)"
            border={"2px solid red"}
            margin={"0px 18px"}
          />
          <Text
            fontFamily="Montserrat, sans-serif"
            fontSize="14px"
            fontWeight="400"
            lineHeight="20px"
            letterSpacing="0.2px"
            textAlign="left"
            color="rgba(115, 115, 115, 1)"
            padding={{ base: "", md: "", lg: "0px 19px" }}
          >
            The gradual accumulation of information about
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Body1;
