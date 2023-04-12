import React from "react";
import BookImage from "./Gray_book.png"
import './BookCard.css'

const BookCard = ({name , price , type}) => {
    let button_name;
    type === "cart" ? button_name= "Remove ": button_name="Add to cart" ; 
    function onClick(){
        alert(type)
    }
    return (
        <div className="card">
            <img alt="" src={BookImage} className="card--image"/>
           <div>
            <h5>{name}Book Name </h5>
            <h5>{price}Book Price</h5>
            </div>
            <button className="add-button" onClick={onClick} >{button_name}</button>
        </div>
    )
}



export default BookCard;