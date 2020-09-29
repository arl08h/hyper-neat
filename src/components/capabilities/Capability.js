import React from 'react';

import andrewgreens from '../../assets/sass/images/andrewgreens.jpg';
import audreygreens from '../../assets/sass/images/audreygreens.jpg';

const Capability = ({ image, heading, description, iconClass }) =>
  <section >
    <span className="image fit ">
      <img src={image} alt="" />
    </span>
    <h3>{heading}</h3>
    <p>{description}</p>
  </section>

export default Capability;
