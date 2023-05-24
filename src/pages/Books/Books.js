import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { categories } from './categories';
import  { useState, useEffect } from 'react'
import BookCard from '../../components/BookCard/BookCard';
import {books} from './data';
// import axios from 'axios'
import './Books.css'


const Books =()=>{
    const [open, setOpen] = useState(false);
    const [Category, setCategory] = useState('');
  
    const handleChange = (event) => {
      setCategory((event.target.value) || '');
      
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason !== 'backdropClick') {
        setOpen(false);
      }
     
    };
    // const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(0)
    // const [Category,setCategory] = useState( localStorage.getItem("Category"))
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
           
         <h1>Books available in store</h1>
         <div>
            <Button variant="contained" color='secondary' onClick={handleClickOpen}> select category</Button>
            <h3>{Category ? `${Category}` : ''}</h3>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Choose Category</DialogTitle>
                <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
                    <Select
                        native
                        value={Category}
                        onChange={handleChange}
                        input={<OutlinedInput label="Age" id="demo-dialog-native" />}
                    >
                        <option aria-label="None" value="" />
                        {categories.map((value)=>{
                        return (
                            <option value={value}>{`${value}`}</option>
                        )
                        })}
                    </Select>
                    </FormControl>
                </Box>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
         </div>
        
           <div className='cards'>
            
            { Category ?
            books.map((val , key)=>{ 
                    return val.category === Category ? ( 
                        <BookCard 
                        name = {val.name}
                        price={val.price} 
                        Category={val.category}
                        onClick= {()=>{onClick(val.name ,val.price)}} 
                        type={"store"}/>
                    ): (<></>)})
                    :
                      books.map((val , key)=>{ 
                       return ( 
                        <BookCard 
                        name = {val.name}
                        price={val.price} 
                        Category={val.category}
                        onClick= {()=>{onClick(val.name ,val.price)}} 
                        type={"store"}/>
                    )})
            }
            </div> 
        
        </div>
    )
}


export default Books;