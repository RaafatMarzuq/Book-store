
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
     
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route  path='/' exact Component={Home}  />
              <Route   path='/Books' exact Component={Books}  />
              <Route  path='/Cart' exact Component={Cart} />     
          </Routes>
      </BrowserRouter> 
     
      <Footer/>
    </>
  );
}

export default App;
