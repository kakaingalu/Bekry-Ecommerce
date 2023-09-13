import React from 'react';
import './App.css';
import Login  from './components/Login/Login';
import  ProductList  from './components/Products/ProductList';
import  Cart  from './components/Cart/Cart';
import  Occassion  from './components/Occassions/Occasions';
import  Delivery from './components/SamedayDelivery/Samedaydelivery';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";



function App() {
 
  
  return (
    <div className="App">

    <Router>
      <nav>
        <Link to="/login">Login</Link>
        <Link to='/occassion'>Occassion</Link>
        <Link to='/product-list'>ProductList</Link>
        <Link to='/delivery'>Delivery</Link>
        <Link to='/cart'>Cart</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/occassion' element={<Occassion />}/>
        <Route path='/product-list' element={<ProductList />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/cart' element={<Cart />}/>

      </Routes>
    </Router>
  
    </div>
  );
}


export default App;
