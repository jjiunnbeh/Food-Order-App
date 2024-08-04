import React, { useContext } from 'react';
import { BsCart } from "react-icons/bs";
import UserProgressContext from '../store/UserProgressContext';



function Header()
{

  const userProgressCtx = useContext(UserProgressContext);
  const handleClick= ()=>
  {
    userProgressCtx.showCart();
  }

    return (
      <>
        <header>
        <div >
          <h1 id='restuarant-name-header'>RESTAURANT NAME</h1>
        </div>
         <button id='cart-icon' onClick={handleClick}><BsCart /> (0)</button>
      </ header>
      <div style={{ color: 'white' , fontSize: '2rem', textAlign: 'center', fontFamily:'initial'}}>OUR MENU</div>
      <hr style={{marginLeft: '5%', marginRight:' 5%', opacity: 0.8, borderColor: 'lightgray'}}/>
       </>

    );
};

export default Header;