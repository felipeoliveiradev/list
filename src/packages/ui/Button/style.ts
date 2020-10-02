import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  outline: 0;
  background: #00a78e;
  padding: 12px 48px;
  border-radius: 2px;
  color: #fff;
  transition: all ease 0.2s;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;
