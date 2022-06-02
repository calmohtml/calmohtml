import { StyledFooter } from "./styles";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <StyledFooter>
      Copyright © {getYear} Joan Segovia - Created by{" "}
      <a href="https://github.com/calmohtml">@calmohtml</a>
    </StyledFooter>
  );
};

export default Footer;
