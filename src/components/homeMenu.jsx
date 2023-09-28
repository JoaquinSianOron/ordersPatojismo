import React from "react";
import {} from "../assets/css/homeMenu.css";
import logoPatojos from "../assets/images/logoPatojos.png";
import DataOrders from "./dataOrders";


function navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbarMenu">MENU</div>
      </div>

      <div className="row">
        <div className="col-1">
          <img className="imgLogo" src={logoPatojos}></img>
          <button className="buttonOrdenar">ORDENAR</button>
          <button className="buttonCocina">COCINA</button>
        </div>

        <div className="col flex-size">
      
      <DataOrders></DataOrders>
        </div>

        <div className="col-3">background 2</div>
      </div>
    </div>
  );
}

export default navbar;
