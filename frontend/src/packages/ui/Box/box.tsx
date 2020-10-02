import { Container } from "./style";
import { IBox } from "./interfaces";
import React from "react";

export const Box = (prop: IBox) => {
  return (
    <Container {...prop.props}>
      {prop.child}
    </Container>
  );
};
