import React, { useEffect } from 'react'
import { useState } from 'react';
import getAllFood from '../api/ordersApi.js'
import getAllOrdes from '../api/ordersFodd.js';
import cardMenu from "../assets/css/cardMenu.css"
import OrdesData from "../components/ordesData"
import DataOrders from '../components/dataOrders';


function centarlsquare() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const res = await getAllOrdes();
      setOrders(res.data.reverse());
      console.log(res)

    }
    loadOrders()
  }, []);

  

  return (
    <div className='bg-white p-10 px-11 flex flex-col items-center'>
      <div className='p-2'>
        {orders.map((food) => {
          return (
            <div key={food.id} className='cardOrders mb-4'>
              <h1>food: {food.food} </h1>
              <h1>name: {food.username} </h1>
              <h1>price: Q. {food.price} </h1>
              <div>Orden: {food.orderNumber} </div>

            </div>)
        }

        )}
      </div>
    </div>)
}
export default centarlsquare;