// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import projects from "./projects.json";

const handler = (req, res) => {
  res.status(200).json(projects);
};

export default handler;
