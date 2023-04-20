import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import  { useState, useEffect } from 'react'
import axios from 'axios'
import './Books.css'
import {useNavigate} from "react-router-dom"


const Books =()=>{
    
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(0)
    const navigate = useNavigate();
    navigate(`/Books`)

    setTimeout(()=> setLoading(loading=> loading+1),1800000000)

    useEffect( ()=> {
        axios.get('BOOKS_API')
        .then(res => {
          
          res.data ? setBooks(res.data) 
          : setBooks(books => [...books])
        }).catch( err => {
            console.log(err)
        })
    } , [loading])
    const [savedBooks, setSavedBooks] = useState(
                                            JSON.parse(localStorage.getItem('sevedBooks')) ? 
                                            JSON.parse(localStorage.getItem('sevedBooks')):
                                            [])
    const [flag, setFlag] = useState(false)
   
    useEffect(()=>{
        localStorage.setItem('sevedBooks',JSON.stringify(savedBooks));
    },[flag,savedBooks])
   
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
           
           

           <div className='cards'>
            {books.map((val , key)=>{ 
                return (
                    <BookCard name = {val.name} price={val.price} onClick= {()=>{onClick(val.name ,val.price)}} type={"store"}/>
                )
            })}
            
            <BookCard name={"A"} price={"23$"} onClick= {()=>{onClick("A" ,"23$")}} type={"store"}/>
            <BookCard name={"B"} price={"28$"} onClick= {()=>{onClick("B" ,"28$")}} type={"store"}/>
            <BookCard name={"C"} price={"5$"} onClick= {()=>{onClick("C" ,"5$")}} type={"store"}/>
            <BookCard name={"D"} price={"7$"} onClick= {()=>{onClick( "D","7$")}} type={"store"}/>
            <BookCard name={"E"} price={"55$"} onClick= {()=>{onClick( "E","55$")}} type={"store"}/>
           
            </div> 
        
        </div>
    )
}


export default Books;