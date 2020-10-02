import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styled";

type WithThemeProps = {};

export const WithTheme: React.FC<WithThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
