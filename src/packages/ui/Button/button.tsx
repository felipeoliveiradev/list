import { Container } from './styles';
import { IButton } from './interface';
import React from 'react';

export const Button = (prop: IButton) => {
  const { text, props } = prop;
  return (
    <Container {...props}>
      {text}
    </Container>
  );
}
