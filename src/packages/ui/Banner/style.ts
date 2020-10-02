import styled, { css } from "styled-components";
import { pxToRem } from "helper";
import { fade } from "styles/themes/light/keyframe";
import {
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const defaultStyleIcon = css`
  font-size: ${pxToRem(24)};
  margin-right: ${pxToRem(10)};
`;

export const MuiAiOutlineCheckCircle = styled(AiOutlineCheckCircle)`
  ${defaultStyleIcon};
  color: #00cd69;
`;

export const MuiAiOutlineWarning = styled(AiOutlineWarning)`
  ${defaultStyleIcon};
  color: #fbb034;
`;

export const MuiAiOutlineCloseCircle = styled(AiOutlineCloseCircle)`
  ${defaultStyleIcon};
  color: #fd5c63;
`;

export const Container = styled.div`
  padding-top: ${pxToRem(0)};
  margin-right: ${pxToRem(10)};
  flex: 1;
  border-radius: ${pxToRem(2)};
  color: #fff;
  animation: ${fade} 0.2s linear forwards;
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    padding: 0 ${pxToRem(28)} 0 ${pxToRem(28)};

    li {
      padding: ${pxToRem(30)} ${pxToRem(10)} ${pxToRem(30)} ${pxToRem(10)};
      h3,
      h4 {
        padding: 0;
        margin: 0;
        line-height: 1.2;
      }
      h3 {
        margin-bottom: ${pxToRem(5)};
        font-weight: 500;
        font-size: ${pxToRem(16)};
      }
      h4 {
        font-weight: 400;
        font-size: ${pxToRem(12)};
        color: #757684;
      }
    }
  }
`;
