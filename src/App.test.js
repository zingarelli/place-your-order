import { render, screen } from '@testing-library/react';
import App from './App';

describe('When the App renders', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Menu should be displayed', () => {
    const menuText = screen.queryByText('Please choose your items');
    expect(menuText).toBeInTheDocument();
  });

  test('Basket shoud be displayed', () => {
    const cartText = screen.queryByText('Basket');
    expect(cartText).toBeInTheDocument();
  })

  test('Checkout modal should NOT be displayed', () => {
    const checkoutText = screen.queryByText('Please review your order');
    expect(checkoutText).not.toBeInTheDocument();
  })
})