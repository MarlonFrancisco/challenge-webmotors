import React from "react";
import { SCContainer } from "./styles";

enum Breakpoints {
  lg = 933,
  md = 768,
}

type ContainerProps = {
  maxWidth: "lg" | "md";
};

const Container: React.FC<ContainerProps> = ({ maxWidth, children }) => {
  return <SCContainer maxWidth={Breakpoints[maxWidth]}>{children}</SCContainer>;
};

export default Container;
