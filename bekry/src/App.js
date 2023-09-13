import './App.css';
import Login from './components/Login/Login';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import Occassion from './components/Occassions/Occasions';
import Delivery from './components/SamedayDelivery/Samedaydelivery';

function App() {
  return (
    <div className="App">
      <Login />
      <ProductList />
      <Cart />
      <Occassion />
      <Delivery />

    </div>
  );
}

export default App;
