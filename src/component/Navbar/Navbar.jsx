import React from "react";
import "./navbar.scss";

const Navbar = () => {
   return (
      <nav className="Navbar">
         <div className="logo">
            <img src="logo.svg" alt="" />
            <span>Blood SEVA</span>
         </div>

         <div className="Navbar-icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />

            <div className="notification">
               <img src="/notifications.svg" alt="" />
               <span>1</span>
            </div>

            <div className="user">
               <img
                  src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt=""
               />
               <span>Jane</span>
            </div>

            <img src="/settings.svg" alt="" className="icon" />
         </div>

         {/* <ul className="Navbar-items">
            <li>notification</li>
            <li>profile</li>
            <li>setting</li>
         </ul> */}
      </nav>
   );
};

export default Navbar;
