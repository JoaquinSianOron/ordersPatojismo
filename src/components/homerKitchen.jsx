import React from "react";
import logoPatojos from "../assets/images/logoPatojos.png";
import CentralSquare from "../components/centralsquare";
import NavbarKitchen from "../components/navbarKitchen"
import Sibebar from "../components/sibebar"
import SquareLeft from "../components/squareLeft"

function Navbar() {
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
          <div className="flex flex-1 min-h-screen overflow-y-scroll items-center justify-center mx-0">
            <CentralSquare />
          </div>
          <div className="flex  min-h-screen overflow-y-scroll ml-0 justify-self-end">
            <SquareLeft />
          </div>
        </div>
      </main>
    </div>



  );
}

export default Navbar;




