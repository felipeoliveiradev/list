import { IProps } from "./interfaces";
import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    width: auto;
    max-width: ${(props: IProps) => {
      switch (props?.size) {
        case "small":
          return pxToRem(300);
        case "medium":
            return pxToRem(500);   
        case "large":
              return pxToRem(700);     
        default:
          return;
      }
    }};
    justify-content: ${(props: IProps) => {
    if (props.centered) {
      if (props.centered === "all") {
        return "center";
      } else if (props.centered === "vertical") {
        return "center";
      } else {
        return;
      }
    } else {
      return;
    }
  }};
   align-items: ${(props: IProps) => {
    if (props.centered) {
      if (props.centered === "all") {
        return "center";
      } else if (props.centered === "vertical") {
        return "center";
      } else {
        return;
      }
    } else {
      return;
    }
  }};
  @media (max-width: ${(props) => pxToRem(props.theme.query.tablet)}) {
    max-width: 100%;
  }
`;
