import {  React} from "react";
import BookImage from "./Gray_book.png"
import { BiCart  } from "react-icons/bi";
import './BookCard.css'

const BookCard = ({name , price , type, onClick}) => {

    let button_name;
    type === "cart" ? button_name= "Remove ": button_name=" Add to cart" ; 
      
       
    return (
        <div className="card" id={`${name}`}>
            <img alt="" src={BookImage} className="card--image"/>
           <div  className="tag">
            <p>{name} </p>
            <p>{price}$</p>
            </div>
            <button className="add-button" onClick={onClick} >
                {type === "store" ? <BiCart/> : ""}
                { button_name}
            </button>
        </div>
    )
}



export default BookCard;