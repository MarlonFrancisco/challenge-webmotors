import React from "react";
import { Typography } from "../../../Common";
import { NotFoundContainer } from "./styles";

type VehicleNotFoundProps = {};

const VehicleNotFound: React.FC<VehicleNotFoundProps> = () => {
  return (
    <NotFoundContainer>
      <Typography size={24} align="left">
        Nenhum veiculo encontrado ):
      </Typography>
    </NotFoundContainer>
  );
};

export default VehicleNotFound;
