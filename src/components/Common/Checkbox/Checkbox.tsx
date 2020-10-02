import React, { CSSProperties } from "react";
import { Typography } from "../Typography";
import { CustomCheckbox, Container } from "./styles";

export type CheckboxProps = {
  onChange: (isChecked: boolean) => void;
  checked: boolean;
  label: string;
  style?: CSSProperties;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <CustomCheckbox {...rest} />
      <Typography size={10}>{label}</Typography>
    </Container>
  );
};

export default Checkbox;
