import { Container } from "./style";
import { ISeparator } from "./interfaces";
import React from "react";

export const Hr = (props: ISeparator) => {
  const { style } = props;
  return <Container style={style} />;
};
