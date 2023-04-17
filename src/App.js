
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route exact path='/' element ={ <Home/> } />
              <Route exact  path='/Books' element ={<Books/>} />
              <Route exact path='/Cart' element ={<Cart/>} />     
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
