import React from "react";
import {} from "../assets/css/navbar.css";
import logoPatojos from "../assets/images/logoPatojos.png";

function navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbarMenu">MENU</div>
      </div>
      <div className="navbarRight">
        <img className="imgLogo " src={logoPatojos}></img>
        <div>
          <button className="buttonOrdenar">ORDENAR</button>
          <button className="buttonCocina">COCINA</button>
        </div>
      </div>
    </div>
  );
}

export default navbar;
