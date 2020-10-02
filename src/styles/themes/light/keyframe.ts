import { keyframes } from "styled-components";

export const left = keyframes`
  0%{
    transform: translateX(-100%);
    opacity: 0;
  }

  50%{
    opacity: 0;
  }

  100%{
    transform: translateX(0);
    opacity: 1;
  }
`;
export const right = keyframes`
  0%{
    transform: translateX(100%);
    opacity: 0;
  }

  50%{
    opacity: 0;
  }

  100%{
    transform: translateX(0);
    opacity: 1;
  }
`;

export const fade = keyframes`
  0%{
    filter: blur(1rem);
    opacity: 0;
  }

  25% {
    filter: blur(0.8rem);
    opacity: 0.2
  }

  50% {
    filter: blur(0.6rem);
    opacity: 0.4
  }

  75% {
    filter: blur(0.4rem);
    opacity: 0.6;
  }

  100%{
    filter: blur(1);
    opacity: 1;
  }
`;


export const piscar = keyframes`
  0%{
    background: #33364a;
  }
  30%{
    background: #00cd69;
  }
  85%{
    background: #33364a;
  }

  100%{
    background: #00cd69;
  }
  
`;
