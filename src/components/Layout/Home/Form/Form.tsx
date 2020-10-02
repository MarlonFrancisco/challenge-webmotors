import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Select,
  TextInput,
  Typography,
} from "../../../Common";
import {
  Container,
  CheckboxContainer,
  Row,
  Column,
  CloseButton,
  Fields,
  Actions,
} from "./styles";
import { FaMapMarkerAlt, FaTimesCircle } from "react-icons/fa";
import { useTheme } from "styled-components";
import api from "./../../../../shared/services/OnlineChallenge";
import {
  DataResponseMakes,
  DataResponseModels,
  DataResponseVersions,
  Filters,
} from "../../../../shared/@types";
import { YearModels, Mileage, PriceRange } from "./../../../../assets/mock";

type FormProps = {
  onSubmit: (filters: Filters) => void;
};

type FormAvailableValues = {
  makes: DataResponseMakes;
  models: DataResponseModels;
  versions: DataResponseVersions;
};

type Form = {
  location: string;
  make: number;
  model: number;
  version: number;
  yearModel: number;
  mileage: number;
  priceRange: number;
  vehicleStatus: string[];
};

type FieldsPlural = "makes" | "models" | "versions";
type FieldsSingular =
  | "make"
  | "model"
  | "version"
  | "vehicleStatus"
  | "yearModel"
  | "mileage"
  | "priceRange"
  | "location";

const initialFormAvailableValues: FormAvailableValues = {
  makes: [],
  models: [],
  versions: [],
};

const initialForm: Form = {
  vehicleStatus: ["used", "new"],
  location: "",
  make: 0,
  model: 0,
  version: 0,
  yearModel: 0,
  mileage: 0,
  priceRange: 0,
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const [fetching, setFetching] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [availableValues, setAvailableValues] = useState(
    initialFormAvailableValues
  );

  const handleChangeAvailableValues = (field: FieldsPlural, value: any) => {
    setAvailableValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleChangeFormValue = (field: FieldsSingular, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleChangeLocationValue = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeFormValue("location", e.currentTarget.value);
  };

  const handleChangeVehicleStatus = (filter: string, isChecked: boolean) => {
    const value = isChecked
      ? [...form.vehicleStatus, filter]
      : form.vehicleStatus.filter((item) => item !== filter);

    handleChangeFormValue("vehicleStatus", value);
  };

  const handleCleanFilters = () => {
    setForm(initialForm);
  };

  const handleCleanLocation = () => {
    handleChangeFormValue("location", "");
  };

  const getFilters = () => {
    const { makes, models, versions } = availableValues;
    return {
      make: makes.find((make) => make.ID === form.make)?.Name,
      model: models.find((model) => model.ID === form.model)?.Name,
      version: versions.find((version) => version.ID === form.version)?.Name,
      yearModel: YearModels.find((year) => year.ID === form.yearModel)?.Name,
      mileage: Mileage.find((mileage) => mileage.ID === form.mileage)?.Name,
      priceRange: PriceRange.find((price) => price.ID === form.priceRange)
        ?.Name,
    };
  };

  const handleSubmitForm = () => {
    const filters = getFilters();
    onSubmit(filters);
  };

  useEffect(() => {
    setFetching(true);
    api
      .getMakes()
      .then((res) => {
        handleChangeAvailableValues("makes", res.data);
      })
      .catch(console.error)
      .finally(() => setFetching(false));
  }, []);

  useEffect(() => {
    if (form.make) {
      setFetching(true);
      api
        .getModels(form.make)
        .then((res) => {
          handleChangeAvailableValues("models", res.data);
        })
        .catch(console.error)
        .finally(() => setFetching(false));
    }
  }, [form.make]);

  useEffect(() => {
    if (form.model) {
      setFetching(true);
      api
        .getVersions(form.model)
        .then((res) => {
          handleChangeAvailableValues("versions", res.data);
        })
        .catch(console.error)
        .finally(() => setFetching(false));
    }
  }, [form.model]);

  return (
    <Container>
      <CheckboxContainer>
        <Checkbox
          label="Novos"
          checked={form.vehicleStatus.includes("new")}
          onChange={(isChecked) => handleChangeVehicleStatus("new", isChecked)}
        />
        <Checkbox
          label="Usados"
          checked={form.vehicleStatus.includes("used")}
          onChange={(isChecked) => handleChangeVehicleStatus("used", isChecked)}
        />
      </CheckboxContainer>

      <Fields style={{ marginTop: 15 }}>
        <Column size={50}>
          <Row>
            <TextInput
              RightComponent={
                <CloseButton onClick={handleCleanLocation}>
                  <FaTimesCircle color={theme.palette.text.primary} />
                </CloseButton>
              }
              LeftComponent={
                <Row>
                  <FaMapMarkerAlt color={theme.palette.primary.main} />
                  <Typography size={12} style={{ marginLeft: 5 }}>
                    Onde:
                  </Typography>
                </Row>
              }
              value={form.location}
              onChange={handleChangeLocationValue}
            />
            <Select
              items={Mileage}
              value={form.mileage}
              LeftComponent={<Typography size={12}>Raio:</Typography>}
              onChange={(id) => handleChangeFormValue("mileage", id)}
            />
          </Row>

          <Row>
            <Select
              items={YearModels}
              value={form.yearModel}
              placeholder="Ano desejado"
              onChange={(id) => handleChangeFormValue("yearModel", id)}
            />

            <Select
              items={PriceRange}
              value={form.priceRange}
              placeholder="Faixa de preço"
              onChange={(id) => handleChangeFormValue("priceRange", id)}
            />
          </Row>
        </Column>
        <Column size={50}>
          <Row>
            <Select
              items={availableValues.makes}
              LeftComponent={<Typography size={12}>Marca:</Typography>}
              onChange={(id) => {
                setForm((prev) => ({ ...prev, model: 0, version: 0 }));
                handleChangeFormValue("make", id);
              }}
              value={form.make}
            />
            <Select
              items={availableValues.models}
              LeftComponent={<Typography size={12}>Modelo:</Typography>}
              onChange={(id) => {
                setForm((prev) => ({ ...prev, version: 0 }));
                handleChangeFormValue("model", id);
              }}
              value={form.model}
            />
          </Row>

          <Row>
            <Select
              items={availableValues.versions}
              LeftComponent={<Typography size={12}>Versão:</Typography>}
              onChange={(id) => handleChangeFormValue("version", id)}
              value={form.version}
            />
          </Row>
        </Column>
      </Fields>

      <Actions>
        <Button
          variant="text"
          style={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            width: 185,
          }}
        >
          Busca avançada
        </Button>
        <div>
          <Button variant="text" onClick={handleCleanFilters}>
            Limpar filtros
          </Button>
          <Button
            onClick={handleSubmitForm}
            fetching={fetching}
            style={{ fontWeight: 600, fontSize: 18 }}
          >
            Ver ofertas
          </Button>
        </div>
      </Actions>
    </Container>
  );
};

export default Form;
