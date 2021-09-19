import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button/Button";

const Home = () => {
  const Home = styled.div`
    @media (min-width: 320px) and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 17rem;
    }

    display: grid;
    grid-gap: 0.813rem;
    grid-template-columns: repeat(auto-fit, minmax(253px, 1fr));
    height: 21.25rem;
  `;

  const HomeImage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      border-radius: 50%;
    }
  `;

  const HomeTextContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const HomeText = styled.div`
    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: var(--text);
    }

    h2 {
      font-size: 1.125rem;
      font-weight: 600;
      font-family: var(--titles);
    }

    h2,
    h3 {
      margin: 0.625rem 0;
    }
  `;

  const HomeLinks = styled.div`
    @media (min-width: 320px) and (max-width: 1024px) {
      ul {
        display: flex;
        flex-direction: column;
      }
    }

    ul {
      display: flex;
      justify-content: space-evenly;
    }
  `;

  return (
    <Layout>
      <Head>
        <meta name="description" content="Home - Joan Segovia" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home - Joan Segovia</title>
      </Head>
      <Home>
        <HomeImage>
          <Image
            src="/me_v2.jpg"
            alt="Photo of Joan Segovia"
            loading="lazy"
            width={300}
            height={300}
            placeholder="none"
            objectFit="cover"
          />
        </HomeImage>
        <HomeTextContainer>
          <HomeText>
            <h1>¡Hi! I&apos;m Joan Segovia 👋🏻</h1>
            <h2>
              I&apos;m a Frontend Developer, based in Argentina 🇦🇷. I&apos;m
              also a good design lover, looking foward to get my first
              experience as a dev in the IT world.
            </h2>
            <HomeLinks>
              <ul>
                <li>
                  <Link passHref href="/aboutme">
                    <a>
                      <Button text="About me" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link passHref href="/contact">
                    <a>
                      <Button text="Contact" />
                    </a>
                  </Link>
                </li>
              </ul>
            </HomeLinks>
          </HomeText>
        </HomeTextContainer>
      </Home>
    </Layout>
  );
};

export default Home;
