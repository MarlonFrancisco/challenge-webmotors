import React from "react";
import { Spin } from "./styles";

export type LoaderProps = {
  size?: number;
};

const Loader: React.FC<LoaderProps> = ({ size = 30 }) => (
  <Spin data-testid="loader-test" size={size} />
);

export default Loader;
