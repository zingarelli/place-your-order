import { fireEvent, render, screen } from "@testing-library/react";
import ProductsList from ".";

test('ProductsList component renders', () => {
    const products = [
        {id: 0, name: 'Product 1',price: 100},
        {id: 2, name: 'Product 2',price: 400}
    ];

    const cart = [];

    render(<ProductsList products={products} cart={cart} setCart={jest.fn()} />);

    const menuHeader = screen.getByRole('heading');
    expect(menuHeader).toBeInTheDocument();
})

test('When an item is clicked and it is already in cart, it should increase its quantity', () => {
    const products = [
        {id: 0, name: 'Product 1', price: 100},
        {id: 2, name: 'Product 2', price: 400}
    ];

    const cart = [{id: 0, name: "Product 1", qty: 1}];

    render(<ProductsList products={products} cart={cart} setCart={jest.fn()} />);

    const addBtn = screen.getAllByText('I want this');
    
    //adding the first item
    fireEvent.click(addBtn[0]);
    expect(cart[0].qty).toEqual(2);
})

// TODO: not working. Probably some problem with stat management. Use enzyme, recoil, mock state?
// test('When an item is clicked, it should be added to the cart', () => {
//     const products = [
//         {id: 0, name: 'Product 1', price: 100},
//         {id: 2, name: 'Product 2', price: 400}
//     ];

//     const cart = [];

//     render(<ProductsList products={products} cart={cart} setCart={jest.fn()} />);

//     const addBtn = screen.getAllByText('I want this');
    
//     //adding the first item
//     fireEvent.click(addBtn[0]);
//     expect(cart).toHaveLength(1);
// })