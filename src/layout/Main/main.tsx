import { Container, Section } from "./style";

import { Aside } from "layout/Aside/aside";
import { Aut } from "./aut";
import React from "react";

export const Main: React.FC = ({ children }) => {
  return (
    <>
      <Aut />
      <Container>
        <Aside />
        <Section>{children}</Section>
      </Container>
    </>
  );
};
