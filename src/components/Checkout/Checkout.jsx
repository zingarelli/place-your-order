import { useState, useEffect } from "react";
import { penniesToPounds } from '../../utils/currencyUtils';
import { calculateOrder } from '../../utils/orderUtils';
import styles from './Checkout.module.css'

function Checkout({ cart, onclose }) {
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

    return (
        <section className={styles.container}>
            <button onClick={onclose}>X</button>
            <h2>Please verify your order</h2>            
            {showSuccessMsg && <p>Your order has been sent. Thank you!</p>}
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.qty}x {item.name} <span>&#163; {penniesToPounds(item.price*item.qty)}</span></p>
                    <p></p>
                </div>
            ))}
            {cart.length > 0 && (
                <div>
                    <p>Total: &#163;{penniesToPounds(orderValues.grossValue)}</p>
                    <p>You save: &#163;{penniesToPounds(orderValues.discount)}</p>
                    <p>Total payable: &#163;{(orderValues.netValue)}</p>
                </div>
            )}
            <button onClick={() => setShowSuccessMsg(true)}>Confirm</button>
            <button onClick={onclose}>Cancel</button>
        </section>
    )
}

export default Checkout;