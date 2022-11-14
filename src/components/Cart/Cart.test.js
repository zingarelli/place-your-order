import { fireEvent, render, screen } from "@testing-library/react";
import Cart from './index'

describe('Cart behaviors', () => {

    test('render Cart component', () => {        
        const cart = [{id: 0, name: "item", qty: 1}]
        render(<Cart cart={cart} setCart={jest.fn()} />);

        const cartHeader = screen.getByRole('heading');
        expect(cartHeader).toBeInTheDocument();
    })

    test('When button to increase quantity of an item is clicked, its quantity should be increased by 1', () => {
        const cart = [{id: 0, name: "item", qty: 1}]
        render(<Cart cart={cart} setCart={jest.fn()} />);

        const increaseBtn = screen.getByText('+');
        fireEvent.click(increaseBtn);
        expect(cart[0].qty).toEqual(2);
    })  

    test('When button to decrease quantity of an item is clicked, its quantity should be decreased by 1', () => {
        const cart = [{id: 0, name: "item", qty: 2}]
        render(<Cart cart={cart} setCart={jest.fn()} />);

        const decreaseBtn = screen.getByText('-');
        fireEvent.click(decreaseBtn);
        expect(cart[0].qty).toEqual(1);
    }) 

    // TODO: not working. Probably some problem with state management. Use enzyme, recoil, mock state?
    // test('When button to decrease quantity of an item is clicked and its quantity is zeroed, item should be removed from cart', () => {
    //     const cart = [{id: 0, name: "item", qty: 1}, {id: 1, name: "item2", qty: 1}];
    //     render(<Cart cart={cart} setCart={jest.fn()} />);

    //     // decrease quantity of the first item (it should then be removed)
    //     const decreaseBtn = screen.getAllByText('-')[0];
    //     fireEvent.click(decreaseBtn);
    //     // console.log(cart);
    //     expect(cart).toHaveLength(1);
    // })

})