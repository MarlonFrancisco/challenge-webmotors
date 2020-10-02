import styled from "styled-components";
import { Theme } from "../../../shared/@types";

export const Spin = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid
    ${(props: { theme: Theme }) => props.theme.palette.secondary.main};
  border-radius: 50%;
  width: ${(props: { size: number }) => props.size}px !important;
  margin: auto;
  height: ${(props: { size: number }) => props.size}px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
