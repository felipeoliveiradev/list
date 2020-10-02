import styled from "styled-components";
import { IOverlay } from "./interfaces";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(25px);
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  background-color: rgb(0 0 0 / 16%);
  transition: all 0.3s linear;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  position: fixed;
  z-index: 9;
  justify-content: center;
  align-items: center;
  justify-items: center;

  &::before {
    content: "";
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: ${(props: IOverlay) => (props.state ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    backdrop-filter: blur(0.2rem);
    background-color: #2b2e43b3;
    transition: all 0.3s linear;
    z-index: 9;
  }
`;
