"use client";
import { createGlobalStyle } from "styled-components";

import { Saira } from "next/font/google";

export const saira_init = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--saira",
  weight: "100",
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
