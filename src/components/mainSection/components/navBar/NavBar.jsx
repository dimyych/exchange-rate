import React from "react";
import open from "img/sideBar/openSideBarArrow.png";


const NavBar = ({usdEur,handleSideBar}) => {
  return (
    <div className="navBar">
      <img className="navBar__openSideBar" src={open} alt="" onClick={handleSideBar} />
      <div className="navBar__rate">
        {usdEur.map((usdEur, i) => <div key={i} className="navBar__rate-item">
          <p>{usdEur.cc} {usdEur.rate}</p>
        </div>)}
      </div>
    </div>
  );
};

export default NavBar;
