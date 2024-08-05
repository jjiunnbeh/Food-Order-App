import { BASE_URL } from "../utilities/cosntant";
import React from "react";
import { useState, useEffect } from "react";

import FoodCard from "./FoodCard";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/onlinemenu/menu`, { method: "GET" });
      if (response.status === 200) {
        console.log("Menu fetched successfully");
        const data = await response.json();
        setMenu(data[0].menuItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul id="menu">
        {menu.map((item)=>(<FoodCard item={item} key={item.id}/>))}
    </ul>
  );
}

export default Menu;
