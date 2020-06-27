import React from 'react';


import micro from '../../images/micro.jpeg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: micro,
      heading: 'Sed ipsum dolor',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: micro,
      heading: 'Feugiat consequat',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: micro,
      heading: 'Ultricies aliquam',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: micro,
      heading: 'Ultricies aliquam',
      description: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="" className="wrapper ">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
