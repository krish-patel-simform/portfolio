import "./skill.style.css";
import HtmlImage from "../../assets/html.png";
import CssImage from "../../assets/css.png";
import ReactImage from "../../assets/react.png";
import ReactNativeImage from "../../assets/react-native.png";
import JSImage from "../../assets/js.png";
import NodeImage from "../../assets/node.png";

const TECHNOLOGIES = [
  {
    image: ReactImage,
    title: "React",
  },
  {
    image: ReactNativeImage,
    title: "React Native",
  },
  {
    image: NodeImage,
    title: "Node",
  },
  {
    image: JSImage,
    title: "Java Script",
  },
  {
    image: CssImage,
    title: "CSS",
  },
  {
    image: HtmlImage,
    title: "HTML",
  },
];

export default function Skills() {
  return (
    <div className="skill-container">
      <section className="skill-header">
        {/* header */}
        <p className="highlight-text">MY SKILLS</p>
        <p className="heading">Technologies I work with</p>
      </section>
      <section className="skill-technology-list">
        {/* list of technology */}
        {TECHNOLOGIES.map((technology, index) => {
          return (
            <div key={index} className="skill-technology-card">
              <img src={technology.image} alt={technology.title} />
              <p>{technology.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
