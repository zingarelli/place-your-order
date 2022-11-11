import { useState, useEffect } from "react";
import './App.css';
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { getProducts } from "./utils/apiUtils";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);

  // populate productsList when the page is loaded
  useEffect( () => {
    getProducts()
      .then( data => setProductsList(data))
      .catch( err => console.log (err))
  } , []);

  return (
    <div className="App">
      <ProductsList list={productsList} cart={cart} setCart={setCart} />
      <Cart list={cart} />
    </div>
  );
}

export default App;
