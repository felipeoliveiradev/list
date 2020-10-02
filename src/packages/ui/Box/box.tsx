import { Container } from "./style";
import { IBox } from "./interfaces";
import React from "react";

export const Box = (props: IBox) => {
  return (
    <Container centered={props.centered} style={props.style} >
      {props.child}
    </Container>
  );
};
