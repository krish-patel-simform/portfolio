import { useData } from "../../hooks/useData";
import "./skill.style.css";

export default function Skills() {
  const skills = useData().skills;

  return (
    <div className="skill-container" id={"skills"}>
      <section className="skill-header">
        {/* header */}
        <p className="highlight-text">MY SKILLS</p>
        <p className="heading">Technologies I work with</p>
      </section>
      <section className="skill-technology-list">
        {/* list of technology */}
        {skills.map((skill, index) => {
          return (
            <div key={index} className="skill-technology-card">
              {skill.image ? <img src={skill.image} alt={skill.title} /> : null}
              <p>{skill.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
