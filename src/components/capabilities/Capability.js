import React from 'react';

import icrogrowthphase from '../../assets/sass/images/icrogrowthphase.svg';

const Capability = ({ heading, description, iconClass }) =>
  <section >
    <span className="image fit ">
      <img src={icrogrowthphase} alt="" />
    </span>
    <h3>{heading}</h3>
    <p>{description}</p>
  </section>

export default Capability;
