import React, { useState } from "react";
import { Container, Home as H, Box } from "../../components";
import { Filters } from "../../shared/@types";

type Props = {};

const Home: React.FC<Props> = () => {
  const [filters, setFilters] = useState({});
  const handleSubmitForm = (filters: Filters) => setFilters(filters);

  return (
    <Container maxWidth="lg">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} width="250" alt="logo" />

      <H.Header />

      <Box>
        <H.Form onSubmit={handleSubmitForm} />
      </Box>

      <Box style={{ marginTop: 20 }}>
        <H.VehicleList filters={filters} />
      </Box>
    </Container>
  );
};

export default Home;
