import React from "react";
import {
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiGithub />,
    link: "https://github.com/ZachGleason",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/zachgleason000/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
