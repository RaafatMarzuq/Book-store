
import React from 'react';
import './NavBar.css'; // import external CSS file
// import Button from '../Button/Button';
import { BiCart ,BiBookBookmark } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";
import { useHistory } from 'react-router-dom';


const NavBar = () => {
  const history = useHistory();

    function onClick(page){
      const regex = new RegExp(`${process.env.PUBLIC_URL.substring(1)}\\/\\w+`);
        let m = regex.exec(window.location);
        if(!m){
            return;
        }
        history.push(history.push(`${process.env.PUBLIC_URL}/`))
    
      page ==="Home" ?
            window.location.href = '/Book-store/' : 
                 page ==="Books" ?
                 window.open('https://github.com/RaafatMarzuq/Book-store', "/Books") :
                 window.open('https://github.com/RaafatMarzuq/Book-store', "/Cart")

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
