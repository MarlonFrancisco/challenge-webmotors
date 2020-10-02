import React from "react";
import { render } from "@testing-library/react";
import Box, { BoxProps } from "./Box";

const Wrapper = (props: BoxProps) => <Box {...props} />;

describe("Box", () => {
  let props: BoxProps & { children: React.ReactNode };

  beforeEach(() => {
    props = {
      children: <p>BoxComponent</p>,
    };
  });

  it("should render without an error", () => {
    const { container } = render(<Wrapper {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render props", () => {
    const { getByText } = render(<Wrapper {...props} />);
    expect(getByText("BoxComponent").innerHTML).toEqual("BoxComponent");
  });
});
