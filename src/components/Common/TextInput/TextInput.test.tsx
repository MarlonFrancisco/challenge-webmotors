import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextInput, { TextInputProps } from "./TextInput";
import { WithTheme } from "../../../shared/utils/helpers";

const Wrapper = (props: TextInputProps) => (
  <WithTheme>
    <TextInput {...props} />
  </WithTheme>
);

describe("TextInput", () => {
  let props: TextInputProps;

  beforeEach(() => {
    props = {
      value: "webmotors",
      onChange: jest.fn(),
      LeftComponent: <p>LeftComponent</p>,
      RightComponent: <p>RightComponent</p>,
    };
  });

  it("should render without an error", () => {
    const { container } = render(<Wrapper {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render props", () => {
    const { queryByDisplayValue, queryByText } = render(<Wrapper {...props} />);

    expect(queryByDisplayValue(props.value)).not.toBeNull();
    expect(queryByText("LeftComponent")).not.toBeNull();
    expect(queryByText("RightComponent")).not.toBeNull();
  });

  it("should call onChange function", () => {
    const { getByDisplayValue } = render(<Wrapper {...props} />);

    const inputElement = getByDisplayValue(props.value);

    const triggeredEvent = fireEvent.change(inputElement, {
      target: {
        value: "motors",
      },
    });

    expect(triggeredEvent).toBeTruthy();
    expect(props.onChange).toHaveBeenCalled();
  });
});
