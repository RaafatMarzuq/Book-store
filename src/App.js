
import './App.css';
import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Books from './pages/Books/Books';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';


function App() {
  
  
  return (
    <>
    
    <NavBar/>
    
     <BrowserRouter>
   
    <Routes>
            <Route path='/' element ={ <Home  /> } />
            <Route path='/Books' element ={<Books/>} />
            <Route path='/Cart' element ={<Cart/>} />
            
            
     </Routes>
   </BrowserRouter> 
    
 
    </>
  );
}

export default App;
