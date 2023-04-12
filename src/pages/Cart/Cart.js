import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './Cart.css'

const Cart =()=>{
   
   
    return (

    <div className='cart'>
      <h1>Books in your cart</h1>
       <div>
        <BookCard type={"cart"}/>
        <BookCard type={"cart"}/>
       </div>
        
    </div>
    )
}


export default Cart;