import React from "react";
import { Container } from "./style";
import { IList, IItem } from "./interfaces";

export const List = (props: IList) => {
  const { items, subtitleColor, titleColor, padding } = props;
  return (
    <Container
      titleColor={titleColor}
      padding={padding}
      subtitleColor={subtitleColor}
    >
      {items.map((item: IItem) => {
        return (
          <>
            <li>
              <div>{item?.icon}</div>
              <div>
                <ul>
                  <li>{item?.title}</li>
                  <li>{item?.subtitle}</li>
                </ul>
              </div>
            </li>
            <br />
          </>
        );
      })}
    </Container>
  );
};
