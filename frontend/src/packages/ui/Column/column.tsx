import { Container } from "./style";
import { IColumn } from "./interfaces";
import { IType } from "helper/interfaces";
import React from "react";

export const Column = (prop: IColumn & IType) => {
  const { child, props} = prop;
  return (
    <Container {...props}>
      {child}
    </Container>
  );
};
