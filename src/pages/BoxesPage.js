import React from 'react';
import './BoxesPage.css';

export default function BoxesPage() {
  return (
    <div className="boxes-page">
      <h1>Explore Our Host Boxes</h1>
      <ul className="box-list">
        <li>🟢 Essentials Box – Everything you need, nothing you don’t.</li>
        <li>🕍 Kosher Box – Halachically ready for Shabbat & daily hosting.</li>
        <li>💎 Luxury Box – Premium design & elegant details.</li>
        <li>🎨 Creativity Box – Add a personal touch, full of surprises.</li>
      </ul>
    </div>
  );
}
