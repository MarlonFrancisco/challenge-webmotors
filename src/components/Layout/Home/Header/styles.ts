import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const VehicleTypeButtonContainer = styled.button<{
  selected: boolean;
  onClick: any;
}>`
  padding: 10px;
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
  align-items: flex-end;
  border-bottom: 2px solid
    ${(props) =>
      props.selected ? props.theme.palette.primary.main : "#f4f4f4"};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
