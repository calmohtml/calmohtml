import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  @media (min-width: 320px) and (max-width: 639px) {
    justify-content: center;
    display: flex;
  }

  display: flex;
  margin: 1rem 0;
`;

export const NavPictureContainer = styled.div`
  @media (min-width: 320px) and (max-width: 639px) {
    display: flex;
    justify-content: center;
  }

  flex: 1 1;
  display: flex;
  align-items: center;

  img {
    width: 5.5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0.3rem solid var(--white);
    object-fit: cover;
  }
`;

export const NavLinkHome = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const NavLinkText = styled.h1`
  align-items: center;
  margin: 0 1rem;
  font-size: 1.5rem;
  letter-spacing: -0.065rem;
  font-family: var(--text);
`;

export const NavLinksContainer = styled.ul`
  @media (min-width: 320px) and (max-width: 639px) {
    overflow: hidden;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: var(--blue);
    border: 0.3rem solid var(--white);
    border-radius: 1rem 1rem 0 0;
    bottom: 0;
    border-bottom: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
