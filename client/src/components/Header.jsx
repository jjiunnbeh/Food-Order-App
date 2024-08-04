import React from 'react';
import { BsCart } from "react-icons/bs";



function Header()
{
    const handleOpenCartClick =async () => 
    {
    }
    return (
      <>
        <header>
        <div >
          <h1 id='restuarant-name-header'>RESTAURANT NAME</h1>
        </div>
         <button id='cart-icon' onClick={handleOpenCartClick}><BsCart /> (0)</button>
      </ header>
      <div style={{ color: 'white' , fontSize: '2rem', textAlign: 'center'}}>OUR MENU</div>
      <hr style={{marginLeft: '5%', marginRight:' 5%', opacity: 0.8, borderColor: 'lightgray'}}/>
       </>

    );
};

export default Header;