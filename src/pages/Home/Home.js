import React from 'react';
import './Home.css'
import {useNavigate} from "react-router-dom"

const Home =()=>{
    let navigate = useNavigate();
    navigate("/")
   
    return (

        <div className='Home'> 
            <div className='text'>  
            <h1>Welcom to the online book store</h1>
            <h4>
                We are your one-stop-shop for all things books.
                With a wide selection of genres and titles, you're sure to find your next favorite read here.
                Our books are hand-picked by our team of passionate readers to ensure that you get the best quality and value.
            </h4>
            <h4>
                Browse our categories to find the perfect book for you,
                 whether you're looking for fiction, non-fiction,
                  children's books, or something more specific like romance or mystery.
            </h4>
            <h4>
                At our Book Store, we're committed to providing exceptional customer service.
                If you have any questions or concerns, please don't hesitate to get in touch with us.
                You can find our contact information at the bottom of the page.
            </h4>
            <h4>
                Thank you for choosing our Book Store as your go-to destination for books.
                Happy reading!
            </h4>
            </div> 
        </div>  
    )
}


export default Home;