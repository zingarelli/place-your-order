// convert pennies to pounds with two digits after the decimal point
export function penniesToPounds(pennies) {
    return (parseInt(pennies)/100).toFixed(2);
}