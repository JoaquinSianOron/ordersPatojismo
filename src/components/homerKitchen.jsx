import React from "react";
import logoPatojos from "../assets/images/logoPatojos.png";
import CentralSquare from "../components/centralsquare";
import NavbarKitchen from "../components/navbarKitchen"
import Sibebar from "../components/sibebar"

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

        <div className="W-320">

        </div>
      </main>
    </div>



  );
}

export default Navbar;




