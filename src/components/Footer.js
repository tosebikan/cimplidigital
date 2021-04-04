import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUsers,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faFacebookF,
    link: ""
  },
  {
    icon: faInstagram,
    link: ""
  },
  {
    icon: faWhatsapp,
    link: ""
  },
  {
    icon: faLinkedinIn,
    link: ""
  }
];

function Footer() {
  return (
    <div>
      <hr className="home-hr" />
      <footer className="footer">
        {/*  <img
          src="https://res.cloudinary.com/codeinstd/image/upload/v1610463552/Logo_dtpcyl.png"
          alt=""
        />*/}
        <h2>CimpliDigital</h2>
        <div className="footer-links">
          <div className="footer-group">
            <div className="footer-contact-group">
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <p>+234 700 555 8888</p>
            </div>
            <div className="footer-contact-group">
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <p>+234 1 229 5555 </p>
            </div>
          </div>

          <div className="footer-group">
            <div className="footer-contact-group">
              <FontAwesomeIcon icon={faUsers} className="footer-icon" />
              <p>Our Partners</p>
            </div>
            <div className="footer-contact-group">
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <a href="/">contact@siriusconstruction.com</a>
            </div>
          </div>

          <div className="footer-social-group">
            <p>Follow on social media</p>
            <div className="footer-social-container">
              {socials.map((social, index) => (
                <div className="footer-social-icon-container" key={index}>
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="footer-icon-social"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
