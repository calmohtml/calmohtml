import styled from "styled-components";

export const QA = styled.section`
  @media (min-width: 320px) and (max-width: 1024px) {
    width: auto;
    margin: 0.375rem 0;
    height: auto;
  }

  padding: 2.2rem;
  background: var(--light-blue);
  border: 0.2rem solid var(--white);
  border-radius: 0.4rem;
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.9);

  h3 {
    color: var(--grey);
    margin: 0.313rem 0;
    font-size: var(--h3);
    font-family: var(--text);
  }

  h4 {
    font-size: var(--h4);
    font-family: var(--titles);
  }
`;
