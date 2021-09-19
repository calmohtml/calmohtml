import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import SingleContact from "../components/SingleContact/SingleContact";
import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import Link from "next/link";
import Button from "../components/Button/Button";
import EmailContact from "../components/EmailContact/EmailContact";

const Contact = () => {
  const Contact = styled.section`
    @media (min-width: 320px) and (max-width: 1024px) {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 1fr;
      margin: 2rem 0;
    }

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0;
  `;

  const StartLink = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 4rem 0;

    ul {
      li {
        h3 {
          font-size: $h3;
        }
      }
    }
  `;

  return (
    <Layout>
      <Head>
        <meta name="description" content="Contact - Joan Segovia" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact - Joan Segovia</title>
      </Head>
      <h1>Contact</h1>
      <Contact>
        <SingleContact
          h2="My CV"
          h3="All the info that you need."
          icon={<FaAddressCard />}
          href="https://drive.google.com/uc?id=1ZZh0Ewx1mKNa92gScpp0akNZ2I4LmUvA&export=download"
        />
        <SingleContact
          h2="LinkedIn"
          h3="Posts of mine, or just another way to get to me."
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/segoviajoan"
        />
        <SingleContact
          h2="GitHub"
          h3="All the projects that I've made so far."
          icon={<FaGithubSquare />}
          href="https://www.github.com/calmohtml"
        />
      </Contact>
      <section>
        <EmailContact h2="Send me a e-mail" h3="Let's talk" />
      </section>
      <StartLink>
        <ul>
          <li>
            <h3>Get back to start</h3>
            <Link passHref href="/">
              <a>
                <Button text="Click here" />
              </a>
            </Link>
          </li>
        </ul>
      </StartLink>
    </Layout>
  );
};

export default Contact;
