import axios from "axios";

const getAllFood = () => {
    
    return axios.get("https://backendkitchenapp.onrender.com/foods/food/")
    
}


export default getAllFood;
