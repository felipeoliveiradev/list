import { fade, piscar } from "styles/themes/light/keyframe";

import { IListStyles } from "./interfaces";
import { pxToRem } from "helper";
import styled from "styled-components";

export const Container = styled.ul<IListStyles>`
  list-style: none;
  animation: ${fade} 0.2s linear forwards;
  display: flex;
  justify-content: flex-start;
  width: -webkit-fill-available;
  padding: 0;
  margin-left: -${pxToRem(10)};
  li {
    transform: scale(0.7);
    transition: all 0.3s linear 0s;
      background: rgb(0, 205, 105);
      padding: 0.3rem 0.5rem;
      border-radius: 0.1875rem;
      font-weight: 600;
      color: rgb(255, 255, 255);
  }
`;
