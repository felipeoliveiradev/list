import styled from "styled-components";
import Lottie from "react-lottie";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  background-color: rgb(0 0 0 / 16%);
  transition: all 0.3s linear;
  z-index: 1000 !important;
`;

export const StyledLottie = styled(Lottie)`
  z-index: 10001 !important;
`;
