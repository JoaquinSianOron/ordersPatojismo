import React from "react";

function lateral() {
  return (
    <div>
      <div className="grid grid-cols-2">
          {/* Columna 1 con ancho de 512px */}
          <div className="overflow-x-auto flex-grow bg-white sm:w-512 md:w-512 xl:w-512 max-h-[50rem] flex flex-col items-center justify-start pl-147">
            <DataOrdes></DataOrdes>
            <DataOrdes></DataOrdes>
          </div>
          {/* Columna 2 con ancho de 320px */}
          <div className="bg-piel-200 sm:w-320 md:w-320 xl:w-320 max-h-[50rem] flex flex-col items-center justify-start mr-0">
            Contenido de la columna 2 (Ancho: 320px)
            Contenido de la columna 2 (Ancho: 320px)
            Contenido de la columna 2 (Ancho: 320px)
          </div>
        </div>

        {/* Contenido del resto de la página */}
        {/* Tu contenido aquí */}
    </div>
  );

}

export default lateral;