import React, { useEffect } from "react";
import getAllDrinks from "../api/drinksApi";
import { useState } from "react";
import {} from "../assets/css/cardMenu.css";

function drinkOrders() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function loadDrinks() {
      const res = await getAllDrinks();
      setDrinks(res.data);
      console.log(res);
    }

    loadDrinks();
  }, []);


  return (
    <div>
      {drinks.map((orders) => (
        <div key={orders.id} className="">
          <h1>food : {orders.name} - price : Q. {orders.price} .00</h1>
        </div>
      ))}
    </div>
  );
}

export default drinkOrders;