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

npm -v;
// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1>Welcome to Kitto</h1>
        <p>Your guests deserve more than just a clean bed.  
           They deserve an experience.</p>
        <Link to="/boxes">
          <button className="explore-btn">Explore Hosting Boxes</button>
        </Link>
      </div>
      <div className="home-image"></div>
    </div>
  );
}
// src/pages/HomePage.css
home-wrapper
  display: flex;
  flex-direction;
  align-items;
  justify-content;
  height: 100;
  background-color ;

home-content 
  text-align ;
  margin-bottom;

home-content 
  font-size;
  margin-bottom ;

home-content 
  font-size1;
  margin-bottom;

explore-btn 
  padding: 10 ;
  font-size;
  background-color ;
  color: white;
  border: none;
  border-radius;
  cursor: pointer;

explore-btn 
  background-colorgb(103, 164, 112);
