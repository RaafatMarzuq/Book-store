import React from 'react';
import  { useState, useEffect } from 'react'
import BookCard from '../../components/BookCard/BookCard';
import {books} from './data';
import BookCategory from '../../components/BooksCategory/BooksCategory';
// import axios from 'axios'
import './Books.css'


const Books =()=>{
    
    // const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(0)
    const Category = localStorage.getItem("Category")

    setTimeout(()=> setLoading(loading=> loading+1),1800000000)
    const [savedBooks, setSavedBooks] = useState(
                                            JSON.parse(localStorage.getItem('sevedBooks')) ? 
                                            JSON.parse(localStorage.getItem('sevedBooks')):
                                            [])
    const [flag, setFlag] = useState(false)
   
    useEffect(()=>{
        localStorage.setItem('sevedBooks',JSON.stringify(savedBooks));
    },[flag,savedBooks,loading])
   
    function onClick(name , price){
            const book ={
                name :name,
                price:price
            }
           
            setSavedBooks( books => books.filter(Obj => Obj.name !== book.name))
            setSavedBooks( books =>  [book ,...books])
            setFlag(bool => !bool)
           
    }

   

    return (

        <div className='books'>
           
         <h1>Books in the store</h1>
         <div>
            <BookCategory/>
             
         </div>
        
           <div className='cards'>
            
            {
            books.map((val , key)=>{ 
                return (
                    <BookCard 
                    name = {val.name}
                    price={val.price} 
                    Category={val.category}
                    onClick= {()=>{onClick(val.name ,val.price)}} 
                    type={"store"}/>
                )
            })}
            </div> 
        
        </div>
    )
}


export default Books;