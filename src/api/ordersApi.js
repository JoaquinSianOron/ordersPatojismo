import axios from "axios";

const getAllFood = () => {
    
    return axios.get("https://backendkitchenapp.onrender.com/foods/food/")
   //https://backendkitchenapp.onrender.com/foods/food/
   //https://backendkitchenapp.onrender.com/orders/order/
} 

export default getAllFood;