import { fonts, pxToRem } from "helper";
import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
${fonts("Nunito", "woff2")};

 #root{
   position: relative !important;
   width: 100%;
   display: flex;
  flex-direction: column;

  h1, h2, h3, h4, h5, h6, span, label, li, ul {
    user-select: none;
  }
 }

 * {
  font-family: 'Poppins', sans-serif !important;
 }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: auto;
    font-family: 'Poppins', sans-serif !important;
    scroll-behavior: smooth;
    /* transition: all 0.3s linear !important; */
  }
  .Toastify__toast-container--bottom-center {
    font-family: 'Poppins', sans-serif !important;
    font-weight: 400;
    font-size: ${pxToRem(14)} !important;
  }
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
      -webkit-text-fill-color: #fff;
      -webkit-box-shadow: 0 0 0px 1000px #2f3247 inset;
  }
`;

export const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 4px;
  }

  .Toastify__toast-body {
    font-family: "Poppins", sans-serif !important;
  }

  .Toastify__progress-bar--animated {
    border-radius: 0px 0px 4px 4px;
  }
`;
