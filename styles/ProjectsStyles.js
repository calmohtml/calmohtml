import styled from "styled-components";

export const StyledProjects = styled.section`
  @media (min-width: 320px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem 0;
  grid-gap: 1rem;
`;

export const Project = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 1rem 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--light-blue);
  border: 0.2rem solid var(--white);
  border-radius: 0.4rem;
  box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.9);
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  h2 {
    color: var(--grey);
    font-size: var(--h2);
    font-family: var(--text);
  }

  p {
    font-size: var(--h6);
    color: var(--grey);
  }

  h3 {
    font-size: var(--h3);
    margin: 1rem 0;
  }
`;

export const ProjectMedia = styled.div`
  text-align: center;
`;

export const ProjectImage = styled.figure`
  @media (min-width: 320px) and (max-width: 767px) {
    img {
      width: 16.313rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      width: 9.75rem;
    }
  }

  img {
    width: 3.25rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;

  a {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    text-decoration: none;
  }
`;

export const ContactLink = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 5.313rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
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
