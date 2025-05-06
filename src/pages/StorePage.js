// StorePage.js (With Cart functionality)
import React, { useState } from 'react';
import './StorePage.css';

const initialBoxes = [
  {
    id: 1,
    name: 'Kitto Essential Box',
    description: 'Perfect for new hosts – towels, sheets, toiletries & more.',
    price: 89,
    image: 'https://via.placeholder.com/250x180.png?text=Essential+Box',
  },
  {
    id: 2,
    name: 'Kitto Premium Box',
    description: 'Luxury items for a boutique feel – spa towels, candles, and organic soap.',
    price: 149,
    image: 'https://via.placeholder.com/250x180.png?text=Premium+Box',
  },
  {
    id: 3,
    name: 'Kitto Cleaning Box',
    description: 'Everything you need to clean & refresh your space between guests.',
    price: 69,
    image: 'https://via.placeholder.com/250x180.png?text=Cleaning+Box',
  },
  {
    id: 4,
    name: 'Kitto Welcome Box',
    description: 'A warm first impression – snacks, wine, guidebook, and a personal note.',
    price: 59,
    image: 'https://via.placeholder.com/250x180.png?text=Welcome+Box',
  },
];

const StorePage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (box) => {
    setCart([...cart, box]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="store-page">
      <h1>Our Hosting Boxes</h1>
      <div className="product-grid">
        {initialBoxes.map((box) => (
          <div key={box.id} className="product-card">
            <img src={box.image} alt={box.name} />
            <h3>{box.name}</h3>
            <p>{box.description}</p>
            <p className="price">${box.price}</p>
            <button onClick={() => addToCart(box)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>{item.name} - ${item.price}</li>
              ))}
            </ul>
            <p className="total">Total: ${getTotal()}</p>
            <button className="checkout">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default StorePage;
