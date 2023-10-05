import React from 'react' 
import ReactDOM from 'react-dom/client'
import HomeMenu from "../src/components/homeMenu"
import HomeKitchen from "../src/components/homerKitchen"
import "../src/assets/css/index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HomeKitchen></HomeKitchen>
  </React.StrictMode>
)
