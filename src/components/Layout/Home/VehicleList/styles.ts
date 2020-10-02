import styled from "styled-components";
import { Theme } from "../../../../shared/@types";

export const Container = styled.div`
  text-align: center;
  padding: 10px;
`;

export const ListVehicles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: calc((100% - 90px) / 4);
  margin: 10px;
  border: 1px solid
    ${(props: { theme: Theme }) => props.theme.palette.text.primary};

  @media (max-width: ${(props: { theme: Theme }) =>
      props.theme.breakpoints.md}px) {
    width: calc((100% - 90px) / 3);
  }

  @media (max-width: ${(props: { theme: Theme }) =>
      props.theme.breakpoints.sm}px) {
    width: calc((100% - 0px) / 1);
  }
`;

export const ProductCardImage = styled.img`
  height: 180px;
`;

export const NotFoundContainer = styled.div`
  margin-top: 20px;
`;
