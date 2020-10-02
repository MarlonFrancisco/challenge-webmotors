import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkbox, { CheckboxProps } from "./Checkbox";
import { WithTheme } from "../../../shared/utils/helpers";

const Wrapper = (props: CheckboxProps) => (
  <WithTheme>
    <Checkbox {...props} />
  </WithTheme>
);

describe("Checkbox", () => {
  let props: CheckboxProps;

  beforeEach(() => {
    props = {
      checked: false,
      label: "Box",
      onChange: jest.fn(),
      style: {},
    };
  });

  it("should render without an error", () => {
    const { container } = render(<Wrapper {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should rneder props", () => {
    const { queryByText } = render(<Wrapper {...props} />);

    expect(queryByText(props.label)).not.toBeNull();
  });

  it("should checked input", () => {
    const { getByRole } = render(<Wrapper {...props} checked />);

    const input = getByRole("checkbox") as HTMLElement;

    expect(input.className).toContain("checked");
  });

  it("should not checked input", () => {
    const { getByRole } = render(<Wrapper {...props} />);

    const input = getByRole("checkbox") as HTMLElement;

    expect(input.className).toContain("unchecked");
  });

  it("should call onChange function", () => {
    const { getByRole } = render(<Wrapper {...props} />);

    const input = getByRole("checkbox") as HTMLElement;

    const triggeredEvent = fireEvent.click(input);

    expect(triggeredEvent).toBeTruthy();
    expect(props.onChange).toHaveBeenCalled();
  });
});
