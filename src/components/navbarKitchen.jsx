import React from "react";
import {} from "../assets/css/navbar.css";
import logoPatojos from "../assets/images/logoPatojos.png";

function navbar() {
  return (
    <div>
      
      <div className="navbar">
        <div className="navbarMenu ">COCINA</div>  
      </div>

      <div className="row">
        <div className="col">    

        <div className="row">
          <img className="imgLogo" src={logoPatojos}></img>
          </div>    

          <div className="row">
            <div className="col">
            <button className="buttonOrdenar">ORDENAR</button>
            </div>
            <div className="col">
            <button className="buttonCocina">COCINA</button>
            </div>
          </div>

          <div>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <div className="navbarLeft"/>
          </div>
        </div>
        <div className="col">
          <div className= 'backgroudnRight'/>
          <div className= 'backgrundCenter'/>
        </div>
      </div>

    </div>
  );
}

export default navbar;
