import { removeFromCart, updateCart } from '../utils/cartUtils';

function Cart({ cart, setCart }) {

    function handleItemUpdate(id, qty, increase = true) {
        (!increase && qty === 1) 
            ? setCart(removeFromCart(cart, id))
            : setCart(updateCart(cart, id, increase));
    }

    function handleItemRemoval(id) {
        setCart(removeFromCart(cart, id));
    }

    return (
        <aside>
            <h2>Basket</h2>
            {cart.length > 0 && (
                <button onClick={() => setCart([])}>Empty basket</button>
            )}
            {cart.map(item => (
                <div key={item.id}>
                    <button onClick={() => handleItemRemoval(item.id)}>X</button>
                    <p>{item.name}</p>
                    <button onClick={() => handleItemUpdate(item.id, item.qty, false)}>-</button>
                    <p>{item.qty}</p>
                    <button onClick={() => handleItemUpdate(item.id, item.qty)}>+</button>
                </div>
            ))}
        </aside>
    )
}

export default Cart;