
import './App.css';
import { BrowserRouter,Route ,Routes, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Books from './pages/Books/Books';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  
  
  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar/>
          <Routes>
              <Route  path='/'  element={<Home/>}  />
              <Route   path='Books'  element={<Books/>}  />
              <Route  path='Cart'  element={<Cart/>}  />     
          </Routes>
      <Footer/>
      </BrowserRouter> 
    
  );
}

export default App;
