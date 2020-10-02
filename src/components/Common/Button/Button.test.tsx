import { render } from "@testing-library/react";
import React from "react";
import { WithTheme } from "../../../shared/utils/helpers";
import Button, { ButtonProps } from "./Button";

const Wrapper = (props: ButtonProps) => (
  <WithTheme>
    <Button {...props} />
  </WithTheme>
);

describe("Button", () => {
  let props: ButtonProps & { children: React.ReactNode };

  beforeEach(() => {
    props = {
      fetching: false,
      variant: "contained",
      color: "primary",
      children: <p>ButtonComponent</p>,
    };
  });

  it("should render without an error", () => {
    const { container } = render(<Wrapper {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render Loader component on fetching props is true", () => {
    const { queryByTestId } = render(<Wrapper {...props} fetching />);
    expect(queryByTestId("loader-test")).not.toBeNull();
  });

  it("shouild render children component", () => {
    const { queryByText } = render(<Wrapper {...props} />);

    expect(queryByText("ButtonComponent").innerHTML).not.toBeNull();
  });
});
