import { IItem, ITags } from "./interfaces";

import { Container } from "./style";
import React from "react";

export const Tags = (props: ITags) => {
  const { items, style } = props;
  return (
    <Container style={style}>
      {items.map((item: IItem) => {
        return (
          <>
            <li>{item.title}{item.number ? `<span>${item.number}</span>`: ""}</li>
          </>
        );
      })}
    </Container>
  );
};
