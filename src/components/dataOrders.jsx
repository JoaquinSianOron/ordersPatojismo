import React, { useEffect } from 'react'
import getAllFood from '../api/ordersApi.js'
import { useState } from 'react';
import {} from "../assets/css/cardMenu.css"


function dataOrders() {
const [orders, setOrders] = useState([]);

useEffect(() => {
  async function loadOrders() {
    const res = await getAllFood();
    setOrders(res.data);
    console.log(res)
  }
  loadOrders();
}, []);



          <button className="bg-AA8787  text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded">
            Ordenar
          </button>



  return <div className='cardOrders'>
      {orders.map(food => (
        <div key={food.id}>
          <h1>food : {food.food}</h1>
          <h1>price : Q. {food.price} </h1>

        </div>
      ))}


    </div>
  
}

export default dataOrders


