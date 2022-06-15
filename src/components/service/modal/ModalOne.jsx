import React from "react";
import { FaGithub } from 'react-icons/fa';

const ModalOne = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main">
            <iframe src="https://www.youtube.com/embed/2OvUf8bh_RE" title="youtube" style={{ width: 890, height: 450}}></iframe>
          </div>
      </div>
      {/* End big image */}

      <div className="description">
      <h3 style={{ display: "inline-block"}}>M.E.R.N Full-Stack</h3>
        <a href="https://github.com/ZachGleason/SportsTeam" target="_blank" style={{marginLeft: 20}}><FaGithub className="inlineStyle" style={{ height: 25, width: 25, color: "black", display: "inline-block", marginBottom: -5}}/></a>
        <p>
        Creating a Full-Stack MERN Application for creating players, deleting, and selecting if they are playing, not playing, and or undecided.
        </p>
      </div>
    </div>
  );
};

export default ModalOne;
