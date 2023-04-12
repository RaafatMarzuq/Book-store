
import React from 'react';
import './NavBar.css'; // import external CSS file
// import Button from '../Button/Button';
import { BiCart ,BiBookBookmark } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";

const NavBar = () => {
    
  return (
   
    <div className="Navbar">
     
      <button  className="Navbar-button" onClick={()=>{window.location.href = '/'}}>
      <BsFillHouseFill/> Home
      </button>

      <button  className="Navbar-button" onClick={()=>{window.location.href = '/Books'}}>
      <BiBookBookmark/> Books
      </button>

      <button className="Navbar-button" onClick={()=>{window.location.href = '/Cart'}} >
        <BiCart/> Cart
      </button>
      
       
    </div>
    
  );
}

export default NavBar;
