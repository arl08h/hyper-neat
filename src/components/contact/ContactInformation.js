import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      <li>
        <h3>Address</h3>
        <span>
          North Park
          <br />
          San Diego, CA
        </span>
      </li>
      <li>
        <h3>Email</h3>
        <a href="mailto:andrew@neatgreens.com">andrew@neatgreens.com</a>
      </li>
      <li>
        <h3>Phone</h3>
        <span>(858) 633-3440‬</span>
      </li>
      <li>
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="https://www.facebook.com/neatgreens" className="fa-facebook" target="_blank">
              <span className="label">Facebook</span>
            </a>

          </li>
          <li>
            <a href="https://www.instagram.com/neatgreens/" className="fa-instagram" target="_blank">
              <span className="label">Instagram</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
