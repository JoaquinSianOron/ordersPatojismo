import React, { useEffect } from 'react'
import { useState } from 'react';
import getAllOrdes from '../api/ordersFodd.js';
import cardMenu from "../assets/css/cardMenu.css"

function squareLeft() {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function loadOrders() {
      const res = await getAllOrdes();
      setOrders(res.data.reverse());

      const total = data.reduce((accumulator, product) => accumulator + product.price, 0);
      setTotalPrice(total);
      console.log(res)
    }
    loadOrders()
  }, []);

  return (
    <div className="bg-piel-100 h-full w-320 mx-0 mt-0 justify-self-end">
      <div className='p-2'>
        {orders.map((food) => {
          return (
            <div key={food.id} className='bg-gris-300 w-279 h-65 flex items-center justify-center  mb-4'>
              {/* <h1>food: {food.food} </h1>
              <h1>name: {food.username} </h1>
              <h1>price: Q. {food.price} </h1>
              <h1>price: Q. {food.price} </h1>
              <div>Orden: {food.orderNumber} </div>
            <div>Orden: {food.orderNumber} </div> */}
              <p className='text-xl font-bold mt-4'>Total: ${food.price}</p>

            </div>)
        }

        )}
      </div>
    </div>)
}

export default squareLeft;