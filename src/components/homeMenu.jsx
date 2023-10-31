import React from "react";
import logoPatojos from "../assets/images/logoPatojos.png";
import CentralSquare from "../components/centralsquare";
import NavbarKitchen from "../components/navbarKitchen";
import Sibebar from "../components/sibebar";
import SquareLeft from "../components/squareLeft";
import DataOrders from "../components/dataOrders";
import DrinkOrders from "../components/drinkOrders";

function navbar() {
  return (
    <div className="flex min-h-screen overflow-y-scrool">
      <div className="w-147">
        <Sibebar />
      </div>
      <main className="w-full">
        <div className="h-61 w-full ">
          <NavbarKitchen />
        </div>

        <div className="flex flex-row justify-items-stretch">
          <div className="flex flex-1 min-h-screen overflow-y-scroll justify-self-stretch  mx-0">
            <DataOrders></DataOrders>
          </div>
          <div className="flex  min-h-screen overflow-y-scroll ml-0 justify-self-end">
            <div className="sm:container mx-auto mr-0">
              <div className="w-279 h-65 bg-D9D9D9 m-5 ">
                <div className="m-5 NumOrden">
                  <DrinkOrders></DrinkOrders>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

{
  /*
<div className="flex">
     
      <nav className="bg-gris-100 h-screen w-61">
      
        <div className="text-center bg-gris-200 h-61 items-center justify-center">
          <div className="font-Lalezar text-3xl text-3sm font-normal text-blanco mt-4">
            HOME
          </div>
        </div>
      </nav>

      <aside className="bg-amarillo h-screen w-147 flex flex-col items-center justify-start">
        <img src={logoPatojos} className="sm-w-104 sm-h-107 md-w-104 h-107 mt-10 m-5" alt="Logo Patojos" />
        <div className="flex flex-col items-center justify-center h-full w-147">
          <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar w-147 py-2 px-1 mt-1/2 rounded mb-5">
            ORDENAR
          </button>
          <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar w-147 py-2 px-1 mt-1/2 rounded">
            COCINA
          </button>
        </div>
      </aside>

     
      <div className="w-2/3 bg-green-200">
        <div className="flex justify-center items-center h-full">
          <DataOrders />
        </div>
      </div>

      <div className="w-320 bg-amarillo">
        <div className="flex justify-center items-center h-full">
          <DataOrders />
        </div>
      </div>
    </div>
    
  );*/
}

export default navbar;
