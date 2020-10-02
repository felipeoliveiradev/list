import { Button } from "../Button/button";
import { Container } from "./style";
import { IForm } from "./interfaces";
import Input from "../Input/input"
import React from "react";

export const Form = (prop: IForm) => {
  const {inputs, props, content} =  prop;
  return (
    <Container {...props}>
      {inputs.map(input => <Input {...input} />)}
      {content}
    </Container>
  );
};

