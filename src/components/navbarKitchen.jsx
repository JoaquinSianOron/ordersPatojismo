import React from "react";
import logoPatojos from "../assets/images/logoPatojos.png";

function navbar() {
  return (
    <aside  >

      {/* Navbar */}
      <nav className="flex bg-gris-100 border-r shadow-sm items-center justify-center mx-0">
       <button className="p-1.5 rounded-lg bg-gris-200 hover:bg-gray-300">
       
       </button>
       <div className=" px-10 flex justify-between items center">
       <div className="text-center bg-gris-200 p-0 m-0 h-61 w-168 items-center justify-center">
          <div className="font-Lalezar text-3xl text-3sm font-normal text-blanco mt-4">
            COCINA
          </div>
       </div>
       </div>
      </nav>
    </aside>
  );
}

export default navbar;
