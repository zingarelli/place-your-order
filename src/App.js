import { useState, useEffect } from "react";
import './App.css';
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);

  // populate productsList when the page is loaded
  useEffect( () => {
    getProducts()
      .then( data => setProductsList(data))
      .catch( err => console.log (err))
  } , []);

  // TODO: add this function to an apiUtils
  // fetch an array of products data from API
  function getProducts() {
    // wiremock (add "proxy" to package.json to avoid CORS policy problems)
    const url = '/products';
    const init = {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      },
    };
    const request = new Request(url, init);

    const list = fetch(request)
      .then(resp => resp.json())
      .catch(err => console.log(err));

    return list;
  }

  return (
    <div className="App">
      <ProductsList list={productsList} cart={cart} setCart={setCart} />
      <Cart list={cart} />
    </div>
  );
}

export default App;
