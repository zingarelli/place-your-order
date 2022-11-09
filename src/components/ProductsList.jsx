import { getPriceInPounds } from '../utils/currencyUtils';
/**
 * List of products available to be added to the cart
 * @param {*} list - array of products 
 * @param {*} addToCart - cart state to be updated
 * @returns a list of products
 */
function ProductsList({ list, cart, setCart }) { 
    // get item information and add it to cart
    async function addToCart(id) {
        const itemInCart = isItemInCart(id);
        
        // if item already in cart, update its quantity
        if (itemInCart) {
            updateCart(itemInCart);
        }
        else {
            const item = await getProductById(id);
            item.qty = 1; 
            setCart([...cart, item]);
        } 
    }

    // update the quantity of an item in the cart
    function updateCart(item) {
        setCart(cart.map(element => {
            if (element.id === item.id) {
                element.qty += 1;                
            }
            return element;
        }));
    }

    function isItemInCart(id) {
        return cart.find((element) => element.id === id);
    }

    // TODO: add this function to an apiUtils
    // get data for a single product
    function getProductById(id) {
        const url = `/products/${id}`;
        const init = {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json'
          },
        };
        const request = new Request(url, init);
    
        const product = fetch(request)
          .then(resp => resp.json())
          .then(data => data)
          .catch(err => console.log(err));
    
        return product;
    }
    
    return (
        <section>
            <h2>Please choose your items:</h2>
            <ul>
                {list.map( product => {
                    return (          
                    <li key={product.id}>
                        <p>{product.name}</p>
                        <p>&#163; {getPriceInPounds(product.price)}</p>
                        <button onClick={() => addToCart(product.id)}>I want this</button>
                    </li>
                    )
                })}
            </ul>
        </section>        
    )
}

export default ProductsList;