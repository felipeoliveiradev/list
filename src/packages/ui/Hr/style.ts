import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.hr`
  width: -webkit-fill-available;
  height: ${pxToRem(10)};
    border: none;
    max-width: 100%;
    background: #00cd69;
    display: flex;
    justify-content: flex-start;
    margin-left: 0;
`;
