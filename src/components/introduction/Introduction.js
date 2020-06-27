import React from 'react';
import Scroll from '../common/Scroll';


import micro from '../../images/micro.jpeg';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
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
         and think that's pretty{' '}
        <Scroll type="id" element="two">
          <a >
            NEAT
          </a>
        </Scroll>
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
