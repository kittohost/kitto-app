import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to Kitto</h1>
        <p>Curated Host Boxes for Short-Term Rental Hosts</p>
      </header>

      <section className="boxes">
        <div className="box">Essentials Box</div>
        <div className="box">Premium Welcome Kit</div>
        <div className="box">Eco-Friendly Starter</div>
        <div className="box">Luxury Touch</div>
      </section>
    </div>
  );
}

export default App;
