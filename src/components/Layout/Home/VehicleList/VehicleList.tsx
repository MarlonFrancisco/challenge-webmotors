import React, { useCallback, useEffect, useState } from "react";
import { Container, ListVehicles } from "./styles";
import api from "./../../../../shared/services/OnlineChallenge";
import VehicleCard from "./VehicleCard";
import { Filters, Vehicle } from "../../../../shared/@types";
import { Button, Typography } from "../../../Common";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "styled-components";
import VehicleNotFound from "./VehicleNotFound";

type VehicleListProps = {
  filters: Filters;
};

const VehicleList: React.FC<VehicleListProps> = ({ filters }) => {
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [disableLoadMoreProducts, setDisableLoadMoreProducts] = useState(false);
  const theme = useTheme();

  const handleLoadMoreProducts = () => setPage(page + 1);

  const handleReserveVehicle = (vehicle: Vehicle) => {
    toast.success("Carro reservado");
  };

  const vehiclesFilter = useCallback(
    (vehicles: Vehicle[]) => {
      const { make, model, version, yearModel, mileage, priceRange } = filters;

      const mileageFormat = Number(mileage?.replace("Km", ""));

      const range = priceRange?.replace(/[R$.]/g, "").split(" - ");

      const minPriceRange = range ? Number(range[0]) : null;
      const maxPriceRange = range ? Number(range[1]) : null;

      return vehicles.filter((vehicle) => {
        if (make && vehicle.Make !== make) return false;
        if (model && vehicle.Model !== model) return false;
        if (version && vehicle.Version !== version) return false;
        if (yearModel && vehicle.YearModel !== parseInt(yearModel))
          return false;
        if (mileageFormat && vehicle.KM > mileageFormat) return false;

        const vehiclePriceFormat = Number(vehicle.Price.replace(/,.*/, ""));

        const priceRangeTest =
          minPriceRange && maxPriceRange
            ? vehiclePriceFormat < minPriceRange ||
              vehiclePriceFormat > maxPriceRange
            : false;

        if (priceRange && priceRangeTest) return false;

        return true;
      });
    },
    [filters]
  );

  const filteredVehicles = useCallback(() => {
    return vehiclesFilter(vehicles);
  }, [vehicles, vehiclesFilter]);

  useEffect(() => {
    setFetching(true);
    api
      .getVehicles(page)
      .then((res) => {
        if (!res.data.length) {
          setDisableLoadMoreProducts(true);
          return;
        }
        setVehicles((prev) => [...prev, ...res.data]);
      })
      .catch(console.error)
      .finally(() => setFetching(false));
  }, [page]);

  return (
    <Container>
      <Typography
        align="left"
        style={{ color: theme.palette.primary.main }}
        weight={700}
        size={20}
      >
        Resultado da busca
      </Typography>
      {!filteredVehicles().length && !fetching ? (
        <VehicleNotFound />
      ) : (
        <>
          <ListVehicles>
            {filteredVehicles().map((vehicle) => (
              <VehicleCard
                vehicle={vehicle}
                key={vehicle.ID}
                onReserve={handleReserveVehicle}
              />
            ))}
          </ListVehicles>

          {!disableLoadMoreProducts && (
            <Button
              fetching={fetching}
              style={{ marginTop: 15 }}
              onClick={handleLoadMoreProducts}
            >
              Carregar mais produtos
            </Button>
          )}
        </>
      )}

      <ToastContainer />
    </Container>
  );
};

export default VehicleList;
