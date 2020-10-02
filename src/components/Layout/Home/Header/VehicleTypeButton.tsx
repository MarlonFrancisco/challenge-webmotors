import React from "react";
import { useTheme } from "styled-components";
import { Typography } from "../../../Common";
import { VehicleTypeButtonContainer } from "./styles";

type VehicleTypeButtonProps = {
  title: string;
  prefix: string;
  onSelect: (item: string) => void;
  selected?: boolean;
  LeftComponent?: React.ReactNode;
};

const VehicleTypeButton: React.FC<VehicleTypeButtonProps> = ({
  title,
  prefix,
  selected = false,
  LeftComponent,
  onSelect,
}) => {
  const { palette } = useTheme();

  const handleSelectMenuItem = () => onSelect(title);

  return (
    <VehicleTypeButtonContainer
      selected={selected}
      onClick={handleSelectMenuItem}
    >
      {LeftComponent && LeftComponent}
      <div>
        <Typography color="primary" size={9} align="left">
          {prefix}
        </Typography>
        <Typography
          color="primary"
          style={selected ? { color: palette.primary.main } : {}}
        >
          {title}
        </Typography>
      </div>
    </VehicleTypeButtonContainer>
  );
};

export default VehicleTypeButton;
