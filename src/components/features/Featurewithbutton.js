import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../common/Scroll';

const Feature = ({href, image, heading, description, to}) =>
  <section >
    <a href={href} className="image" alt="image">
      <img src={image} alt="" data-position="center center" />
    </a>
    <div className="">
      <div className="inner">
        <ul className="actions smaller" >
          <li >
            <Scroll type="id" element="three">
            <a href="#one" className="button">
              Contact Us
            </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </div>
  </section>

export default Feature;
/*<Link className="button" to={to.href}>
  {to.label}
</Link>*/
