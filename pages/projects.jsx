import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button/Button";
import Image from "next/image";
import projects from "./api/projects.json";

const Projects = () => {
  const Projects = styled.section`
    @media (min-width: 320px) and (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem 0;
    grid-gap: 1rem;
  `;

  const Project = styled.div`
    @media (min-width: 320px) and (max-width: 767px) {
      padding: 1rem 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 1rem 0;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--light-blue);
    border: 0.2rem solid var(--white);
    border-radius: 0.4rem;
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.9);
  `;

  const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    h2 {
      color: var(--grey);
      font-size: var(--h2);
      font-family: var(--text);
    }

    p {
      font-size: var(--h6);
      color: var(--grey);
    }

    h3 {
      font-size: var(--h3);
      margin: 1rem 0;
    }
  `;

  const ProjectMedia = styled.div`
    text-align: center;
  `;

  const ProjectImage = styled.figure`
    @media (min-width: 320px) and (max-width: 767px) {
      img {
        width: 16.313rem;
      }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      img {
        width: 9.75rem;
      }
    }

    img {
      width: 3.25rem;
    }
  `;

  const ProjectLinks = styled.div`
    display: flex;

    a {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      text-decoration: none;
    }
  `;

  const ContactLink = styled.div`
    @media (min-width: 320px) and (max-width: 767px) {
      margin-bottom: 5.313rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
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
        <meta name="description" content="Projects - Joan Segovia" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projects - Joan Segovia</title>
      </Head>
      <h1>Projects</h1>
      <Projects>
        {projects.map((project) => (
          <Project key={project.slug}>
            <ProjectText>
              <h2>{project.title}</h2>
              <p>Tech stack: {project.stack}</p>
              <h3>{project.description}</h3>
            </ProjectText>
            <ProjectMedia>
              <ProjectImage>
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  width={300}
                  height={300}
                  loading="eager"
                  layout="intrinsic"
                  quality={50}
                  placeholder="empty"
                  objectFit="contain"
                />
              </ProjectImage>
            </ProjectMedia>
            <ProjectLinks>
              <a
                href={project.github}
                className="singleProject__link"
                target="_blank"
                rel="noreferrer"
              >
                <Button text="GitHub" />
              </a>
              <a
                href={project.demo}
                className="singleProject__link"
                target="_blank"
                rel="noreferrer"
              >
                <Button text="Demo" />
              </a>
            </ProjectLinks>
          </Project>
        ))}
      </Projects>
      <ContactLink>
        <ul>
          <li>
            <h3>¿Wanna get in touch with me?</h3>
            <Link passHref href="/contact">
              <a>
                <Button text="Let's talk" />
              </a>
            </Link>
          </li>
        </ul>
      </ContactLink>
    </Layout>
  );
};

export default Projects;
