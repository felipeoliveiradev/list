import { Container } from "./style";
import React from "react";

export const Layout: React.FC = (props: any) => {
  const { children, style} = props
  return (
    <Container style={style}>
      {children}
    </Container>
  );
};
