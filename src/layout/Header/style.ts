import { Bars } from "assets/icons";
import { grid, pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundColor};
  height: ${pxToRem(90)};
  position: relative;
  top: 0;
  z-index: 2;
  width: 100%;
  box-shadow: 0px 9px 29px -5px rgba(219, 219, 219, 1);
`;

export const Inner = styled.div`
  ${grid()};
  flex: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 0.905625rem;
  div {
    display: flex;
    justify-content: center;
    width: ${pxToRem(130)};
    text-align: center;
    color: ${(props) => props.theme.colors.black};
    font-size: ${pxToRem(24)};
    font-weight: 700;
    &:nth-child(2) {
      font-size: ${pxToRem(15)};
      background-color: ${(props) => props.theme.colors.black};
      mask-image: url("${Bars}");
      mask-repeat: no-repeat;
      mask-position: center;
      height: ${pxToRem(20)};
      width: ${pxToRem(20)};
      cursor: pointer;
    }
  }
`;
