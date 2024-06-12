import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  const [items, setItems] = useState([]);

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Calculate total price
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}

export default Cart;
