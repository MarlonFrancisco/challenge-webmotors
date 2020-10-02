import React from "react";
import { render } from "@testing-library/react";
import Loader, { LoaderProps } from "./Loader";
import { WithTheme } from "../../../shared/utils/helpers";

const Wrapper = (props: LoaderProps) => (
  <WithTheme>
    <Loader {...props} />
  </WithTheme>
);

describe("Loader", () => {
  let props: LoaderProps;

  beforeEach(() => {
    props = {};
  });

  it("should render without an error", () => {
    const { container } = render(<Wrapper {...props} />);
    expect(container).toMatchSnapshot();
  });
});
