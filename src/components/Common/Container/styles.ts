import styled from "styled-components";

export const SCContainer = styled.div<{ maxWidth: number }>`
  max-width: ${(props) => props.maxWidth}px;
  margin: 0 auto;
`;
