import React from 'react';
import { BsCart } from "react-icons/bs";

const Header = () => {
    const handleOpenCartClick = () => 
    {

    }
    return (
        <header>
        <div >
          <h1 id='restuarant-name-header'>RESTAURANT NAME</h1>
        </div>
         <button id='cart-icon' onClick={handleOpenCartClick}><BsCart /> (0)</button>
      </ header>
    );
};

export default Header;