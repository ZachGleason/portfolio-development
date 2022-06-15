import React from "react";
import eggmed from '/Users/zach/Desktop/Portfolio/src/assets/eggmed.jpeg'

const experienceContent = [
  {
    year: "   April. 2022 - Present",
    position: " FRONT-END SOFTWARE ENGINEER",
    compnayName: "EGGMED",
    details: [`• Developed reusable UI button components in Javascript to deliver a more efficient product while maintaining functionality`,],
    details2: [`• Worked side by side with a team of seven software engineers, with the common goal of completing a full-stack physician approved  medical application
    `,],
    details3: [`• Contributed and updated to a 3/week Team Standup meeting.`],
    details4: [`• Collaborated closely with designer and implemented functional code using Figma and Shortcut to complete a professional doctor profile UI`],
    details5: [`• Tested mobile and web responsiveness on multiple devices using a simulator while troubleshooting errors to deliver bug free, well documented code 
    `]
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src={eggmed} alt="eggmed" style={{borderRadius: 10, marginTop: -2}} />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font" style={{marginTop: 10}}>{val.details}</p>
          <p className="open-sans-font" style={{marginTop: 10}}>{val.details2}</p>
          <p className="open-sans-font" style={{marginTop: 10}}>{val.details3}</p>
          <p className="open-sans-font" style={{marginTop: 10}}>{val.details4}</p>
          <p className="open-sans-font" style={{marginTop: 10}}>{val.details5}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
