import React from 'react';
import './App.css';
import Login  from './components/Login/Login';
import  ProductList  from './components/Products/ProductList';
import  Cart  from './components/Cart/Cart';
import  Occassion  from './components/Occassions/Occasions';
import  Delivery from './components/SamedayDelivery/Samedaydelivery';
import {
  createBrowserRouter, 
  Link,
  Route,
  createRoutesFromElements,
  RouterProvider,
  
} from 'react-router-dom';
import ReactDOM from 'react-dom/client'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route path='/login' element={<Login />}/>
        <Route path='/occassion' element={<Occassion />}/>
        <Route path='/product-list' element={<ProductList />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/cart' element={<Cart />}/>
      </Route>
      
    )
  )
  return (
    <div className="App">
    <RouterProvider router={route} />
  
    </div>
  );
}

const Root  =  () => {
  return (
    <>
    <div>
    <button>
      <Link to='/login'>Login</Link>
      </button>
      <button>
      <Link to='/occassion'>Occassion</Link>
      </button>
      <button>
      <Link to='/product-list'>ProductList</Link>
      </button>
      <button>
      <Link to='/delivery'>Delivery</Link>
      </button><button>
      <Link to='/cart'>Cart</Link>
      </button>      
    </div>
    </>
  )
}

export default App;
