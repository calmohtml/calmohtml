import styled from "styled-components";

export const EmailContactTitle = styled.div`
  @media (min-width: 320px) and (max-width: 1024px) {
    form {
      input,
      textarea {
        width: 21.188rem;
        margin: 1rem 0;
      }
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  h2 {
    font-size: var(--h2);
    color: var(--grey);
    font-family: var(--text);
  }
  h3 {
    font-size: var(--h3);
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 1rem;

  input,
  textarea {
    background: var(--light-blue);
    color: var(--white);
    border: 0.3rem solid var(--white);
    padding: 1rem;
    border-radius: 1.5rem;
    font-family: var(--titles);
  }

  input {
    margin: 1rem 0;
  }
`;
