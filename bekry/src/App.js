import axios from 'axios'
import jwt_decode from 'jwt-decode'
import React, { useState, useEffect } from 'react';
import './App.css';
import Login  from './components/Login/Login';
import  ProductList  from './components/Products/ProductList';
import  Cart  from './components/Cart/Cart';
import bag from './Assets/bag-fill.svg'
import person from './Assets/person-circle.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Shop from './components/Products/Shop';
import Context from './Context';
import AddProduct from './components/addProduct/addProduct';
import useToken from './useToken';

function App(props) {

  const [user, setUser] = useState(null);
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const { token, setToken } = useToken();

 

  //const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      let storedUser = localStorage.getItem("user");
      let storedCart = localStorage.getItem("cart");

      const productsResponse = await axios.get('http://localhost:3001/products');
      const productsData = productsResponse.data;

      setUser(storedUser ? JSON.parse(storedUser) : null);
      setCart(storedCart ? JSON.parse(storedCart) : {});
      setProduct(productsData);
    };

    fetchData();
  }, []);

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

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

   const addProduct = (product, callback) => {
    setProduct([...products, product]);
    if (callback) callback();
  };

  const addToCart = (cartItem) => {
    const updatedCart = { ...cart };
    
    if (updatedCart[cartItem.id]) {
      updatedCart[cartItem.id].amount += cartItem.amount;
    } else {
      updatedCart[cartItem.id] = cartItem;
    }
    
    if (updatedCart[cartItem.id].amount > cartItem.product.stock) {
      updatedCart[cartItem.id].amount = cartItem.product.stock;
    }
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeFromCart = (cartItemId) => {
    const updatedCart = { ...cart };
    delete updatedCart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  
  const clearCart = () => {
    const emptyCart = {};
    localStorage.removeItem("cart");
    setCart(emptyCart);
  };
  
  const checkout = () => {
    if (!props.user) {
      // navigate("/login");
      return;
    }

    const { cart, products } = props;

    const updatedProducts = products.map((p) => {
      if (cart[p.name]) {
        p.stock = p.stock - cart[p.name].amount;

        axios.put(`http://localhost:3001/products/${p.id}`, { ...p });
      }
      return p;
    });

    props.setProducts(updatedProducts);
    props.clearCart();
  };

  return (
    <Context.Provider
    value={{
      user,
      cart,
      products,
      removeFromCart,
      addToCart,
      login,
      addProduct,
      clearCart,
      checkout
    }}
    >
      <div className="App">

      <Router>
        <div className="nav">
          <nav className="li">
            <Link className='link' to='/shop'>Shop</Link>
            <Link className='link' to='/product-list'>ProductList</Link>

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
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/product-list' element={<ProductList />}/>
          
          <Route path='/login' element={<Login setToken={setToken}/>}/>

          
          
          <Route path='/cart' element={<Cart />}/>
          <Route path='/addProduct' element={<AddProduct/>} />

        </Routes>
      </Router>

      </div>
    </Context.Provider>
  );
}


export default App;