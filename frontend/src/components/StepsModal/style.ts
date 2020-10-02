import { fade } from "styles/themes/light/keyframe";
import { pxToRem } from "helper";
import styled, { css } from "styled-components";
import { IStepsStyles, IButton } from "./interfaces";

export const Container = styled.div<IButton>`
  position: fixed;
  width: 100%;
  height: auto;
  z-index: 9;
  max-width: ${pxToRem(400)};
  background: #2f3247;
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(3)};
  transition: all ease 0.2s;
  color: #fff;
  box-shadow: 0px 20px 26px -33px ${(props) => (props.error?.state ? "#fd5c63" : "rgba(0, 205, 105)")};
  animation: ${fade} 0.3s;
  border-bottom: ${pxToRem(10)} solid
    ${(props) => (props.error?.state ? "#fd5c63" : "rgba(0, 205, 105)")};
  padding-bottom: ${pxToRem(30)};
  h3 {
    text-align: center;
    font-size: ${pxToRem(22)};
    color: #fff;
    font-weight: 300;
    margin-top: ${pxToRem(39)};
    margin-bottom: ${pxToRem(39)};
  }
  .containerButton {
    display: flex;
    justify-content: ${(props) =>
      props.disabled ? "flex-end" : "space-between"};
    align-items: center;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  svg {
    transition: all ease 0.2s;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-weight: 200;
  font-size: ${pxToRem(20)};
  line-height: 0;
  letter-spacing: initial;
  padding-top: ${pxToRem(30)};
  padding-bottom: ${pxToRem(30)};
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div {
    outline: none;
  }
`;

export const Button = styled.button<IButton>`
  background: #363951;
  border: none;
  outline: none;
  box-shadow: none;
  border-radius: 3px;
  user-select: none;
  max-width: 107px;
  width: 100%;
  right: 0;
  color: #fff;
  font-weight: 300;
  font-family: "Poppins", sans-serif !important;
  position: relative;
  margin: 18px 1.25rem;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 15px;
  transition: all ease 0.2s;
  animation: ${fade} 0.2s linear;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.16);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.16);
  }

  ${(props) =>
    props.disabled &&
    css`
      display: none;
    `};
`;

export const Steps = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  font-size: ${pxToRem(10)};
  padding-left: ${pxToRem(13)};
  padding-right: ${pxToRem(13)};
  margin-bottom: ${pxToRem(39)};
`;

export const List = styled.li<IStepsStyles>`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  transition: all ease ${(props) => props.theme.animations.afterTransition};
  position: relative;

  div {
    transition: all ease ${(props) => props.theme.animations.transition};
    width: ${(props) => (props.step >= props.index + 1 ? "100%" : "0")};
    height: 100%;
    border-radius: 20px;
    background-color: rgba(0, 205, 105);
    ${(props) =>
      props.error?.map(
        (item) =>
          item.state &&
          css`
            background-color: #fd5c63;
          `
      )};
  }

  span {
    width: 50px;
    height: 50px;
    display: block;
    background: #fd5c63;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${pxToRem(16)};
    font-weight: 600;
    transition: all ease ${(props) => props.theme.animations.afterTransition};
  }

  label {
    margin-top: ${pxToRem(10)};
    color: ${(props) => (props.step >= props.index ? "#fff" : "#7e808d")};
  }

  &:nth-child(1) {
    span {
      background-color: rgba(0, 205, 105);
      color: #fff;
    }

    label {
      color: #fff;
    }
  }
  &:nth-child(even) {
    flex: 1;
    height: 5px;
    background: #fd5c63;
    margin-top: -24px;
    width: 150%;
    margin-left: -10px;
    margin-right: -10px;
    background: #363951;
    z-index: 1;
    border-radius: 20px;

    display: flex;
    align-content: flex-start;
    flex-direction: row;
    justify-content: flex-start;
  }

  &:last-child {
    all: unset;
  }

  &:nth-child(odd) {
    span {
      background-color: ${(props) =>
        props.step >= props.index ? "rgba(0, 205, 105)" : "#363951"};
      color: ${(props) => (props.step >= props.index ? "#fff" : "#7e808d")};

      ${(props) =>
        props.error?.map(
          (item) =>
            item.state &&
            css`
              background-color: ${props.step >= props.index
                ? "#fd5c63"
                : "#363951"}; ;
            `
        )};
    }
  }
`;
