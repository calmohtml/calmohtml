import styled from "styled-components";

export const StyledContact = styled.section`
  @media (min-width: 320px) and (max-width: 1024px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    margin: 2rem 0;
  }

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0;
`;

export const EmailContactContainer = styled.section`
  border: 0.2rem solid var(--white);
  border-radius: 0.4rem;
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.9);
  background: var(--light-blue);
`;

export const StartLink = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 4rem 0;

  ul {
    li {
      h3 {
        font-size: $h3;
      }
    }
  }
`;
