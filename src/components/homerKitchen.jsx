import React from "react";
import logoPatojos from "../assets/images/logoPatojos.png"

function Navbar() {
  return (
    <div className="flex">
      {/* Barra lateral */}
      <aside className="bg-gray-700 w-24 h-screen flex flex-col items-center justify-start">
        <img src={logoPatojos} className="w-16 mt-4" alt="Logo Patojos" /> {/* Establece el tamaño y el margen superior (mt) */}
        <div className="text-center mt-4">
          <button className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-1 rounded mb-2 w-full">
            Botón 1
          </button>
          <button className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-1 rounded w-full">
            Botón 2
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-grow p-0">
        {/* Navbar */}
        <nav className="bg-gray-700 p-4 text-center">
          <h1 className="text-2xl font-bold text-white">COCINA</h1>
        </nav>

        {/* Contenido del resto de la página */}
        {/* Tu contenido aquí */}
      </main>
    </div>
  );
}

export default Navbar;







