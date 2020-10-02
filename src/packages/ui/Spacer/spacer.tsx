import React from "react";
import { Container } from "./style";
import { ISpacer } from "./interfaces";

export const Spacer = (props: ISpacer) => {
  return (
    <Container width={props?.width} height={props.height} />
  );
};
