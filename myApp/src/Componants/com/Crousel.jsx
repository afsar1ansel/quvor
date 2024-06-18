
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay } from "swiper/modules";

import person1 from "../../assets/person1.png"
import person2 from "../../assets/user-cover-2.png"
import person3 from "../../assets/user-cover-3.png"
import person4 from "../../assets/user-cover-4.png"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

let pic = [
  person1,
  person2,
  person3,
  person4,
  person1,
  person2,
  person4,
  person3,
];

export default function Crousel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
         
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {pic.map((pic, index) => (
          <SwiperSlide>
            <Box
              // border={"1px solid red"}
              width={{ base: "fit-content", sm: "238px", md: "238px", lg: "238px" }}
              height={"350px"}
              gap={"0px"}
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              borderRadius={"10px"}
              overflow={"hidden"}
            >
              <Image
                src={pic}
                borderRadius={"10px 10px 0px 0px"}
                alt="heroCover"
              />
              <Heading
                as={"h5"}
                fontSize={"16px"}
                fontWeight={"700"}
                lineHeight={"44px"}
                letterSpacing={"0.2px"}
                textAlign={"center"}
                fontFamily={"Montserrat, sans-serif"}
              >
                Julian Jameson
              </Heading>
              <Text
                fontSize={"12px"}
                fontWeight={"400"}
                lineHeight={"16px"}
                letterSpacing={"0.2px"}
                textAlign={"center"}
                fontFamily={"Montserrat, sans-serif"}
                color={"rgba(115, 115, 115, 1)"}
              >
                Profesor
              </Text>
              <Box
                // border={"1px solid red"}
                // width={"fit-content"}
                display={"flex"}
                justifyContent={"space-around"}
                px={12}
                py={3}
              >
                <Image src={facebook} />
                <Image src={instagram} />
                <Image src={twitter} />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
