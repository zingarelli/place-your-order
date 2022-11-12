import styles from './Cart.module.css';
import { removeFromCart, updateCart } from '../../utils/cartUtils';

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
        <>
            <h2>Basket</h2>
            {/* {cart.length > 0 && (
                <button className={styles.emptyCartBtn} onClick={() => setCart([])}>Empty basket</button>
            )} */}
            {cart.length === 0 && (
                <div className={styles.emptyCart}>
                    <p>Your basket is empty.</p> 
                    <p>Please, select your items.</p>
                </div>
            )}
            {cart.map(item => (
                <div key={item.id} className={styles.cartItem}>                    
                    <button className={styles.cartItemBtn} onClick={() => handleItemRemoval(item.id)}>X</button>
                    <img src='https://cdn-icons-png.flaticon.com/512/737/737967.png' alt='Fast-food icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/fast-food' className={styles.cartImg} />
                    <p>{item.name}</p>
                    <div className={styles.qtyManagement}>
                        <button className={styles.cartItemBtn} onClick={() => handleItemUpdate(item.id, item.qty, false)}>-</button>
                        <p>{item.qty}</p>
                        <button className={styles.cartItemBtn} onClick={() => handleItemUpdate(item.id, item.qty)}>+</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cart;