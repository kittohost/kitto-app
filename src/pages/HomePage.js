import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Kitto Hosting Box</h1>
        <p>Elegant hosting essentials for short-term rentals</p>
      </header>

      <section className="products">
        <div className="box">
          <h2>Welcome Box</h2>
          <p>Beautifully curated first impression kit</p>
        </div>
        <div className="box">
          <h2>Essentials Box</h2>
          <p>Everything your guest might need, in one place</p>
        </div>
        <div className="box">
          <h2>Luxury Box</h2>
          <p>Upscale touches for boutique stays</p>
        </div>
        <div className="box">
          <h2>Eco Box</h2>
          <p>Sustainable items with style</p>
        </div>
      </section>

      <footer>
        <p>© 2025 Kitto. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
