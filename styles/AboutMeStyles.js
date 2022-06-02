import styled from "styled-components";

export const AboutMeStyled = styled.div`
  @media (min-width: 320px) and (max-width: 768px) {
    margin-bottom: 0.688rem;
    grid-template-columns: 1fr;
  }

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0;
`;

export const TechnologiesLinks = styled.div`
  @media (min-width: 320px) and (max-width: 768px) {
    margin-bottom: 5.313rem;
  }

  display: flex;
  justify-content: center;
  text-align: center;
  margin: 4rem 0;

  ul {
    li {
      h3 {
        font-size: var(--h3);
      }
    }
  }
`;
