import styled from "styled-components";

export const StyledSingleContact = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2.2rem;
  align-items: center;
  background: var(--light-blue);
  flex-direction: column;
  border: 0.2rem solid var(--white);
  border-radius: 0.4rem;
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.9);
`;

export const StyledSingleContactTitle = styled.div`
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

export const StyledSingleContactImg = styled.div`
  text-align: center;

  i {
    font-size: 3rem;
  }
`;

export const StyledSingleContactLink = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-decoration: none;
`;
