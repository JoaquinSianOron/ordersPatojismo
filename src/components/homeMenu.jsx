import React from "react";
import logoPatojos from "../assets/images/logoPatojos.png";
import DataOrders from "./dataOrders";
import Kitchen from "../components/homerKitchen"

 

function navbar() {
  return (
    <div className="flex">
      {/* Barra lateral */}
      <aside className="bg-gris-100 sm-w-147 md-w-147 xl-w-147 h-screen flex flex-col items-center justify-start">
        <img src={logoPatojos} className="sm-w-104 sm-h-107 md-w-104 h-107 mt-10 m-5" alt="Logo Patojos" /> {/* Establece el tamaño y el margen superior (mt) */}
        <div className="flex flex-col items-center justify-center h-full w-147" >
          <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded mb-5 w-full">
            ORDENAR
          </button>
          
          <button  className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded w-full">
            COCINA
          </button>
          
 
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-grow p-0">
        {/* Navbar */}
        <nav className="bg-gris-100 items-center justify-center mx-0 flex sm-h-61 md-h-61 ">
          <div className="text-center bg-gris-200 p-0 m-0 h-61 w-168 items-center justify-center">
            <div className="font-Lalezar text-3xl text-3sm font-normal text-blanco mt-4">
              HOME
              </div>
            </div>
        </nav>
        <div className="flex justify-center items-center h-full"> {/* Centrado vertical y horizontal para DataOrders */}
          <DataOrders></DataOrders>
        </div>
      </main>
    </div>
  );
}
export default navbar;
