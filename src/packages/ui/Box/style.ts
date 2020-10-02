import { IBox } from "./interfaces";
import { fade } from "styles/themes/light/keyframe";
import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
background: rgb(47, 50, 71);
    flex: 1 1 0%;
    padding: 1.875rem 2.125rem;
    min-width: 18.75rem;
    margin-right: 15px;
    margin-bottom: 1rem;
    justify-content: ${(props: IBox) => {
    if(props.centered){
      if(props.centered === "all"){
        return "center";
      } else if(props.centered === "vertical"){
        return "center";
      } else {
        return;
      }
    } else {
      return;
    }
  }};
   align-items: ${(props: IBox) => {
    if(props.centered){
      if(props.centered === "all"){
        return "center";
      } else if(props.centered === "vertical"){
        return "center";
      } else {
        return;
      }
    } else {
      return;
    }
  }};
`;
