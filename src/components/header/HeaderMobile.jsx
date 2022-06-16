import React from "react";
import { Link } from "react-router-dom";
import logos from '../../assets/logo.png';
// logo name
const logo = "dark";
const logo2 = "light";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img className="logo_dark" src={logos} alt="icon" style={{ height: 40}}/>
          <img
            className="logo_light"
            src={logos} 
            style={{ height: 40}}
            alt="brand"
          />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
