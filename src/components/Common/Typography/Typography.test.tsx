import React from "react";
import { render } from "@testing-library/react";
import Typography, { TypographyProps } from "./Typography";
import { WithTheme } from "../../../shared/utils/helpers";

const Wrapper = (props: TypographyProps) => (
  <WithTheme>
    <Typography {...props} />
  </WithTheme>
);

describe("Typography", () => {
  let props: TypographyProps & { children: string };

  beforeEach(() => {
    props = {
      children: "webmotors",
    };
  });

  it("should render without an error", () => {
    const { container } = render(<Wrapper {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should render props", () => {
    const { queryByText } = render(<Wrapper {...props} />);

    expect(queryByText(props.children)).not.toBeNull();
  });
});
