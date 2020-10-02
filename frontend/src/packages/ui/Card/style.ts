import { pxToRem } from "helper";
import styled from "styled-components";
import { fade } from "styles/themes/light/keyframe";

export const Container = styled.article`
  min-height: ${pxToRem(100)};
  min-width: ${pxToRem(300)};
  flex: 1;
  display: grid;
  animation: ${fade} 0.2s linear forwards;
  grid-template-areas: 
    "headerArea"
    "mainArea"
    "footerArea"
    ;
    margin-bottom:${pxToRem(15)};
  grid-template-rows: minmax(0, 63px) minmax(0, auto) minmax(0, auto);

    header{
      grid-area: headerArea;
      ul{
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        align-items: center;
        padding: ${pxToRem(30)}  ${pxToRem(34)};
        li{
          &:nth-child(1){
            width: ${pxToRem(10)};
            height: ${pxToRem(10)};
            border-radius: ${pxToRem(10)};
            background: ${(props: any) => props?.color};
          }
          &:nth-child(2){
            font-weight:500;
            margin-left: ${pxToRem(20)};
            color: #fff;
            font-size: ${pxToRem(17)};

          }
          &:nth-child(3){
            flex:1;
            display: flex;
            justify-content: flex-end;
            svg {
              color: #757684;
              font-size: ${pxToRem(20)};
            }
          }
        }
      }
    }
    main {
      grid-area: mainArea;
      margin-left: ${pxToRem(60)};
      display: flex;
      align-items: center;
      padding-bottom: ${pxToRem(10)};
      h3{
        margin: 0;
        padding: 0;
        font-size: ${pxToRem(35)};
        color: #fff;
        font-weight:500;
      }
    }
    footer{
      grid-area: footerArea;
      margin-left: ${pxToRem(60)};
      padding-bottom: ${pxToRem(30)};
      span{
        color: #757684;
        font-size: ${pxToRem(14)};
      }
    }

`;