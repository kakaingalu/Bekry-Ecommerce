import React from 'react';
import './App.css';
import Login  from './components/Login/Login';
import  ProductList  from './components/Products/ProductList';
import  Cart  from './components/Cart/Cart';
import  Occassion  from './components/Occassions/Occasions';
import  Delivery from './components/SamedayDelivery/Samedaydelivery';
import bag from './Assets/bag-fill.svg'
import person from './Assets/person-circle.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import Shop from './components/Home/Shop';


function App() {
 
  
  return (
    <div className="App">

    <Router>
      <div className="nav">
        <nav className="li">
          <Link className='link' to='/shop'>Shop</Link>
          <Link className='link' to='/occassion'>Occassion</Link>
          <Link className='link'to='/product-list'>ProductList</Link>
          <Link className='link'to='/delivery'>Delivery</Link>
          <Link className='link'to="/login"><img className="shopBag" src={person} alt="person svg" /></Link>
          <Link className='link'to='/cart'><img className="shopBag" src={bag} alt="bag svg" /></Link>

        </nav>

      </div>
      
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/occassion' element={<Occassion />}/>
        <Route path='/product-list' element={<ProductList />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />}/>

      </Routes>
    </Router>
  
    </div>
  );
}


export default App;
