import React from 'react';
import './home.css';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  return (
    <div>
      <Navbar className="navbar">
        <Navbar.Brand className="navbar-brand" href="/">SenseFlix</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Home;
