import React from "react";
import { Spin } from "./styles";

type LoaderProps = {
  size?: number;
};

const Loader: React.FC<LoaderProps> = ({ size = 30 }) => <Spin size={size} />;

export default Loader;
