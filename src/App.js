import { useState, useEffect } from "react";
import './App.css';
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState('');
  const [product, setProduct] = useState({});


  useEffect( () => {
    getProducts()
      .then( data => setProductsList(data))
  } , []);

  // TODO: add this function to an apiUtils
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
      .then(data => data)
      .catch(err => console.log(err));

    return list;
  }

  // TODO: add this function to an apiUtils
  function getProductById(id) {
    const url = `/products/${id}`;
    const init = {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      },
    };
    const request = new Request(url, init);

    const product = fetch(request)
      .then(resp => resp.json())
      .then(data => data)
      .catch(err => console.log(err));

    return product;
  }

  function addProduct(id, e) {
    getProductById(id)
      .then( data => {
        setProduct(data);        
      })
      .then( () => applyPromotion())
      .catch( err => console.log(err));
  }

  function applyPromotion() {
    if(product) {
      console.log(product.promotions[0]);
    }
  }

  function handleInput(e) {
    setQty({[e.target.name]: e.target.value})
  }
  


  // console.log(product);
  // console.log(qty);

  return (
    <div className="App">
      <ProductsList list={productsList} cart={cart} setCart={setCart} />
      <Cart list={cart} />
    </div>
  );
}

export default App;
