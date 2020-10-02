import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    height: 100%;
    grid-template-areas: "section";
    grid-template-columns: 1fr;
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-template-areas: "section";
    }
`;

export const Section = styled.section`
  background-color:#242c4b;
  grid-area: section;
  display: flex;
  overflow: auto;
`;
