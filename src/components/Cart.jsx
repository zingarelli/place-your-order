import { getPriceInPounds } from '../utils/currencyUtils';

function Cart({ list }) {
    return (
        <aside>
            <h2>Cart</h2>
            {list.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>&#163; {getPriceInPounds(item.price)}</p>
                    <p>{item.qty}</p>
                </div>
            ))}
        </aside>
    )
}

export default Cart;