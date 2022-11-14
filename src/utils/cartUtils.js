import { getProductById } from "./apiUtils";

/**
 * Get item information and add it to the cart.
 * If the item is already in cart, update its quantity
 * @param {*} cart - array of products in cart
 * @param {*} id - id of the product
 * @returns cart updated
 */
export async function addToCart(cart, id) {
    const itemInCart = isItemInCart(cart, id);
    
    // if item already in cart, only update its quantity
    if (itemInCart) {
        return updateCart(cart, id);
    }
    else {
        const item = await getProductById(id);
        item.qty = 1; 
        return [...cart, item];
    } 
}

/**
 * Remove a product from the cart
 * @param {*} cart - array of products in cart
 * @param {*} id - id of the product
 * @returns cart updated
 */
export function removeFromCart(cart, id) {
    return cart.filter(item => item.id !== id);
}

/**
 * Update the quantity of an item in the cart
 * @param {*} cart - array of products in cart
 * @param {*} id - id of the product
 * @param {*} increase - operation to increase (default) or decrease the quantity of the item by one
 * @returns cart updated
 */
export function updateCart(cart, id, increase=true) {
    return cart.map(element => {
        if (element.id === id) {
            increase ? element.qty += 1 : element.qty -= 1;                
        }        
        return element;
    });
}

/**
 * Check if an item is in the cart
 * @param {*} cart - array of products in cart
 * @param {*} id - id of the product
 * @returns true if the item is in the cart, false otherwise
 */
export function isItemInCart(cart, id) {
    return cart.find((element) => element.id === id);
}