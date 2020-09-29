import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="two" className="wrapper style2 fade-up">
    <div className="inner">
      <h2>Who we are</h2>
      <p>
        A rag-tag group of plant enthusiasts who love to grow the highest quality greens for their community.
        We're committed to great service and fostering relationships with chefs, business owners and consumers alike.
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      <ul className="actions">
        <li>
          
        </li>
      </ul>
    </div>
  </section>

export default Capabilities;
