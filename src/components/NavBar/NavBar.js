
import React from 'react';
import './NavBar.css'; // import external CSS file
// import Button from '../Button/Button';
import { BiCart ,BiBookBookmark } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

    function onClick(page){
      
      page ==="Home" ?
            navigate('/'): 
                 page ==="Books" ?
                 navigate('/Books') :
                 navigate('/Cart')

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
