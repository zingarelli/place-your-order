import { useState, useEffect } from "react";
import './App.css';
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { getProducts } from "./utils/apiUtils";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  // populate productsList when the page is loaded
  useEffect(() => {
    getProducts()
      .then(data => setProductsList(data))
      .catch(err => console.log(err))
  }, []);

  // don't display checkout if the user cancels the order
  function handleCancelCheckout() { setCheckoutVisible(false) }

  return (
    <div className="App">
      <div className="order">
        <ProductsList products={productsList} cart={cart} setCart={setCart} />
        <div>
          <Cart cart={cart} setCart={setCart} />
          {cart.length > 0 && <button onClick={() => setCheckoutVisible(true)}>Checkout</button>}
        </div>
      </div>
      {checkoutVisible && (
        <div className="checkout">
          <Checkout cart={cart} onclose={handleCancelCheckout} />
        </div>
      )}
    </div>
  );
}

export default App;
