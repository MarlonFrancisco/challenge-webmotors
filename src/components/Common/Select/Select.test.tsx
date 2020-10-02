import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Select, { SelectProps } from "./Select";
import { WithTheme } from "../../../shared/utils/helpers";

const Wrapper = (props: SelectProps) => (
  <WithTheme>
    <Select {...props} />
  </WithTheme>
);

describe("Select", () => {
  let props: SelectProps;

  beforeEach(() => {
    props = {
      items: [
        {
          Name: "Test",
          ID: 1,
        },
      ],
      onChange: jest.fn(),
    };
  });

  it("should render without an error", () => {
    const { container } = render(<Wrapper {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render props", () => {
    const { queryByText } = render(
      <Wrapper
        {...props}
        LeftComponent={<p>LeftComponent</p>}
        placeholder="Cores"
      />
    );

    expect(queryByText("Cores")).not.toBeNull();
    expect(queryByText("LeftComponent")).not.toBeNull();
  });

  it("should render option select", () => {
    const { queryByText } = render(<Wrapper {...props} />);

    expect(queryByText("Test")).not.toBeNull();
  });

  it("should call onChange function", () => {
    const { getByText } = render(<Wrapper {...props} />);

    const triggeredEvent = fireEvent.click(getByText("Test"));

    expect(triggeredEvent).toBeTruthy();
    expect(props.onChange).toHaveBeenCalled();
  });
});
