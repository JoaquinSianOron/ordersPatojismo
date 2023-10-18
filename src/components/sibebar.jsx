import React from 'react'
//icons

import logoPatojos from "../assets/images/logoPatojos.png";

const sibebar = () => {
    return (
        <>
            <div className="bg-gris-100 h-full fixed lg:static w-147 left-0 top-0">

                <div className='flex flex-col items-center justify-center flex-grow'>
                    <img src={logoPatojos} className="sm-w-104 sm-h-107 md-w-104 h-107 mt-10 m-5" alt="Logo Patojos" />

                </div>
                <div className='flex flex-col'>
                    <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded mb-5 w-full">
                        ORDENAR
                    </button>

                    <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded w-full">
                        COCINA
                    </button>

                </div>
            </div>

        </>

    )
}

export default sibebar