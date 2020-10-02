import React, { useState, useRef, useEffect, memo } from "react";
import { Typography } from "../Typography";
import { Container, SelectBody, SelectItem, SelectButton } from "./styles";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useTheme } from "styled-components";

type Option = { Name: string; ID: number };

export type SelectProps = {
  LeftComponent?: React.ReactNode;
  items: Option[];
  onChange: (id: number) => void;
  value?: number;
  placeholder?: string;
};

const Select: React.FC<SelectProps> = ({
  LeftComponent,
  items,
  onChange,
  value,
  placeholder,
}) => {
  const theme = useTheme();
  const refContainer = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  const handleChangeSelectStatus = (status: boolean) => setOpen(status);

  const handleSelectItem = (item: Option) => {
    handleChangeSelectStatus(false);
    onChange(item.ID);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (open && !refContainer.current?.contains(element)) {
        handleChangeSelectStatus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <Container ref={refContainer as React.MutableRefObject<HTMLDivElement>}>
      <SelectButton onClick={() => handleChangeSelectStatus(!open)}>
        <div style={{ display: "flex" }}>
          {LeftComponent && LeftComponent}
          <Typography size={12} color="secondary" weight={600}>
            {items.find((item) => item.ID === value)?.Name ??
              placeholder ??
              "Todos"}
          </Typography>
        </div>

        {open ? (
          <FaCaretDown color={theme.palette.text.secondary} />
        ) : (
          <FaCaretUp color={theme.palette.text.secondary} />
        )}
      </SelectButton>

      <SelectBody className="select__body" open={open}>
        {!!items.length && (
          <SelectItem
            onClick={() => handleSelectItem({ Name: "Todos", ID: 0 })}
          >
            Todos
          </SelectItem>
        )}
        {items.map((item) => (
          <SelectItem key={item.ID} onClick={() => handleSelectItem(item)}>
            {item.Name}
          </SelectItem>
        ))}
        {!items.length && (
          <SelectItem onClick={() => handleChangeSelectStatus(false)}>
            Nenhum valor disponivel
          </SelectItem>
        )}
      </SelectBody>
    </Container>
  );
};

export default memo(Select);
