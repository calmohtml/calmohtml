import styled from "styled-components";
import { Fragment } from "react";
import Button from "../Button/Button";

const EmailContact = ({ h2, h3 }) => {
  const EmailContactTitle = styled.div`
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
    }
    h3 {
      font-size: var(--h3);
    }
  `;

  const Form = styled.form`
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    input,
    textarea {
      background: var(--light-blue);
      color: var(--white);
      border: 0.3rem solid var(--white);
      padding: 1rem;
      border-radius: 1.5rem;
    }

    input {
      width: 30rem;
      margin: 1rem 0;
    }
  `;

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
