import React from "react";
import { Box, Container } from "./styles";
import { ITableDetailProps } from "./interfaces";
import { List } from "packages";

export const TableDetail: React.FC<ITableDetailProps> = ({ configs }) => {
  return (
    <Container>
      {configs?.map((item) => (
        <Box>
          <h1>{item.title}</h1>
          <List {...item.cards} />
        </Box>
      ))}
    </Container>
  );
};
