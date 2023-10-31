import axios from "axios";

const getAllOrdes = () => {
   
    return axios.get ("https://backendkitchenapp.onrender.com/orders/order/") 

} 
export default getAllOrdes;