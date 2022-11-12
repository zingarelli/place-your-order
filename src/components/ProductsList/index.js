import styles from './ProductsList.module.css';
import { addToCart } from '../../utils/cartUtils';
import { penniesToPounds } from '../../utils/currencyUtils';

/**
 * List of products available to be added to the cart
 * @param {*} products - array of products 
 * @param {*} cart - products in cart
 * @param {*} setCart - function to update cart 
 * @returns a list of products
 */
function ProductsList({ products, cart, setCart }) {
    
    function handleCartUpdate(id) {
        addToCart(cart, id)
            .then(cartUpdated => setCart(cartUpdated))
            .catch(err => console.log(err));
    }

    return (
        <section className='menu'>
            <h2>Please choose your items</h2>
            <div className={styles.productsList}>
                {products.length === 0 && (
                    <p>There are no items to show.</p>
                )}
                {products.map( product => {
                    return (                 
                        <div key={product.id} className={styles.productCard}>
                            {/* <img src='https://via.placeholder.com/150' alt='image provided by placeholder.com' /> */}
                            <img src='https://cdn-icons-png.flaticon.com/512/737/737967.png' alt='Fast-food icons created by Freepik - Flaticon - https://www.flaticon.com/free-icons/fast-food' />
                            <p>{product.name}</p>
                            <p>&#163; {penniesToPounds(product.price)}</p>
                            <button className={styles.productBtn} onClick={() => handleCartUpdate(product.id)}>I want this</button>
                        </div> 
                    )
                })}
            </div> 
        </section>        
    )
}

export default ProductsList;