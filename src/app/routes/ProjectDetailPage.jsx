import { useParams, Link } from "react-router-dom";
import projects from "./projectsData";

export default function ProjectDetailPage() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div>
        <Link to="/projects">← Back to Projects</Link>
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Link to="/projects">← Back to Projects</Link>

      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <h2>Tech</h2>
      <ul>
        <li>Frontend: {project.tech.frontend}</li>
        <li>Backend: {project.tech.backend}</li>
        <li>Database: {project.tech.database}</li>
      </ul>

      <h2>Links</h2>
      <ul>
        <li>
          <a href={project.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={project.links.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </li>
      </ul>
    </div>
  );
}
