import React from "react";
import "../index.css";
const SkillBlock = (props) => {
  return (
    <div className="skillblock">
    <span className="outerspan">
      <span className="skilldetails">
        <i className={props.icon}></i>
        <h5>{props.title}</h5>
      </span>
      <span className="marks">
        <h5>{props.marks}%</h5>
      </span>
    </span>
      <progress className="progress" value={props.marks} max="100"></progress>
    </div>
  );
};

export default SkillBlock;
