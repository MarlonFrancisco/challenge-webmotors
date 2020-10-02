import styled from "styled-components";

export const SCContainer = styled.div`
  max-width: ${(props: { maxWidth: number }) => props.maxWidth}px;
  margin: 0 auto;
`;
