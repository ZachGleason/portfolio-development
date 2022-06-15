import React from "react";
import { Link } from "react-router-dom";
// logo name
const logo = "dark";
const logo2 = "light";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link to="/regular">
          <img className="logo_dark" src={`https://cdn-icons.flaticon.com/png/512/5671/premium/5671194.png?token=exp=1655239864~hmac=fd72a6c5a66c248810fa3296678472e1`} alt="icon" style={{ height: 40}}/>
          <img
            className="logo_light"
            src={`https://cdn-icons.flaticon.com/png/512/5671/premium/5671194.png?token=exp=1655239864~hmac=fd72a6c5a66c248810fa3296678472e1`} 
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
