import { createGlobalStyle } from "styled-components";
import { Theme } from "../@types";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        outline: none;
    }

    body {
        background-color: #f4f4f4;
    }

    button {
      cursor: pointer;
    }
`;

const theme: Theme = {
  palette: {
    primary: {
      main: "#ca2430",
    },
    secondary: {
      main: "#eac892",
    },
    text: {
      primary: "#bababc",
      secondary: "#848383",
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export { GlobalStyle, theme };
