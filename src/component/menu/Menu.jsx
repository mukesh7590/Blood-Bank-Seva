import React from "react";
import "./menu.scss";

import { menu } from "../../data";

const Menu = () => {
   console.log(menu);
   return (
      <div className="menu">
         {menu.map((item) => (
            <div className="item" key={item.id}>
               <span className="title">{item.title}</span>

               {item.listItems.map((listItem) => (
                  <div className="listItem" key={listItem.id}>
                     <img src={listItem.icon} alt="" />
                     <span className="listItemTitle">{listItem.title}</span>
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
};

export default Menu;
