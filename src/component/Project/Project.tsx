import { ProjectCard } from "../Card/Card";
import { useData } from "../hooks/useData";
import "./project.style.css";

export default function Project({ id }: { id: string }) {
  const data = useData();
  return (
    <div className="project-container" id={id}>
      <p className="highlight-text">MY PROJECTS</p>
      <p className="heading">Some of my work</p>
      <div className="project-grid-container">
        {data.liveProjects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
