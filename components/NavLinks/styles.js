import styled from "styled-components";

export const ListItem = styled.li`
  @media (min-width: 320px) and (max-width: 479px) {
    margin: 1rem 0.375rem;
    text-align: center;
    border-bottom: 0.1rem solid var(--white);
    padding: 1rem 0.313rem;
    width: 33%;

    a {
      h4 {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 480px) and (max-width: 639px) {
    margin: 1.063rem 0.188rem;
    text-align: center;
    border-bottom: 0.1rem solid var(--white);
    padding: 1rem 0.188rem;
    width: 25%;

    a {
      h4 {
        font-size: var(--h4);
      }
    }
  }

  margin: 0 1rem;

  a {
    text-decoration: none;
    border: 1px solid red;

    h4 {
      color: var(--white);
      font-size: 1.5rem;
    }
  }
`;
