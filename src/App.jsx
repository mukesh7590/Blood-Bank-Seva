import { useState } from "react";
import Register from "./screen/Register";
import Home from "./screen/Home/Home";
import Navbar from "./component/Navbar/Navbar";

import "./styles/global.scss";
import Menu from "./component/menu/Menu";
import Footer from "./component/footer/Footer";

function App() {
   const user = JSON.parse(localStorage.getItem("user"));
   // console.log(JSON.parse(localStorage.getItem("user")));

   return (
      <div className="main">
         <Navbar />

         <div className="container">
            <div className="menuContainer">
               <Menu />
            </div>
            <div className="contentContainer">
               {/* Outlet put here */}
               <Home />
            </div>
         </div>
         {/* <Footer /> */}

         {/* {user ? <Home /> : <Register />} */}
      </div>
   );
}

export default App;
