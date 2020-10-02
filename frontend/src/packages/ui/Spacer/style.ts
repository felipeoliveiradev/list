import styled from "styled-components";
import { pxToRem } from "helper/pxToRem/pxToRem";
import { ISpacer } from "./interfaces";

export const Container = styled.div<ISpacer> `
  display: flex;
  width: ${(props: any) => props?.width ? props.width : pxToRem(15)};
  height: ${(props: any) => props?.height ? props.height : pxToRem(15)};
`;
