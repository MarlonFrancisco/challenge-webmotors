import styled from "styled-components";
import { Theme } from "./../../../shared/@types";

export const Container = styled.div`
  display: flex;
  border: 1px solid
    ${(props: { theme: Theme }) => props.theme.palette.text.primary};
  padding: 6px;
  flex-basis: 100%;
  height: 30px;
  align-items: center;
  position: relative;
`;

export const SelectButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: none;
  background: none;
`;

export const SelectBody = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  border: 1px solid #b4a6a0;
  border-radius: 3px;
  display: ${({ open }: { open: boolean }) => (open ? "block" : "none")};
  z-index: 1;
`;

export const SelectItem = styled.button`
  border: none;
  background: #fff;
  padding: 10px 16px;
  font-size: 0.875rem;
  width: 100%;
  text-align: left;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};

  &:hover {
    background: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
    color: #fff;
  }
`;
