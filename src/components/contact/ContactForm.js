import React from 'react';

const ContactForm = () =>
  <section>
  <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" />
        </div>
      </div>
      <ul className="actions">
        <li>
          <button className="button submit">
            Send Message
          </button>
        </li>
      </ul>
    </form>
  </section>

export default ContactForm;
