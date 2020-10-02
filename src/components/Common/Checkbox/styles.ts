import styled from "styled-components";
import Checkbox from "react-simple-checkbox";

export const CustomCheckbox = styled(Checkbox).attrs((props) => ({
  ...props,
  size: 2,
  tickSize: 3,
  borderThickness: 1,
  color: {
    backgroundColor: "#fff",
    borderColor: props.theme.palette.text.primary,
    uncheckedBorderColor: props.theme.palette.text.primary,
    tickColor: props.theme.palette.primary.main,
  },
}))`
  margin-right: 5px;
  top: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
