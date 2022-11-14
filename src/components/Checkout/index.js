import { useState, useEffect } from "react";
import { penniesToPounds } from '../../utils/currencyUtils';
import { calculateOrder } from '../../utils/orderUtils';
import styles from './Checkout.module.css'

/**
 * Modal that shows items selected by the user and total values of the order
 * (total order, discounts and total payable)
 * @param {*} cart - array of products in cart
 * @param {*} closeCheckout - function to close the modal 
 * @param {*} clearCart - function to empty the cart (when the user confirms the order)
 * @returns a checkout component
 */
function Checkout({ cart, closeCheckout, clearCart }) {
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [orderValues, setOrderValues] = useState({
        grossValue: 0,
        discount: 0,
        netValue: 0
    });

    // calculate order's total whenever list of items in cart changes
    useEffect(() => {
        setOrderValues(calculateOrder(cart));
    }, [cart])

    // for now, just show a message, empty the cart and close the modal
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
                <p className={styles.checkoutMessage}>Your order has been sent. Thank you!</p>
                <p className={styles.checkoutMessage}>This window will close automatically.</p>
                </>
            )}
            {cart.length > 0 && (
                <>
                <h2>Please review your order</h2>  
                <div className={styles.checkoutList}>
                    {cart.map(item => (
                        <div key={item.id} className={styles.checkoutItem} >
                            <p><span>{item.qty}x</span>{item.name}</p>
                            <p>&#163; {penniesToPounds(item.price*item.qty)}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.checkoutValues}>
                    <p>Total:</p>
                    <p>&#163;{penniesToPounds(orderValues.grossValue)}</p>
                    <p className={styles.checkoutDiscount}>You save:</p>
                    <p className={styles.checkoutDiscount}>&#163;{penniesToPounds(orderValues.discount)}</p>
                    <p className={styles.checkoutPayable}>Total payable:</p>
                    <p className={styles.checkoutPayable}>&#163;{(orderValues.netValue)}</p>
                </div>
                <button className={styles.closeModal} onClick={closeCheckout}>X</button>
                <div className={styles.checkoutBtnContainer}>
                    <button className={styles.checkoutBtn} onClick={addOrder}>Confirm</button>
                    <button className={styles.checkoutBtn} onClick={closeCheckout}>Modify order</button>
                </div>
                </>
            )}
        </section>
    )
}

export default Checkout;