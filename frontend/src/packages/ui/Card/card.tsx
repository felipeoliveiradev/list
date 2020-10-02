import React from "react";
import { Container} from "./style";
import { ICard } from "./interfaces";
import { BiDotsVerticalRounded } from "react-icons/bi";
export const Card = (props: ICard) => {
  return (
    <Container color={props?.color}>
      <header>
          <ul>
            <li></li>
            <li>{props?.text}</li>
            <li>
              <BiDotsVerticalRounded />
            </li>
          </ul>
      </header>
      <main>
        <h3>{props?.number}</h3>
      </main>
      <footer>
      <span>{props?.subtitle}</span>

      </footer>
    </Container>
  );
};
