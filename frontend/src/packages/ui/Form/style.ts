import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.form`
  width: -webkit-fill-available;
  height: auto;

  @media (max-width: ${(props) => pxToRem(props.theme.query.tablet)}) {
    max-width: 100%;
    > div{
      display: grid;
      grid-template-columns: 1fr !important;
    }
  }
`;

