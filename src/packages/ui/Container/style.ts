import { pxToRem } from "helper";
import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  width: auto;
  max-width: auto;
  min-width: auto;
  @media (max-width: ${(props) => pxToRem(props.theme.query.tablet)}) {
    max-width: 100%;
  }
`;
