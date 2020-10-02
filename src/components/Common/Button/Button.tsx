import React, { CSSProperties } from "react";
import { Loader } from "../Loader";
import { SCButton } from "./styles";

export type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  style?: CSSProperties;
  onClick?: () => void;
  fetching?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  fetching,
  ...rest
}) => {
  return (
    <SCButton variant={variant} color={color} {...rest}>
      {fetching ? <Loader /> : children}
    </SCButton>
  );
};

export default Button;
