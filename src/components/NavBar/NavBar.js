
import React from 'react';
import './NavBar.css'; // import external CSS file
// import Button from '../Button/Button';
import { BiCart ,BiBookBookmark } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";



const NavBar = () => {
    function onClick(page){
      page ==="Home" ?
            window.location.href = '/' : 
                 page ==="Books" ?
                  window.location.href = 'Books' :
                     window.location.href = 'Cart'

    }
  return (
   
    <div className="Navbar">
     
      <button  className="Navbar-button" onClick={()=>{ onClick("Home") }}>
      <BsFillHouseFill/> Home
      </button>
       
      <button  className="Navbar-button" onClick={()=>{ onClick("Books")}}>
      <BiBookBookmark/> Books
      </button>

      <button className="Navbar-button" onClick={()=>{onClick("Cart")}} >
        <BiCart/> Cart
      </button>
      
       
    </div>
    
  );
}

export default NavBar;
