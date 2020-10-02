import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: "";
  width:  "auto";

  @media (max-width: ${(props) => pxToRem(props.theme.query.tablet)}) {
    flex-direction: column;
  }
`;
