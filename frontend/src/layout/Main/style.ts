import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    height: 100%;
    grid-template-areas: "aside section";
    grid-template-columns: minmax(0, 100px) 1fr;
    background: #2b2e43;
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-template-areas: "section";
    }
`;

export const Section = styled.section`
  background-color:#2b2e43;
  grid-area: section;
  display: flex;
  overflow: auto;
`;
