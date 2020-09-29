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
        <ul className="actions">
          <li style={{marginTop: -75, marginLeft: -4}}>
          <Link className="button" >
            <Scroll type="id" element="three">
              Contact Us
            </Scroll>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>

export default Feature;
/*<Link className="button" to={to.href}>
  {to.label}
</Link>*/