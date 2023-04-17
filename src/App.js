
import './App.css';
import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Books from './pages/Books/Books';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  
  
  return (
    <>
      <NavBar/>
     <div>
      <BrowserRouter>
          <Routes>
              <Route path='/Book-store/' element ={ <Home  /> } />
              <Route path='/Books' element ={<Books/>} />
              <Route path='/Cart' element ={<Cart/>} />     
          </Routes>
      </BrowserRouter> 
     </div>
      <div>
        <Footer/>
      </div>
       
    </>
  );
}

export default App;
