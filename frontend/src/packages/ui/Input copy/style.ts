import { pxToRem } from "helper";
import styled, { css } from "styled-components";
import { fade } from "styles/themes/light/keyframe";
import { IInputStyles } from "./interfaces";

export const Container = styled.div`
  width: 100%;
`;
export const InputGroup = styled.label<IInputStyles>`
  display: flex;
  flex-direction: column;
  background-color: #2f3247;
  padding-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};
  padding-top: ${pxToRem(10)};
  padding-bottom: ${pxToRem(10)};
  border-radius: ${pxToRem(3)};
  margin-bottom: ${pxToRem(10)};

  span {
    font-size: ${pxToRem(10)};
    font-weight: 600;
    transition: all ease 0.2s;
    color: ${(props) => (props.error ? "#fd5c63" : "#7e808d")};
    text-transform: uppercase;
    margin-bottom: ${pxToRem(5)};
    ${(props) =>
      props.error &&
      css`
        &:last-child {
          animation: ${fade} 0.2s linear;
          color: #fd5c63;
          margin-top: 4px;
        }
      `}
  }

  input {
    background: transparent;
    border: none;
    height: ${pxToRem(20)};
    color: #fff;
    outline: none;
    transition: all ease 0.2s;
    border-bottom: ${pxToRem(1)} dashed
      ${(props) => (props.error ? "#fd5c63" : "#414563")};
    padding-bottom: ${pxToRem(10)};
  }
`;
