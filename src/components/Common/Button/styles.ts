import styled from "styled-components";
import { Theme } from "../../../shared/@types";

export const SCButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px 20px;

  ${(props: {
    variant: string;
    theme: Theme;
    color: "primary" | "secondary";
  }) =>
    props.variant === "outlined" &&
    `
        background: none;
        border: 2px solid ${props.theme.palette[props.color].main};
        color: ${props.theme.palette[props.color].main};
    `}

  ${(props: {
    variant: string;
    theme: Theme;
    color: "primary" | "secondary";
  }) =>
    props.variant === "contained" &&
    `
            background: ${props.theme.palette[props.color].main};
            border: 2px solid ${props.theme.palette[props.color].main};
            color: #fff;
        `}

    ${(props: {
    variant: string;
    theme: Theme;
    color: "primary" | "secondary";
  }) =>
    props.variant === "text" &&
    `
                    background: transparent;
                    border: 2px solid transparent;
                    color: ${props.theme.palette.text.primary};
                `}
`;
