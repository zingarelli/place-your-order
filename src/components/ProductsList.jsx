import { addToCart } from '../utils/cartUtils';
import { penniesToPounds } from '../utils/currencyUtils';

/**
 * List of products available to be added to the cart
 * @param {*} list - array of products 
 * @param {*} cart - products in cart
 * @param {*} setCart - function to update cart 
 * @returns a list of products
 */
function ProductsList({ list, cart, setCart }) {
    
    function handleClick(id) {
        addToCart(cart, id)
            .then(cartUpdated => setCart(cartUpdated))
            .catch(err => console.log(err));
    }

    return (
        <section>
            <h2>Please choose your items:</h2>
            {list.length === 0 && (
                <p>There are no items to show.</p>
            )}
            {list.map( product => {
                return (          
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>&#163; {penniesToPounds(product.price)}</p>
                    <button onClick={() => handleClick(product.id)}>I want this</button>
                </div>
                )
            })}
        </section>        
    )
}

export default ProductsList;