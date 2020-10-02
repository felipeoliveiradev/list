import styled from "styled-components";
import { pxToRem } from "helper";
import { fade, piscar } from "styles/themes/light/keyframe";
import { IListStyles } from "./interfaces";

export const Container = styled.ul<IListStyles>`
  list-style: none;
  animation: ${fade} 0.2s linear forwards;
  padding-left: ${(props) => (props.padding ? "40px" : "0px")};
  li {
    cursor: default;
    display: flex;
    align-items: center;
    transition: all 0.5s linear;

    div {
      &:nth-child(1) {
        width: ${pxToRem(35)};
        height: ${pxToRem(35)};
        background: #33364a;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: ${pxToRem(2)};
        color: #aaabb2;
        svg {
          color: #aaabb2;
        }
      }
      &:nth-child(2) {
        flex: 1;
        ul {
          list-style: none;
          padding: 0;
          padding-left: ${pxToRem(10)};
          font-weight: 600;
          li {
            font-size: ${pxToRem(12)};
            color: ${(props) => (props.titleColor ? props.titleColor : "#fff")};

            &:nth-child(2) {
              font-size: ${pxToRem(10)};
              color: ${(props) =>
                props.subtitleColor ? props.subtitleColor : "#aaabb2"};
              font-weight: 500;
            }
          }
        }
      }
    }
    &:hover {
      div {
        transition: all 0.5s linear;
        &:nth-child(1) {
          animation: ${piscar} 0.3s linear forwards;

          svg {
            color: #fff;
          }
        }
      }
    }
  }
`;
