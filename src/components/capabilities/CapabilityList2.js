import React from 'react';

import Capability from './Capability';

const CapabilityList2 = () => {
  const CAPABILITIES = [
    {
      heading: 'der der der',
      description: 'T convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-code',
    },
    {
      heading: 'Morem ipsum amet',
      description: 'U convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-lock',
    },
    {
      heading: 'doy doy doy',
      description: 'R convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
      iconClass: 'fa-code',
    },
    {
      heading: 'Morem ipsum amet',
      description: 'D convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
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

export default CapabilityList2;
