import React from 'react';
import Scroll from '../common/Scroll';

import icromat6 from '../../assets/sass/images/icromat6.svg';


const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner phone">
      <h1>Neat Greens</h1>
      <p>
        We Grow{' '}
        <Scroll type="id" element="bintro">
          <a >
            Microgreens
          </a>
        </Scroll>
        &nbsp;
        <br />
         pretty{' '}
        <Scroll type="id" element="two">
          <a >
            NEAT
          </a>
        </Scroll>
          {' '} right?
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="bintro">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
      </div>
  </section>



export default Introduction;
