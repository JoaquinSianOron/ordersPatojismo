import React from 'react' 
import ReactDOM from 'react-dom/client'
import HomeMenu from "../src/components/homeMenu"
import "bootstrap/dist/css/bootstrap.css"
import "../src/assets/css/index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeMenu></HomeMenu>
  </React.StrictMode>
)
