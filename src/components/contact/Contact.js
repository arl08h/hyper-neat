import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="three" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Get in touch</h2>
      <p>
        If you find our products tantalizing, intriguing or just plain delicious-looking please get in touch!
        We're always<br/> experimenting with new plant varieties, so give us a shout if you're interested in a personalized order.
        Open to all requests!
      </p>
      <div className="split style1">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;
