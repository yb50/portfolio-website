import ProjectCard from "../../components/layout/ProjectCard";
import projects from "./projectsData";

export default function ProjectsPage() {
   return (
    <>
      <h1>Projects</h1>
      
      <ul>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
}