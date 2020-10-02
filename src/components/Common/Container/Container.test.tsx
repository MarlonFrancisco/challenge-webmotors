import React from "react";
import { render } from "@testing-library/react";
import Container, { ContainerProps } from "./Container";

const Wrapper = (props: ContainerProps) => <Container {...props} />;

describe("Container", () => {
  let props: ContainerProps & { children: React.ReactNode };

  beforeEach(() => {
    props = {
      maxWidth: "lg",
      children: <p>ContainerComponent</p>,
    };
  });

  it("should render without an error", () => {
    const { container } = render(<Wrapper {...props} />);
    expect(container).toMatchSnapshot();
  });
});
