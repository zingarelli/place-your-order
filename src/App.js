import { useState, useEffect } from "react";
import './App.css';
import { getProducts } from "./utils/apiUtils";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ProductsList from "./components/ProductsList";

// Main component to run the application
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

  // hide checkout modal if the user decides to modify the order
  function handleCloseCheckout() { setCheckoutVisible(false) }

  // clear the cart once an order is finished
  function handleSuccessfulOrder() { setCart([]) }

  return (
    <div className="App">
      <div className="order">
        <ProductsList products={productsList} cart={cart} setCart={setCart} />
        <aside className="cart">
          <Cart cart={cart} setCart={setCart} />
          {cart.length > 0 && <button className="cartCheckoutButton" onClick={() => setCheckoutVisible(true)}>Checkout</button>}
        </aside>
      </div>
      {checkoutVisible && (
        <div className="checkoutModal">
          <Checkout cart={cart} closeCheckout={handleCloseCheckout} clearCart={handleSuccessfulOrder}  />
        </div>
      )}
    </div>
  );
}

export default App;
