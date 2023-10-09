import React from "react";
import logoPatojos from "../assets/images/logoPatojos.png"

function Navbar() {
  return (
    <div className="flex">
      {/* Barra lateral */}
      <aside className="bg-gris-100 sm:w-147 md:w-147 xl:w-147 h-screen flex flex-col items-center justify-start">
        <img src={logoPatojos} className="sm-w-104 sm-h-107 md-w-107 h-107 mt-10 m-5" alt="Logo Patojos" /> {/* Establece el tamaño y el margen superior (mt) */}
        <div className="flex flex-col items-center justify-center h-screen w-147" >
          <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded mb-5 w-full">
            ORDENAR
          </button>
          <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded w-full">
            COCINA
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-grow ">
        {/* Navbar */}
        <nav className="bg-gris-100 items-center justify-center mx-0 flex sm-h-61 md-h-61 ">
          <div className="text-center bg-gris-200 p-0 m-0 h-61 w-168 items-center justify-center">
            <div className="font-Lalezar text-3xl text-3sm font-normal text-blanco mt-4">
              COCINA
              </div>
            </div>
        </nav>

        {/* Fila con dos columnas */}
      <div className="flex">
    {/* Columna 1 con ancho de 512px */}
    <div className=" flex-grow bg-white sm:w-512 md:w-512 xl:w-512 h-screen flex flex-col items-center justify-start">
      <div className="flex items-center justify-center bg-gris-200 w-96 h-28 sm:w-full md:w-72 lg:w-96 xl:w-96 mt-10 ">
      Contenido de la columna 1 (Ancho: 512px)
        </div>
    
    </div>

    {/* Columna 2 con ancho de 320px */}
    <div className="bg-piel-200 sm:w-320 md:w-320 xl:w-320 h-screen flex flex-col items-center justify-start mr-0">
      Contenido de la columna 2 (Ancho: 320px)
    </div>
      </div>

        {/* Contenido del resto de la página */}
        {/* Tu contenido aquí */}
      </main>
    </div>
  );
}

export default Navbar;



/*no atualizar el main(si es importante) package.json*/


