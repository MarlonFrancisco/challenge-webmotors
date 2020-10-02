import React, { useState } from "react";
import { Container, HeaderContainer } from "./styles";
import VehicleTypeButton from "./VehicleTypeButton";
import { FaMotorcycle, FaCarSide } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Button } from "../../../Common";

type HeaderProps = {};

const MenuItems = [
  {
    title: "CARROS",
    icon: FaCarSide,
  },
  {
    title: "MOTOS",
    icon: FaMotorcycle,
  },
];

const Header: React.FC<HeaderProps> = () => {
  const { palette } = useTheme();
  const [menuSelected, setMenuSelected] = useState("CARROS");

  const handleSelectItem = (item: string) => setMenuSelected(item);
  return (
    <HeaderContainer>
      <Container>
        {MenuItems.map((item) => {
          const { icon: ICon, title } = item;
          const selected = menuSelected === title;
          return (
            <VehicleTypeButton
              key={title}
              title={title}
              prefix="COMPRAR"
              LeftComponent={
                <ICon
                  color={selected ? palette.primary.main : palette.text.primary}
                  size={20}
                  style={{ marginRight: 10 }}
                />
              }
              onSelect={handleSelectItem}
              selected={selected}
            />
          );
        })}
      </Container>

      <Button variant="outlined" color="secondary" style={{ fontWeight: 600 }}>
        Vender meu carro
      </Button>
    </HeaderContainer>
  );
};

export default Header;
