import React from "react";
import logoPatojos from "../assets/images/logoPatojos.png";

export default function Sibebar({ }) {
    return (
        <aside className=" h-screen">
            <nav className="h-full flex flex-col bg-gris-100 border-r shadow-sm items-center justify-center mx-0">
                <div className="p-4 pb-2 flex justify-between items-center ">
                    <img src={logoPatojos} className="sm-w-104 sm-h-107 md-w-104 h-107 mt-10 m-5" alt="Logo Patojos" /> {/* Establece el tamaño y el margen superior (mt) */}
                    <button className="p-1.5 rounded-lg bg-gris-200 hover:bg-gray-300">
                        <ChevronFirts/>
                    </button>
                </div>
            </nav>

        </aside>
    )
}