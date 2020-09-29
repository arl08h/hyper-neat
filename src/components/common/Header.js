import React from 'react';
import { Link } from 'gatsby';

import '../../assets/sass/main.scss';

const Header = () => (
  <header id="header">
    <Link className="title" to="/">
      Neat Greens
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/generic">About Us</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
