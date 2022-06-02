import styled from "styled-components";

export const StyledFooter = styled.footer`
  @media (max-width: 640px) {
    display: none;
  }

  margin: 6rem auto;
  width: 90%;
  text-align: center;
  font-family: var(--titles);
  font-size: 1.4rem;

  a {
    text-decoration: none;

    &:hover {
      color: var(--grey);
    }
  }
`;
