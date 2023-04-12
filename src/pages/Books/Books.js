import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import  { useState, useEffect } from 'react'
import axios from 'axios'
import './Books.css'

const Books =()=>{
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(0)
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
    return (

        <div className='books'>
           
                <h1>Books in the store</h1>
           
           <div className='cards'>
            {books.map((val , key)=>{ 
                return (
                    <BookCard name = {val.name} price={val.price}  type={"store"}/>
                )
            })}
            
            <BookCard type={"store"}/>
            <BookCard type={"store"}/>
            <BookCard type={"store"}/>
            <BookCard type={"store"}/>
            <BookCard type={"store"}/>
            </div> 
        
        </div>
    )
}


export default Books;