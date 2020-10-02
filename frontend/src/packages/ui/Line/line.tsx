import { Container } from "./style";
import { ILine } from "./interfaces";
import { IType } from "helper/interfaces";
import React from "react";

export const Line = (props: ILine & IType) => {
  const { child, style } = props;
  return (
    <Container style={style}>
      {child}
    </Container>
  );
};
