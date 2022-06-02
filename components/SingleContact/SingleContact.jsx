import {
  StyledSingleContact,
  StyledSingleContactTitle,
  StyledSingleContactImg,
  StyledSingleContactLink,
} from "./styles";
import Button from "../Button/Button";

const SingleContact = ({ h2, h3, icon, href }) => {
  return (
    <StyledSingleContact>
      <StyledSingleContactTitle>
        <h2>{h2}</h2>
        <h3>{h3}</h3>
      </StyledSingleContactTitle>
      <StyledSingleContactImg>
        <i>{icon}</i>
      </StyledSingleContactImg>
      <StyledSingleContactLink>
        <a href={href} target="_blank" rel="noreferrer">
          <Button text="Link" />
        </a>
      </StyledSingleContactLink>
    </StyledSingleContact>
  );
};

export default SingleContact;
