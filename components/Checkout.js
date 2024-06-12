import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    paymentMethod: 'Credit Card', // Default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit form data (e.g., send to server, process payment, etc.)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      fullName: '',
      address: '',
      email: '',
      paymentMethod: 'Credit Card', // Reset payment method
    });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default Checkout;
