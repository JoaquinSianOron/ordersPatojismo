import React, { useEffect } from 'react'
import { getAllFood, getAllOrders } from '../api/ordersApi'
import { useState } from 'react';
import { } from "../assets/css/cardMenu.css"


function square() {
  const [cocinaOrden, setOrdenCocina] = useState([]);

  useEffect(() => {
    async function loadOrden() {
      const res = await getAllOrders();
      setOrdenCocina(res.data);
      console.log(res)
    }
    loadOrden();
  }, []);

  return <div>

    {cocinaOrden.map(Ordens => (
      <div className='cardOrders'>
        <div key={Ordens.id}>
          <h1>{Ordens.orderNumber} - Q. {food.price} .00</h1>

        </div>
        <button className="bg-piel-100  text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded">
          listo
        </button>
      </div>
    ))}



  </div>







}
export default square;