import styled from "styled-components";
import { Theme } from "../../../../shared/@types";

export const Container = styled.div``;

export const CheckboxContainer = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  & > *:nth-child(2) {
    margin-left: 10px;
  }
  @media (max-width: ${(props: { theme: Theme }) =>
      props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: ${(props: { theme: Theme }) =>
      props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  flex-basis: ${(props: { size: number }) => props.size}%;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (min-width: ${(props: { theme: Theme }) =>
        props.theme.breakpoints.sm}px) {
      button:last-child {
        width: 40%;
      }
    }
  }
`;
