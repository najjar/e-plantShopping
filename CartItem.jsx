import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleQuantityChange = (name, quantity) => {
    dispatch(updateQuantity({ name, quantity: parseInt(quantity) }));
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ color: '#555', fontSize: '1.1rem', marginTop: '20px' }}>
          Your cart is empty. Add some plants! 🌱
        </p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.name} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p style={{ color: '#2d6a4f', fontWeight: 'bold' }}>
                  ${item.price.toFixed(2)} each
                </p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <p style={{ marginTop: '6px', color: '#555' }}>
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="remove-btn" onClick={() => handleRemove(item.name)}>
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            Total: ${totalAmount.toFixed(2)}
          </div>

          <button className="checkout-btn">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItem;
