import styled from "styled-components";
import { Theme } from "../../../shared/@types";

export const Container = styled.div`
  display: flex;
  border: 1px solid
    ${(props: { theme: Theme }) => props.theme.palette.text.primary};
  padding: 6px;
  height: 30px;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: none;
  color: ${(props: { theme: Theme }) => props.theme.palette.text.secondary};
  font-weight: 600;
`;
