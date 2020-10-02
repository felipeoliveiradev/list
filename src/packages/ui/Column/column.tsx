import { Container } from "./style";
import { IColumn } from "./interfaces";
import { IType } from "helper/interfaces";
import React from "react";

export const Column = (props: IColumn & IType) => {
  const { content, style} = props;
  return (
    <Container style={style}>
      {content}
    </Container>
  );
};
