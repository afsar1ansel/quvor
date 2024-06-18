// theme.js or theme.ts
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  xs: "420px",
  sm: "480px",
  md: "769px", 
  m: "769px", 
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  
});

export default theme;
