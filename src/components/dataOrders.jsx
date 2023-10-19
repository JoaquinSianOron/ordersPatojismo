
import React, { useEffect } from 'react';
import { useState } from 'react';
import {getAllFood} from '../api/ordersApi';
import {} from "../assets/css/cardMenu.css";

function dataOrders() {
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const res = await getAllFood();
      setOrders(res.data);
      console.log(res);
    }
    loadOrders();
  }, []);

  return (
    <div>
      {orders.map((food) => (
        <div className="cardOrders">
          <div key={food.id}>
            <h1>
              {food.name} - Q. {food.price} .00
            </h1>
          </div>

          <button className="bg-AA8787  text-black font-Lalezar sm-w-147 py-2 px-1 mt-1/2 rounded">
            Ordenar
          </button>


        </div>
      ))}
    </div>
  );
}

export default dataOrders;



