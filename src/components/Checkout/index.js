import { useState, useEffect } from "react";
import { penniesToPounds } from '../../utils/currencyUtils';
import { calculateOrder } from '../../utils/orderUtils';
import styles from './Checkout.module.css'

function Checkout({ cart, closeCheckout, clearCart }) {
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [orderValues, setOrderValues] = useState({
        grossValue: 0,
        discount: 0,
        netValue: 0
    });

    // calculate order's total whenever list of items in cart change
    useEffect(() => {
        setOrderValues(calculateOrder(cart));
    }, [cart])

    // for now, just show a message and close the modal
    function addOrder(){
        setShowSuccessMsg(true);
        clearCart();
        setTimeout(() => {
            closeCheckout();
        }, 5000);
    }

    return (
        <section className={styles.container}>
            {showSuccessMsg && (
                <>
                <p>Your order has been sent. Thank you!</p>
                <p>This window will close automatically.</p>
                </>
            )}
            {cart.length > 0 && (
                <>
                <h2>Please verify your order</h2>  
                {cart.map(item => (
                    <div key={item.id}>
                        <p>{item.qty}x {item.name} <span>&#163; {penniesToPounds(item.price*item.qty)}</span></p>
                        <p></p>
                    </div>
                ))}
                <div>
                    <p>Total: &#163;{penniesToPounds(orderValues.grossValue)}</p>
                    <p>You save: &#163;{penniesToPounds(orderValues.discount)}</p>
                    <p>Total payable: &#163;{(orderValues.netValue)}</p>
                </div>
                <button className={styles.closeModal} onClick={closeCheckout}>X</button>
                <button onClick={addOrder}>Confirm</button>
                <button onClick={closeCheckout}>Cancel</button>
                </>
            )}
        </section>
    )
}

export default Checkout;