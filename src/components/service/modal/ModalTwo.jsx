import React from "react";
import { FaGithub } from 'react-icons/fa';

const ModalTwo = () => {
  return (
  <div>
    <div className="popup_informations">
      <div className="image">
        <div
          className="main"
          style={{
            backgroundImage: `url(${'https://user-images.githubusercontent.com/95555052/161155910-f0ca577e-4860-4e47-ad5b-48ed7a451a54.png'})`,
            width: "108%"
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3 style={{ display: "inline-block", fontSize: 25}}>Travel Front-End Design</h3>
        <a href="https://github.com/ZachGleason/travel_website" target="_blank" style={{marginLeft: 20}}><FaGithub style={{ height: 25, width: 25, color: "black", display: "inline-block", marginBottom: -5}}/></a>
        <p style={{ fontSize: 20, marginTop: -15}}>
          A minimal design for a travel website, built using HTML, CSS, and Bootstrap!
        </p>
      </div>
    </div>
    <div>
    <div >
        <iframe src="https://www.youtube.com/embed/7MuI2ed9TJE"  title="youtube" style={{ width: 890, height: 450}}></iframe>
        <h3 style={{ display: "inline-block", fontSize: 25}}>Succulent Shop Front-End Design </h3>
        <a href="https://github.com/ZachGleason/SucculentShop" target="_blank" style={{marginLeft: 20}}><FaGithub style={{ height: 25, width: 25, color: "black", display: "inline-block", marginBottom: -5}}/></a>
        <p style={{ fontSize: 20}}>
          A simple design for an ecommerce store selling Succulents!
        </p>
      </div>
    </div>
  </div>
  );
};

export default ModalTwo;
