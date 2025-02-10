import React from "react";
import "../index.css";
import imgsrc from '../images/skill.png'
import SkillBlock from "../component/SkillBlock";
const Skill = () => {
  return (
    <div>
      <h1>Skills</h1>
      <div className="skillcontainer">
        <div className="skillpart">
          <h1 className="main-heading">Profesional Skills</h1>
          <div className="skill-cont">
            <SkillBlock icon={"fa-brands fa-html5 icon"} title={"HTML5"} marks={92}/>
            <SkillBlock icon={"fa-brands fa-css3-alt"} title={"CSS3"} marks={66}/>
            <SkillBlock icon={"fa-brands fa-js"} title={"JAVA SCRIPT"} marks={50}/>
            <SkillBlock icon={"fa-brands fa-react"} title={"React.js"} marks={49}/>
            
          </div>
        </div>
        <div class="img-container">
          <img className='img' src={imgsrc} alt="sorry"/>
        </div>
      </div>
    </div>
  );
};

export default Skill;
