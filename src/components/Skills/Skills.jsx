import "./Skills.css";
import { skills } from "../../constants";

const Skills = () => {
  return (
    <div className="app__skills" id="skills">
      <div className="app__skills-title">
        <h2 className="header__text">Skills</h2>
      </div>
      <div className="app__skills-details">
        {Object.keys(skills).map((key, index) => (
          <div className="app__skills_details-icon" key={key}>
            <img className="skills__icon" src={skills[key]} alt={key} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
