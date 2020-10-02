import { grid, pxToRem } from "helper";
import styled, { css } from "styled-components";
import { IInnerStyles } from './interfaces';
import { left } from "styles/themes/light/keyframe";

export const Container = styled.aside`
  background: #2b2e43;
  height: 100%;
  position: relative;
  top: 0;
  z-index: 2;
  width: 100%;
  grid-area: aside;
  flex-direction: column;
  transition: all 0.3s linear;
  animation: ${left} 0.2s ease-in-out forwards;
  @media (max-width:480px){
    transform: translateX(-100%);
    position: absolute;
  }
`;

export const Inner = styled.div<IInnerStyles>`
  ${grid()};
  flex: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0;
  flex-direction: column;

  ul {
    flex: 1;
    list-style: none;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;

    &:nth-child(1) {
      li {
        ${(props) =>
          (props.location === "/dashboard" &&
            css`
              &:nth-child(1) {
                border-radius: 100%;
                transition: all 0.5s linear;

                li {
                  transition: all 0.5s linear;
                }

                svg {
                  color: #00cd69 !important;
                }

                &:before {
                  content: "";
                  transform: translateX(100%);
                }
              }
            `) ||
          (props.location === "/dashboard/statistics" &&
            css`
              &:nth-child(2) {
                border-radius: 100%;
                transition: all 0.5s linear;

                li {
                  transition: all 0.5s linear;
                }

                svg {
                  color: #00cd69 !important;
                }

                &:before {
                  content: "";
                  transform: translateX(100%);
                }
              }
            `) ||
          (props.location === "/dashboard/projects" &&
            css`
              &:nth-child(3) {
                border-radius: 100%;
                transition: all 0.5s linear;

                li {
                  transition: all 0.5s linear;
                }

                svg {
                  color: #00cd69 !important;
                }

                &:before {
                  content: "";
                  transform: translateX(100%);
                }
              }
            `) ||
          (props.location === "/dashboard/trackings" &&
            css`
              &:nth-child(4) {
                border-radius: 100%;
                transition: all 0.5s linear;

                li {
                  transition: all 0.5s linear;
                }

                svg {
                  color: #00cd69 !important;
                }

                &:before {
                  content: "";
                  transform: translateX(100%);
                }
              }
            `)}
      }
    }

    li {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      transition: all 0.5s linear;

      svg {
        font-size: ${pxToRem(20)};
        color: #7e808d;
      }

      padding: ${pxToRem(10)};
      margin-bottom: ${pxToRem(30)};
      display: flex;
      transition: all 0.5s linear;

      &:before {
        content: "";
        height: 100%;
        width: 10px;
        display: block;
        background: #02c567;
        width: 5px;
        position: absolute;
        left: 10px;
        top: 0;
        left: 5px;
        border-radius: 0 10px 10px 0;
        transition: all 0.3s linear;
        transform: translateX(-100%);
      }

      &:hover {
        border-radius: 100%;
        transition: all 0.5s linear;

        li {
          transition: all 0.5s linear;
        }

        svg {
          color: #00cd69 !important;
        }

        &:before {
          content: "";
          transform: translateX(100%);
        }
      }
    }

    &:nth-child(2) {
      padding-top: 0;
      justify-content: flex-end;
    }
  }
`;
