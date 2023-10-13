import React, { useState } from "react";

const sideBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=" fixed top-0 left-0 right-0 bg-gris-100 h-61 shadow-md">
                <button className="ml-4 mt-4 text-white " onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div className={` ${!open && "hidden"} bg-gris-300/50 min-h-screen w-full fixed top-0 left-0 rigth-0 backdrop-blur-sm`} onClick={() => setOpen(false)}>

                </div>
                <div className={` ${open ? "w-147" : "w-0"} bg-gris-100 w-147 top-0 left-0 min-h-screen fixed items-center justify-start transition-all duration-300`}>
                    <div className={`${!open && "hidden"}`} >
                        <button className="ml-4 mt-4 text-white" onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>

                        <div className="flex flex-col items-center justify-center h-full w-147" >
                            <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded mb-5 w-full">
                                ORDENAR
                            </button>

                            <button className="bg-gris-200 hover:bg-gris-300 text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded w-full">
                                COCINA
                            </button>

                        </div>

                    </div>

                </div>
            </div>
            );

}

            export default sideBar;