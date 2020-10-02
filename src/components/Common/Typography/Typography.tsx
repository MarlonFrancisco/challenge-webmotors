import React, { CSSProperties } from "react";
import { useTheme } from "styled-components";

type TypographyProps = {
  variant?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style?: CSSProperties;
  color?: "primary" | "secondary";
  size?: number;
  weight?: number;
  align?: "center" | "right" | "left";
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "h1",
  color = "primary",
  size = 16,
  weight = 500,
  style = {},
  align = "center",
}) => {
  const theme = useTheme();
  return React.createElement(
    variant,
    {
      style: {
        fontSize: `${size}px`,
        color: theme.palette.text[color],
        fontWeight: weight,
        textAlign: align,
        ...style,
      },
    },
    children
  );
};

export default Typography;
