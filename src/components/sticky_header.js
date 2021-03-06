import React from "react";
import "./sticky_header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt
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

function StickyHeader() {
  return (
    <div className="sticky_container">
      <div className="sticky_section">
        <div className="sticky_row">
          <div className="sticky_group">
            <FontAwesomeIcon icon={faPhone} className="sticky-icon" />
            <p to="/">054 135 6456</p>
          </div>
          <div className="sticky_group">
            <FontAwesomeIcon icon={faEnvelope} className="sticky-icon" />
            <p to="/">info@cimplidigita.com</p>
          </div>
          <div className="sticky_group">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="sticky-icon" />
            <p to="/">A37 Volta Estate, Off Spintex Rd. Accra</p>
          </div>
        </div>

        <div className="sticky_icons">
          {socials.map(el => (
            <div className="sticky-icon-block">
              <FontAwesomeIcon icon={el.icon} className="sticky-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StickyHeader;
