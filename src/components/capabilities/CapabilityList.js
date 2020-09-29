import React from 'react';

import Capability from './Capability';
import andrewgreens from '../../assets/sass/images/andrewgreens.jpg';
import audreygreens from '../../assets/sass/images/audreygreens.jpg';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      image: andrewgreens,
      heading: 'Andrew',
      description: 'Amateur botanist. Grower of food. Philosophy nerd. Surf rat. Will talk about plants & fungi longer than most people care to listen.',
      iconClass: 'fa-code',
    },
    {
      image: audreygreens,
      heading: 'Audrey',
      description: 'Green-thumbed movie buff. Loves making videos and tasty meals. Never hikes without a craft beer in her backpack. ',
      iconClass: 'fa-lock',
    }
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
