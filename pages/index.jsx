import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button/Button";
import {
  StyledHome,
  HomeImage,
  HomeTextContainer,
  HomeText,
  HomeLinks,
} from "../styles/HomeStyles";

const Home = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Home - Joan Segovia" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home - Joan Segovia</title>
      </Head>
      <StyledHome>
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
      </StyledHome>
    </Layout>
  );
};

export default Home;
