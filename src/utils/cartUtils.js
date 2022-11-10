import { penniesToPounds } from "./currencyUtils";

// get total value, discounts and net value for the order
export function calculateOrder(cart){
    let grossValue = 0;
    let discount = 0;
    // TODO: update total and discount for items that've changed, instead of recalculating the entire list
    cart.forEach(item => {
        grossValue += item.price * item.qty;
        discount += calculateDiscounts(item);
    })
    // early conversion of netValue to pounds to avoid rounding errors
    const netValue = (parseFloat(penniesToPounds(grossValue)) - parseFloat(penniesToPounds(discount))).toFixed(2);
    return {grossValue, discount, netValue};
}

// accumulate discounts of every available promotion for the item
function calculateDiscounts(item) {
    let discount = 0;
    item.promotions.forEach(promotion => {
        discount += applyPromotion(promotion, item);
    })
    return discount;
}

// calculate the discount value of a given promotion
function applyPromotion(promotion, item) {
    let itemQty = parseInt(item.qty);
    let itemPrice = parseInt(item.price);
    let promotionRequiredQty = 0;
    let promotionFreeQty = 0;
    let promotionPrice = 0;
    let multiples = 0; // how many times the same promotion will be applied

    switch (promotion.type) {
        case 'BUY_X_GET_Y_FREE':
            promotionRequiredQty = parseInt(promotion.required_qty);
            promotionFreeQty = parseInt(promotion.free_qty);
            multiples =  Math.trunc(itemQty / promotionRequiredQty);
            const itemFreeQty = promotionFreeQty * multiples;
            return itemFreeQty * itemPrice;        

        case 'QTY_BASED_PRICE_OVERRIDE':
            promotionRequiredQty = parseInt(promotion.required_qty);
            promotionPrice = parseInt(promotion.price);
            multiples = Math.trunc(itemQty / promotionRequiredQty);      
            
            const noPromotionPrice = itemPrice * promotionRequiredQty

            return (noPromotionPrice - promotionPrice) * multiples;

        case 'FLAT_PERCENT':
            const itemTotal = itemPrice * itemQty;
            const percent = parseInt(promotion.amount) / 100;
            return itemTotal * percent;

        default:
            console.log(`Need to implement promotion for '${promotion.type}'`);
            return 0;
    }
}