import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./shared/styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
