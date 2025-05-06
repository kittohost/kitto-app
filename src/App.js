import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BoxesPage from './pages/BoxesPage';
import StorePage from './pages/StorePage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/boxes" element={<BoxesPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
// This is the main entry point of the application. It sets up the routing for the app using React Router.