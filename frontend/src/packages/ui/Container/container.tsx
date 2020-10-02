import { ContainerAll } from "./style";
import { IContainer } from "./interfaces";
import { IType } from "helper/interfaces";
import React from "react";

export const Container = (prop: IContainer & IType) => {
  const { child, style, props} = prop;
  return (
    <ContainerAll style={style} {...props}>
      {child}
    </ContainerAll>
  );
};
