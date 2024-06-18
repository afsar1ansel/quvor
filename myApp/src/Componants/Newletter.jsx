import { Box, Text, Button, Heading, Input, useToast, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

import { useState, useEffect } from "react";

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!email) {
//     return "Email is required";
//   }

  if (!re.test(String(email).toLowerCase())) {
    return "Invalid email format";
  }

  if (email !== email.toLowerCase()) {
    return "Email should not contain capital letters";
  }

  if (!email.includes("@")) {
    return "Email should contain @ symbol";
  }

  if (!email.endsWith("gmail.com")) {
    return "Only gmail.com addresses are allowed";
  }

  return true;
}

export default function Newletter() {

     const [email, setEmail] = useState("");
     const [error, setError] = useState("");
   const toast = useToast();


  
     useEffect(() => {
       
       const timeoutId = setTimeout(() => {
        const valid = validateEmail(email);
        if (valid === true) {
          setError("");
        }
        // console.log(valid);
        if (valid != true && email.trim() != "") {
          setError(valid);
          toast({
            title: `${valid}`,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "bottom-left",
          })
        }
       }, 2000);


       return () => {
         clearTimeout(timeoutId);
       };
     }, [email, toast]);

     const handleInputChange = (e) => {
       const newEmail = e.target.value;
       setEmail(newEmail);
     };

    

  return (
    <Box
      bg="rgba(255, 242, 243, 1)"
      //   border="1px solid red"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="500px"
      margin="auto"
      gap={20}
    >
      <Box>
        <Heading
          as="h6"
          fontFamily="Montserrat, sans-serif"
          fontSize="14px"
          fontWeight="700"
          lineHeight="24px"
          letterSpacing="0.2px"
          textAlign="center"
          color={"rgba(150, 187, 124, 1)"}
        >
          Newsletter
        </Heading>
        <Heading
          as="h3"
          fontFamily="Montserrat, sans-serif"
          fontSize="24px"
          fontWeight="700"
          lineHeight="52px"
          letterSpacing="0.1px"
          textAlign="center"
          color={"rgba(37, 43, 66, 1)"}
        >
          Watch our Courses
        </Heading>
        <Text
          fontFamily="Montserrat, sans-serif"
          fontSize="14px"
          fontWeight="400"
          lineHeight="20px"
          letterSpacing="0.5px"
          textAlign="center"
          color={"rgba(115, 115, 115, 1)"}
        >
          Problems trying to resolve the conflict between <br /> the two major
          realms of physics: Newtonian mechanics
        </Text>
      </Box>
      <Box
        position={"relative"}
        width={{ base: "100%", md: "688px" }}
        height={"fit-content"}
        gap="0px"
        // opacity="0"
        border="1px solid rgba(230, 230, 230, 1)"
        color={"rgba(37, 43, 66, 1)"}
        display="flex"
        flexDirection={{ base: "row", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Input
          width={"100%"}
          height={{ base: "48px", md: "100%" }}
          bg={"white"}
          // border="1px solid black"
          focusBorderColor="none"
          placeholder="Your email"
          onChange={handleInputChange}
          value={email}
        />
        <Button
          width={"177px"}
          height={{ base: "48px", md: "100%" }}
          padding="15px 22.5px"
          gap="10px"
          borderRadius="0px 5px 5px 0px"
          borderWidth="1px"
          borderStyle="solid"
          color={"rgba(230, 230, 230, 1)"}
          bg={"rgba(150, 187, 124, 1)"}
          _hover={{ bg: "rgba(150, 187, 124, 1)" }}
        >
          Subscribe
        </Button>
        <Text color={"red"} position={"absolute"} bottom={"-30px"} left={"10px"}>
          {error == "" ? "" : error}
        </Text>
      </Box>
    </Box>
  );
}
