import { getProductById } from "./apiUtils";

// get item information and add it to cart
export async function addToCart(cart, id) {
    const itemInCart = isItemInCart(cart, id);
    
    // if item already in cart, only update its quantity
    if (itemInCart) {
        return updateCart(cart, itemInCart);
    }
    else {
        const item = await getProductById(id);
        item.qty = 1; 
        return [...cart, item];
    } 
}

// update the quantity of an item in the cart
export function updateCart(cart, item) {
    return cart.map(element => {
        if (element.id === item.id) {
            element.qty += 1;                
        }
        return element;
    });
}

export function isItemInCart(cart, id) {
    return cart.find((element) => element.id === id);
}