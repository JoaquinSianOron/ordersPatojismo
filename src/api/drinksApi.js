import axios from "axios";

const getAllDrinks = () => {
    
    return axios.get("https://backendkitchenapp.onrender.com/drinks/drink/")
}

export default getAllDrinks;