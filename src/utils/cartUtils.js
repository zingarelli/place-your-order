import { getProductById } from "./apiUtils";

// get item information and add it to cart
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

export function removeFromCart(cart, id) {
    return cart.filter(item => item.id !== id);
}

// update the quantity of an item in the cart
export function updateCart(cart, id, increase=true) {
    return cart.map(element => {
        if (element.id === id) {
            increase ? element.qty += 1 : element.qty -= 1;                
        }
        
        return element;
    });
}

export function isItemInCart(cart, id) {
    return cart.find((element) => element.id === id);
}