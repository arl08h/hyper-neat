import React from 'react';


import beatphoto2 from '../../images/beatphoto2.jpeg';
import radishphoto2 from '../../images/radishphoto2.jpeg';
import peaphoto2 from '../../images/peaphoto2.jpeg';
import sunflowerphoto3 from '../../images/sunflowerphoto3.jpeg';

import Feature from './Feature';
import Featurewithbutton from './Featurewithbutton';

import { Link } from 'gatsby';

const Features = (href, to) => {
  const FEATURES = [
    {
      href: '/#',
      image: peaphoto2,
      heading: 'Peas',
      description: 'Bright flavor, crunchy texture, with a tall branchlike aesthetic. Perfect topping for a nuanced salad.',
      /*to: {
        href: '/peas',
        label: 'Learn more',
      },*/
    },
    {
      href: '/#',
      image: sunflowerphoto3,
      heading: 'Sunflowers',
      description: 'A firm and pure look, with a nutty taste and crunchy texture.',
      /*to: {
        href: '/sunflowers',
        label: 'Learn more',
      },*/
    },
    {
      href: '/#',
      image: beatphoto2,
      heading: 'Beats',
      description: 'Tiny, vibrant pink stalks, and a deep green leaf. Subtle beat flavor',
      /*to: {
        href: '/beats',
        label: 'Learn more',
      },*/
    },
    {
      href: '/#',
      image: radishphoto2,
      heading: 'Radishes',
      description: 'Clover-like leaf shape, spicy finish. Cooked, radish microgreens blend well with umami flavor.',
      /*to: {
        href: '/radishes',
        label: 'Learn more',
      },*/
    },
    {
      href: '/#',
      heading: "Have a microgreen you'd like us to grow?",
      description: 'Ask about custom orders!',
      to: {
        href: '/radishes',
        label: 'Contact Us',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="" className="wrapper ">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
       <Featurewithbutton/>
    </section>
  );
}

export default Features;
