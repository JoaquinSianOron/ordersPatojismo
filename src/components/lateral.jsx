import React from "react";

function lateral() {
  return (
    <div>
      <aside className="bg-gris-100 sm-w-147 md-w-147 xl-w-147 h-screen flex flex-col items-center justify-start">
        <img src={logoPatojos} className="sm-w-104 sm-h-107 md-w-104 h-107 mt-10 m-5" alt="Logo Patojos" /> {/* Establece el tamaño y el margen superior (mt) */}
        <div className="flex flex-col items-center justify-center h-full w-147" >
          <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded mb-5 w-full">
            ORDENAR
          </button>

          <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded w-full">
            COCINA
          </button>


        </div>
      </aside>
    </div>
  );

}

export default lateral;