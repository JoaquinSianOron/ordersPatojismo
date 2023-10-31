import React, { useEffect } from "react";
import getAllFood from "../api/ordersApi";
import { useState } from "react";
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
        <div key={food.id} className="cardOrders">
          <h1>food : {food.name} - price : Q. {food.price} .00</h1>
        </div>
      ))}
    </div>
  );
}

export default dataOrders;
