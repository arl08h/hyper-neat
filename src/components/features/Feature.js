import React from 'react';
import { Link } from 'gatsby';

const Feature = ({href, image, heading, description, to}) =>
  <section >
    <a href={href} className="image" alt="image">
      <img src={image} className="image smaller" alt="" data-position="center center" />
    </a>
    <div className="content">
      <div className="inner">
        <h3>{heading}</h3>
        <p>{description}</p>
        <ul className="actions">
          <li>
          </li>
        </ul>
      </div>
    </div>
  </section>

export default Feature;
/*<Link className="button" to={to.href}>
  {to.label}
</Link>*/
