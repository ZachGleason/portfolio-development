import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiFigma,
} from "react-icons/fi";
import { FaReact, FaHtml5, FaPython, FaCss3, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';





const skillsContent = [
  {
    name: "React",
    iconName: <FaReact style={{ height: 50, width: 50}}/>,

  },
  {
    name: "Javascript",
    iconName: <IoLogoJavascript style={{ height: 50, width: 50}}/>,
  },
  {
    name: "HTML",
    iconName: <FaHtml5 style={{ height: 50, width: 50}}/>,
  },
  {
    name: "Github",
    iconName: <FaGithub style={{ height: 50, width: 50}}/>,
  },
  {
    name: "CSS",
    iconName: <FaCss3  style={{ height: 50, width: 50}}/>,
  },
  {
    name: "Python",
    iconName: <FaPython style={{ height: 50, width: 50}}/>,
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i} >
          <span className="label">{val.name}</span>
          <div>
            {val.iconName}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
