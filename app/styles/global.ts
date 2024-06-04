"use client";
import { createGlobalStyle } from "styled-components";

import { Jersey_10 } from "next/font/google";

export const jersey_10_init = Jersey_10({
  subsets: ["latin"],
  display: "swap",
  variable: "--jersey_10",
  weight: "400",
});

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #605f66;
  }
`;

export default GlobalStyles;
