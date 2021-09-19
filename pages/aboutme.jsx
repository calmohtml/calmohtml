import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Section from "../components/Section/Section";
import Link from "next/link";
import Button from "../components/Button/Button";

const AboutMe = () => {
  const AboutMe = styled.div`
    @media (min-width: 320px) and (max-width: 768px) {
      margin-bottom: 0.688rem;
      grid-template-columns: 1fr;
    }

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0;
  `;

  const TechnologiesLinks = styled.div`
    @media (min-width: 320px) and (max-width: 768px) {
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

  return (
    <Layout>
      <Head>
        <meta name="description" content="About me - Joan Segovia" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About me - Joan Segovia</title>
      </Head>
      <h1>About me</h1>
      <AboutMe>
        <Section
          h3="¿Who are you?"
          h4="I'm Joan, a Frontend Developer trying to get into the labor market, in
          search of my first experience."
        />
        <Section
          h3="Tell me something about you."
          h4="Since at 16 I found web development, I love creating projects or
            pages, looking to keep learning."
        />
        <Section
          h3="¿Where did you learn to code?"
          h4="Through courses in Platzi and Digital House, looking for videos on
            YouTube, or simply consulting the search engine."
        />
        <Section
          h3="¿Would you like to learn something else?"
          h4="I want to continue deepening web development, but I also admit that
            I am fascinated by Computer Security and Ethical Hacking."
        />
        <Section
          h3="¿Any goal in the short term?"
          h4="The first thing is to get work as dev and be able to contribute
            value to the work in which I am."
        />
        <Section
          h3="¿And in the long term?"
          h4="I would love to create a development-related company. It sounds
            ambitious, and surely late years in doing so. But first to achieve
            it, you have to dream it."
        />
      </AboutMe>
      <TechnologiesLinks>
        <ul>
          <li>
            <h3>Here&apos;s what I&apos;ve made so far</h3>
            <Link passHref href="/projects">
              <a>
                <Button text="My projects" />
              </a>
            </Link>
          </li>
        </ul>
      </TechnologiesLinks>
    </Layout>
  );
};

export default AboutMe;
