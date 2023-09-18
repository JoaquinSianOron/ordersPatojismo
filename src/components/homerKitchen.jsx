import React from "react";
import { } from "../assets/css/navbarKitchen.css";
import CeentralSquare from "./centralsquare";
import logoPatojos from "../assets/images/logoPatojos.png";


function navbar() {
  return (
    <div>

      <div className="navbarKitchen">
        <div className="navbarCocina">COCINA</div>
      </div>


      <div className="row">

          <div className="col-1">
            <div className="navbarLeft">
              <img className="imgLogo" src={logoPatojos}></img>
              <button className="buttonOrdenar">ORDENAR</button>
              <button className="buttonCocina">COCINA</button>
            </div>
          </div>

        <div className="col flex-size">
          <div>
            <CeentralSquare>
          
            </CeentralSquare>
          </div> 
        </div>

        <div className="col-3">
          <div className="backgroudnRight">
          <button >dos</button>
          </div>
        </div>
      </div>


    </div>


  );
}




export default navbar;



