import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome!</h1>
      <div className="row">
        <div className="column">
          <h2>Special Offers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        <div className="column">
          <h2>New Arrivals</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <h2>Featured Products</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  );
}

export default App;
