import {React ,useState,useEffect }from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './Cart.css'
import {useNavigate} from "react-router-dom"
const Cart =()=>{
      let navigate = useNavigate();
          navigate("Book-store/Cart")
      const [storage,setStorage] =useState(JSON.parse(localStorage.getItem('sevedBooks')));
      
      // alert(JSON.parse( localStorage.getItem('sevedBooks')))
      
      
      // alert(storedBooks)
      const [flag, setFlag] = useState(false)
      useEffect(()=>{
        if(storage) {
          localStorage.setItem('sevedBooks',JSON.stringify(storage));
        }
      },[flag,storage])
    
      function onClick(name,price){
       
        const book = {
          name :name ,
          price : price
        }  
      
        setStorage(books => books.filter(function(obj){
          // alert(`Book name = ${book.name} \nObj name = ${obj.name} \n${book.name !== obj.name } `)
          return obj.name !==  book.name
        }))
        
        
        setFlag(bool=>!bool)
      }

    return (

    <div className='cart'>
      <h1>Books in your cart</h1>
       <div>
        { storage ? storage.map((val)=>{ 
                return (
              <BookCard onClick={()=>{onClick(val.name,val.price)}} name={val.name} price={val.price} type={"cart"}/>
             )
                }) : <h4>Empty cart</h4> }
        
        {/* <BookCard type={"cart"}/>
        <BookCard type={"cart"}/> */}
       </div>
        
    </div>
    )
}


export default Cart;