import { ContainerAll } from "./style";
import { IContainer } from "./interfaces";
import { IType } from "helper/interfaces";
import React from "react";

export const Container = (props: IContainer & IType) => {
  const { child, style} = props;
  return (
    <ContainerAll style={style}>
      {child}
    </ContainerAll>
  );
};
