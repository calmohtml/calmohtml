import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button/Button";
import Image from "next/image";
import projects from "./api/projects.json";
import {
  StyledProjects,
  Project,
  ProjectText,
  ProjectMedia,
  ProjectImage,
  ProjectLinks,
  ContactLink,
} from "../styles/ProjectsStyles";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Projects - Joan Segovia" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projects - Joan Segovia</title>
      </Head>
      <h1>Projects</h1>
      <StyledProjects>
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
      </StyledProjects>
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
