import React from 'react';
import './navbar.css';
import { VscMenu } from 'react-icons/vsc';
import { VscAccount } from 'react-icons/vsc';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="hamburguer">
        <VscMenu className="hamburguer" />
      </div>
      <div className="user">
        <VscAccount className="user"/>
      </div>
    </nav>
  );
}

export { NavBar };
