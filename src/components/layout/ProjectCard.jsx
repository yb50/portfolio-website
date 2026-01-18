import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { title, description, tech, links } = project;

  return (
    <div>
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          <li>Frontend: {tech.frontend}</li>
          <li>Backend: {tech.backend}</li>
          <li>Database: {tech.database}</li>
        </ul>
        <p>
          <a href={links.github} target="_blank" rel="noreferrer">Github</a>{" "} | {" "}
          <a href={links.live} target="_blank" rel="noreferrer">Live</a>
        </p>
      </li>

      <Link to={`/projects/${project.id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
}