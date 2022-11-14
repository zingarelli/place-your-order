import { fireEvent, render, screen } from "@testing-library/react";
import Checkout from ".";

test('Checkout component renders', () => {
    const cart = [
        {
            id: 0, 
            name: "Amazing Burger!", 
            price: 999,
            qty: 1, 
            promotions: [
                {
                    id: 0,
                    type: "BUY_X_GET_Y_FREE",
                    required_qty: 2,
                    free_qty: 1
                }
            ]
        }
    ];
    const closeCheckout = jest.fn();
    const clearCart = jest.fn();

    render(<Checkout cart={cart} closeCheckout={closeCheckout} clearCart={clearCart}  />);

    const checkoutHeader = screen.getByRole('heading');
    expect(checkoutHeader).toBeInTheDocument();
})

// TODO: how to turn this test to be more generic and less hard-coded?
describe('When Checkout component renders', () => {
    beforeEach(() => {
        const cart = [
            {
                id: 0, 
                name: "Amazing Burger!", 
                price: 999,
                qty: 2, 
                promotions: [
                    {
                        id: 0,
                        type: "BUY_X_GET_Y_FREE",
                        required_qty: 2,
                        free_qty: 1
                    }
                ]
            }, 
            {
                id: 1, 
                name: "Boring Fries!", 
                price: 199,
                qty: 1, 
                promotions: []
            }
        ];
        const closeCheckout = jest.fn();
        const clearCart = jest.fn();
    
        render(<Checkout cart={cart} closeCheckout={closeCheckout} clearCart={clearCart}  />);
    })

    test('Cart items are displayed', () => {
        const item1 = screen.queryByText('Amazing Burger!');
        const item2 = screen.queryByText('Boring Fries!');
        expect(item1).toBeInTheDocument();
        expect(item2).toBeInTheDocument();
    })
    
    // TODO: how to check values from a React state object inside the component?
    // test("Prices for items in the cart are calculated", () => {
    //     const total = screen.queryByText('21.97');
    //     const discount = screen.queryByText('9.99');
    //     const payable = screen.queryByText('11.98');
    //     expect(total).toBeInTheDocument();
    //     expect(discount).toBeInTheDocument();
    //     expect(payable).toBeInTheDocument();
    // })
})
