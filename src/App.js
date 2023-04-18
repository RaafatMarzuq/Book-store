
import './App.css';
import { HashRouter ,Route ,Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Books from './pages/Books/Books';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  
  
  return (
    <>
      <NavBar/>
    
      <HashRouter  >
          <Routes>
              <Route  path='/' element ={ <Home/> } />
              <Route   path='/Book-store/Books' element ={<Books/>} />
              <Route  path='/Book-store/Cart' element ={<Cart/>} />     
          </Routes>
      </HashRouter > 
    
        <Footer/>
    
       
    </>
  );
}

export default App;
