import { ETextType, IText } from "./interfaces";
import { H1, H2, H3, H4, H5, H6, P, Span } from "./style";
import React, { CSSProperties } from "react";

export const Text = (props: IText) => {
  const { type, text, style } = props;

  return (
    <>
      {text && textTratament(type, text, style)}
    </>
  );
};


const textTratament = (type: string, text: string, styles?: React.CSSProperties) => {
  switch (type) {
    case ETextType.h1:
      return <H1 style={styles}>{text}</H1>;
    case ETextType.h2:
      return <H2 style={styles}>{text}</H2>;
    case ETextType.h3:
      return <H3 style={styles}>{text}</H3>;
    case ETextType.h4:
      return <H4 style={styles}>{text}</H4>;
    case ETextType.h5:
      return <H5 style={styles}>{text}</H5>;
    case ETextType.h6:
      return <H6 style={styles}>{text}</H6>;
    case ETextType.p:
      return <P style={styles}>{text}2</P>;
    case ETextType.span:
      return <Span style={styles}>{text}</Span>
    default:
      return;
  }
}