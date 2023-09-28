import React, { useEffect } from 'react'
import getAllFood from '../api/ordersApi'
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
 