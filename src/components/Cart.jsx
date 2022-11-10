import { useState, useEffect } from 'react';
import { penniesToPounds } from '../utils/currencyUtils';
import { calculateOrder } from '../utils/cartUtils';

function Cart({ list }) {

    const [orderValues, setOrderValues] = useState({
        grossValue: 0,
        discount: 0,
        netValue: 0
    });

    // calculate order's total whenever list of items in cart change
    useEffect(() => {   
        setOrderValues(calculateOrder(list));
    }, [list])

    return (
        <aside>
            <h2>Cart</h2>
            {list.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>&#163; {penniesToPounds(item.price)}</p>
                    <p>{item.qty}</p>
                </div>
            ))}
            {list.length > 0 && (
                <div>
                    <p>Total: &#163;{penniesToPounds(orderValues.grossValue)}</p>
                    <p>You save: &#163;{penniesToPounds(orderValues.discount)}</p>
                    <p>You pay: &#163;{(orderValues.netValue)}</p>
                </div>
            )}
        </aside>
    )
}

export default Cart;