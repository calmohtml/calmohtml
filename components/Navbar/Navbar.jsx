import Image from "next/image";
import NavLink from "../NavLinks/NavLink";
import {
  Nav,
  NavPictureContainer,
  NavLinkHome,
  NavLinkText,
  NavLinksContainer,
} from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <NavPictureContainer>
        <Image
          src="/me_v2.jpg"
          alt="Photo of Joan Segovia"
          width={70}
          height={70}
          loading="eager"
          layout="intrinsic"
          quality={50}
          placeholder="empty"
          objectFit="cover"
        />
        <NavLinkHome passHref href="/">
          <NavLinkText>Joan Segovia</NavLinkText>
        </NavLinkHome>
      </NavPictureContainer>
      <NavLinksContainer>
        <NavLink text="Me" redirect="/aboutme" />
        <NavLink text="Projects" redirect="/projects" />
        <NavLink text="Contact" redirect="/contact" />
      </NavLinksContainer>
    </Nav>
  );
};

export default Navbar;
