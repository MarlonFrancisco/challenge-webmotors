import React from "react";
import { Vehicle } from "../../../../shared/@types";
import { formatCurrency } from "../../../../shared/utils";
import { Button, Typography } from "../../../Common";
import { ProductCardContainer, ProductCardImage } from "./styles";

type VehicleCardProps = {
  vehicle: Vehicle;
  onReserve: (vehicle: Vehicle) => void;
};

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onReserve }) => {
  return (
    <ProductCardContainer>
      <ProductCardImage src={vehicle.Image} />

      <Typography
        color="secondary"
        size={14}
        style={{ marginTop: 10, marginBottom: 5 }}
      >
        {vehicle.Make} {vehicle.Model}
      </Typography>

      <Typography color="secondary" size={14}>
        {vehicle.Color}
      </Typography>

      <Typography color="secondary" size={14} style={{ marginTop: 10 }}>
        {formatCurrency(Number(vehicle.Price.replace(/,.*/, "")))}
      </Typography>

      <Button
        style={{ width: "60%", margin: "20px auto" }}
        onClick={() => onReserve(vehicle)}
      >
        Reservar
      </Button>
    </ProductCardContainer>
  );
};

export default VehicleCard;
