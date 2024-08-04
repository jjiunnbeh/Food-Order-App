import { BASE_URL } from "../utilities/cosntant";
import React from "react";
import { useState, useEffect } from "react";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/menu/get-menu`, { method: "GET" });
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
        {menu.map((item)=>(<li key={item.id}><h1>{item.name}</h1></li>))}
    </ul>
  );
}

export default Menu;
