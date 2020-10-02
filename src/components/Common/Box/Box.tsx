import React, { CSSProperties } from "react";
import { Container } from "./styles";

export type BoxProps = {
  style?: CSSProperties;
};

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Box;
