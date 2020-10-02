import { IProps } from './interface';
import { pxToRem } from 'helper';
import styled from 'styled-components';

export const Container = styled.button`

    background-color: ${(props: IProps) => {
      switch (props.model) {
        case "dark":
          return "#2b2e43"
        case "error":
          return "#ea1d5d"
        default:
          return "rgb(2, 197, 103)"
      }
    }};
    color: ${(props: IProps) => {
      switch (props.model) {
        case "dark":
          return "#898b96"
          case "error":
          return "#fff"
        default:
          return "rgb(255, 255, 255)"
      }
    }};
    font-weight: 300;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    flex: 1;
    max-width: ${(props: IProps) => {
       switch (props.size) {
        case "small":
          return pxToRem(100);
        case "normal":
          return pxToRem(300);
        case "large":
            return pxToRem(500);
        case "full":
            return;
        default:
          return "rgb(255, 255, 255)"
    }}};
    align-items: center;
    outline: none;
    box-shadow: none;
    border: none;   
`;
