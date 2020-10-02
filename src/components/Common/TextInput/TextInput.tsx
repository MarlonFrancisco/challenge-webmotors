import React, { ChangeEvent, ReactNode } from "react";
import { Input, Container } from "./styles";

type TextInputProps = {
  RightComponent?: ReactNode;
  LeftComponent?: ReactNode;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  RightComponent,
  LeftComponent,
  ...rest
}) => {
  return (
    <Container>
      {LeftComponent && LeftComponent}
      <Input {...rest} />
      {RightComponent && RightComponent}
    </Container>
  );
};

export default TextInput;
