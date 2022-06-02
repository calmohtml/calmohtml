import styled from "styled-components";

export const StyledHome = styled.div`
  @media (min-width: 320px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 17rem;
  }

  display: grid;
  grid-gap: 0.813rem;
  grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
  height: 21.25rem;
`;

export const HomeImage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    border-radius: 50%;
  }
`;

export const HomeTextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HomeText = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: var(--text);
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 600;
    font-family: var(--titles);
  }

  h2,
  h3 {
    margin: 0.625rem 0;
  }
`;

export const HomeLinks = styled.div`
  @media (min-width: 320px) and (max-width: 1024px) {
    ul {
      display: flex;
      flex-direction: column;
    }
  }

  ul {
    display: flex;
    justify-content: space-evenly;
  }
`;
