import { Fragment } from "react";
import { EmailContactTitle, Form } from "./styles";
import Button from "../Button/Button";

const EmailContact = ({ h2, h3 }) => {
  return (
    <Fragment>
      <EmailContactTitle>
        <h2>{h2}</h2>
        <h3>{h3}</h3>
      </EmailContactTitle>
      <Form action="https://formspree.io/f/xayabnbr" method="POST">
        <input type="email" name="_replyto" placeholder="E-mail" />
        <textarea name="message" placeholder="Message"></textarea>
        <Button text="Send" />
      </Form>
    </Fragment>
  );
};

export default EmailContact;
