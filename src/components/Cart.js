import React from 'react';

function Cart({ cartItems, setCartItems }) {
  const updateItemQuantity = (index, quantity) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity } : item
    );
    setCartItems(updatedItems); // update cart in parent (App.js)
  };

  const removeItemFromCart = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems); // update cart in parent (App.js)
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price} x {item.quantity}
            <button onClick={() => updateItemQuantity(index, item.quantity + 1)}>+</button>
            <button onClick={() => updateItemQuantity(index, item.quantity - 1)}>-</button>
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total: ₹{calculateTotal()}</h3>
      </div>
    </div>
  );
}

export default Cart;
