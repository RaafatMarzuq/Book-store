
// import React, { useState } from 'react';
import './NavBar.css'; 
import { BiCart ,BiBookBookmark } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";
// import {useNavigate} from "react-router-dom"


const NavBar = () => {
  // const [toPage,setToPage] = useState("")
  // let navigate = useNavigate();
  //   useEffect(()=> {
  //     navigate(`${process.env.PUBLIC_URL}/${toPage}`)
  //   },[toPage,navigate])
    function onClick(page){
     
      page === "Home" ? 
          window.location.href=`${process.env.PUBLIC_URL}`:
          window.location.href=`${process.env.PUBLIC_URL}/${page}`
    }
  return (
   
    <div className="Navbar">
     
      <button  className="Navbar-button" onClick={()=>{ onClick("Home") }}>
      <BsFillHouseFill/>  Home
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
