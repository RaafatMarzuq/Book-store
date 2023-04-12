import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './Books.css'

const Books =()=>{
   
   
    return (

        <div className='books'>
           
                <h1>Books in the store</h1>
           
           <div className='cards'>
            <BookCard type={"store"}/>
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