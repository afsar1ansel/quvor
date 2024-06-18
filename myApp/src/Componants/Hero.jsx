import { Box, Image, Heading,Button } from "@chakra-ui/react";
import heroCover from "../assets/hero-cover-1.png";


const Hero = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ base: "start", md: "center", lg: "center" }}
        fontFamily={"monsterrat, sans-serif"}
        bg={"rgba(255, 242, 243, 1)"}
        pt={{ base: "50px", md: "0px", lg: "0px" }}
      >
        <Box minHeight={"386px"} ml={"7%"} width={{ base: "80%", md: "50%", lg: "50%" }} >
          <Box
            p={{ base: 0, md: 2, lg: 6 }}
            letterSpacing={"0.5px"}
            ml={{ base: 0, md: 0, lg: 8 }}
            width={"100%"}
            display={"flex"}
            flexDirection={{ base: "row", md: "column" }}
            justifyContent={"space-around"}
          
          >
            <Box  width={"fit-content"} >
              <Heading
                lineHeight={"80px"}
                as="h5"
                size={{ base: "lg", md: "lg", lg: "md" }}
                color={"rgba(150, 187, 124, 1)"}
                fontWeight={700}
                
               
              >
                welcome
              </Heading>
              <Heading
                mt={{ base: 15, md: 0, lg: 0 }}
                as="h1"
                fontSize={{ base: "38px", md: "58px", lg: "58px" }}
                fontWeight="700"
                lineHeight={{ base: "50px", md: "80px", lg: "80px" }}
                letterSpacing="0.5px"
                textAlign="left"
                fontFamily={"monsterrat, sans-serif"}
                color={"rgba(37, 43, 66, 1)"}
              >
                Best Learning <br /> Opportunities
              </Heading>
              <br />
              <Heading
                as="h4"
                fontFamily="Montserrat, sans-serif"
                fontSize="20px"
                fontWeight="400"
                lineHeight="30px"
                letterSpacing="0.5px"
                textAlign="left"
                color={"rgba(115, 115, 115, 1)"}
              >
                Our goal is to make online <br /> education work for everyone
              </Heading>
            </Box>

            <Box
              mt={8}
              gap={4}
              // width={"40%"}
              display={"flex"}
              justifyContent={{ base: "center", md: "start", lg: "start" }}
              // border={"1px solid black"}
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "start", lg: "start" }}
            >
              <Button
                padding="15px 40px"
                gap="10px"
                borderRadius="5px 0px 0px 0px"
                bg="rgba(150, 187, 124, 1)"
                color="white"
                _hover={{
                  bg: "rgba(150, 187, 124, 1)",
                }}
              >
                Join Us
              </Button>
              <Button
                gap="10px"
                borderRadius="5px 0px 0px 0px"
                border="1px solid rgba(150, 187, 124, 1)"
                color="rgba(150, 187, 124, 1)"
              >
                {" "}
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Image src={heroCover} />
        </Box>
      </Box>
    </>
  );
}

export default Hero;
