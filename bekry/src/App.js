import axios from 'axios'
import jwt_decode from 'jwt-decode'
import React, { useState, useEffect } from 'react';
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
import Shop from './components/Products/Shop';
import Context from './Context';
import AddProduct from './components/addProduct/addProduct';


function App() {

  const [user, setUser] = useState(null);
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState({});


  useEffect(() => {
    async function fetchData() {
      let user = localStorage.getItem("user");
      user = user ? JSON.parse(user) : null;

      try {
        const response = await axios.get('http://localhost:3001/products');
        setProduct(response.data);
        setUser(user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


   const login = async(email, password) => {
     const res = await axios.post('https//localhost:3001/login', {email, password}
     ).catch((res) => {
       return {status: 404, message: 'unauthorized'}
     })
     if (res.status === 200) {
       const { email } = jwt_decode(res.data.accessToken)
       const user = {
         email,
         token: res.data.accessToken,
         accessLevel: email === 'admin@example.com' ? 0 : 1
       }

       setUser({ user });
       localStorage.setItem("user", JSON.stringify(user));
       return true;
     } else {
       return false;
     }
   }

   const logout = e => {
     e.preventDefault();
     setUser(null);
     localStorage.removeItem("user");
   };



  return (
    <Context.Provider
    value={{
      user,
      cart,
      products,
      // removeFromCart,
      // addToCart,
      login,
      // addProduct,
      // clearCart,
      // checkout
    }}
    >
      <div className="App">

      <Router>
        <div className="nav">
          <nav className="li">
            <Link className='link' to='/shop'>Shop</Link>
            <Link className='link' to='/occassion'>Occassion</Link>
            <Link className='link' to='/product-list'>ProductList</Link>
            <Link className='link' to='/delivery'>Delivery</Link>

            {!user ? (
              <Link className='link' to="/login">
                <img className="shopBag" src={person} alt="person svg" />
              </Link>
            ) : (
              <Link to='/' onClick={logout} className='link'>
                Logout
              </Link>
            )}

            <Link className='link' to='/cart'><img className="shopBag" src={bag} alt="bag svg" />
              <span>{Object.keys(cart).length}</span>
            </Link>
            {user && user.accessLevel < 1 &&(
              <Link className='link' to='/addProduct'>AddProduct</Link>
            )}


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
          <Route path='/addProduct' element={<AddProduct/>} />

        </Routes>
      </Router>

      </div>
    </Context.Provider>
  );
}


export default App;