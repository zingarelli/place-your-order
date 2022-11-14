/**
 * Convert pennies to pounds
 * @param {*} pennies - price expressed in pennies 
 * @returns string representing a number with two digits after the decimal point
 */
export function penniesToPounds(pennies) {
    return (parseInt(pennies)/100).toFixed(2);
}