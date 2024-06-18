import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import mail from "../assets/email.svg";
import contact from "../assets/contact.svg";
import location from "../assets/location.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

// Define custom styles using Chakra UI's `sx` prop
const StyledH5 = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "54px",
  letterSpacing: "0.1px",
  textAlign: "left",
  color: "rgba(37, 43, 66, 1)",
};

const LinkStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "34px",
  letterSpacing: "0.2px",
  textAlign: "left",
  color: "rgba(115, 115, 115, 1)",
};

const H6Style = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "24px",
  letterSpacing: "0.2px",
  textAlign: "left",
  color: "rgba(115, 115, 115, 1)",
};
export default function Footer() {
  return (
    <>
      <Flex
        justifyContent="space-around"
        py="4"
        color="white"
        p={10}
        maxW="1200px"
        mx="auto"
        flexWrap="wrap"
      >
        <Box>
          <Heading sx={StyledH5}>Company Info</Heading>
          <Text sx={LinkStyle}>About Us</Text>
          <Text sx={LinkStyle}>Carrier</Text>
          <Text sx={LinkStyle}>We are hiring</Text>
          <Text sx={LinkStyle}>Blog</Text>
        </Box>
        <Box>
          <Heading sx={StyledH5}>Company Info</Heading>
          <Text sx={LinkStyle}>About Us</Text>
          <Text sx={LinkStyle}>Carrier</Text>
          <Text sx={LinkStyle}>We are hiring</Text>
          <Text sx={LinkStyle}>Blog</Text>
        </Box>
        <Box>
          <Heading sx={StyledH5}>Features</Heading>
          <Text sx={LinkStyle}>Business Marketing</Text>
          <Text sx={LinkStyle}>User Analytic</Text>
          <Text sx={LinkStyle}>Live Chat</Text>
          <Text sx={LinkStyle}>Unlimited Support</Text>
        </Box>
        <Box>
          <Heading sx={StyledH5}>Resources</Heading>
          <Text sx={LinkStyle}>IOS & Android</Text>
          <Text sx={LinkStyle}>Watch a Demo</Text>
          <Text sx={LinkStyle}>Customers</Text>
          <Text sx={LinkStyle}>API</Text>
        </Box>
        <Box w="300px">
          <Heading sx={StyledH5}>Get In Touch</Heading>
          <Flex gap="2" mt="2">
            <Image src={contact} />
            <Text sx={LinkStyle}> (480) 555-0103 </Text>
          </Flex>
          <Flex gap="2" mt="2">
            <Image src={location} />
            <Text sx={LinkStyle}>
              {" "}
              4517 Washington Ave. Manchester, Kentucky 39495{" "}
            </Text>
          </Flex>
          <Flex gap="2" mt="2">
            <Image src={mail} />
            <Text sx={LinkStyle}> debra.holt@example.com </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        width={"100%"}
        p={"2"}
        px={"15%"}
        bg={"rgba(250, 250, 250, 1)"}
      >
        <Box>
          <Heading sx={H6Style}>
            Made with Love by Figmaland All Right Reserved
          </Heading>
        </Box>
        <Flex gap="6" >
          <Image src={facebook} />
          <Image src={instagram} />
          <Image src={twitter} />
        </Flex>
      </Flex>
    </>
  );
}
