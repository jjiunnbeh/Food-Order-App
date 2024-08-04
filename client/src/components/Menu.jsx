import { BASE_URL } from "../utilities/cosntant";
import React from "react";
import { useState, useEffect } from "react";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [menu]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${BASE_URL}/get-menu`, { method: "GET" });
      if (response.status === 200) {
        console.log("Menu fetched successfully");
        const resData = await response.json(); //Menu
        setMenu(resData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul id="menu">
        {menu.map((item)=>(<li key={item.id}>{item.name}</li>))}
    </ul>
  );
}

export default Menu;
