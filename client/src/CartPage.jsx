import { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 1, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, quantity: 1, image: 'product2.jpg' },
    // Add more products as needed
  ]);

  const [couponCode, setCouponCode] = useState('');
  const taxRate = 0.1; // 10%
  const deliveryCharge = 5;

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * taxRate;
  };

  const calculateTotal = () => {
    let total = calculateSubtotal() + calculateTax() + deliveryCharge;

    // Apply coupon code discount if applicable
    if (couponCode === 'WEWILLWIN') {
      total *= 0.5; // 50% discount
    }

    return total;
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const applyCoupon = () => {
    // Implement coupon logic here
    if (couponCode === 'WEWILLWIN') {
      console.log('Coupon "WEWILLWIN" applied! You get 50% off!');
    } else {
      console.log('Invalid coupon code');
    }
  };
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="product-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="product-details">
              <span>{item.name}</span>
              <span>Rs. {item.price}</span>
              <div className="quantity-section">
                <label>Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                />
              </div>
            </div>
            <span>Rs. {item.price * item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>Rs. {calculateSubtotal()}</span>
        </div>
        <div className="tax">
          <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
          <span>Rs. {calculateTax()}</span>
        </div>
        <div className="delivery-charge">
          <span>Delivery Charge:</span>
          <span>Rs. {deliveryCharge}</span>
        </div>
        <div className="coupon-section">
          <label>Coupon Code:</label>
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button onClick={applyCoupon}>Apply Coupon</button>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>Rs. {calculateTotal()}</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
