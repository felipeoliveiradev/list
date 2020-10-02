import { Container, Section } from "./style";

import { IMain } from "./interfaces";
import React from "react";

export const MainApp = (props: IMain) => {
  const {children} = props;
  return (
    <Container>
    <Section>
      {children}
    </Section>
    </Container>
  );
};
