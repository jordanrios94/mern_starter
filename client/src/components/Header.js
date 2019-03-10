import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <div className="nav-wrapper container">
      <Link to="/" className="left brand-logo">
        Blog
      </Link>
      <ul className="right">
        <a href="/auth/login">Login</a>
      </ul>
    </div>
  </nav>
);

export default Header;
