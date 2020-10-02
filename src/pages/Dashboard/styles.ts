import { pxToRem } from "helper/pxToRem/pxToRem";
import styled from "styled-components";
export const Container = styled.div`
  flex:1;
  display: grid;
  background-color:#2b2e43;
  grid-template-areas: 'signOut';
  grid-template-columns: 1fr;
  align-items:center;
  justify-items: center;

`;

export const SignUp = styled.aside`
  grid-area: signUp;
  width: 100%;
`;

export const SignOut = styled.section`
  flex:1;
  padding: ${pxToRem(20)};
  display: flex;
  grid-area: signOut;
`;
export const Form = styled.form`
  display: flex;
  flex:1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const WrapperInput = styled.label`
  position: relative;
  background: #2f3247;
  padding: ${pxToRem(16)};
  max-width: ${pxToRem(600)};
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content:flex-start;
  align-items:center;
  padding-left:${pxToRem(20)};
  border-radius:${pxToRem(20)};
  svg{
    color: #a7a9ac;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  padding-left:${pxToRem(10)};
  font-family: 'Poppins', sans-serif;
  font-size: ${pxToRem(16)};
  font-weight: 300 !important;
  color: #fff;
  flex: 1;
  &:placeholder{
    outline: none;
    background: transparent;
    font-family: 'Poppins', sans-serif;
    font-weight: 300 !important;
    font-size: ${pxToRem(20)};
  }
`;

export const Button = styled.button`
  padding: 1.0rem;
  border:none;
  position: absolute;
  right:0;
  box-shadow: none;
  outline: none;
  background: #00cd69;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  font-size: ${pxToRem(16)};
  border-radius:${pxToRem(100)};
  display: flex;
  transition: all 0.5s linear;
  svg{
    font-size: ${pxToRem(25)};
    color: #fff
  }

  &:hover{
    transform: scale(1.2);
    transition: all 0.5s linear;
  }
`;