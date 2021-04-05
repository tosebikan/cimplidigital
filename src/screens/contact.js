import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
  // faHeart,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import "./contact.css";

import Footer from "../components/Footer";
import MyMap from "../components/MyMap";

function Contact() {
  const position = [5.629175, -0.076558];
  const [status, setStatus] = useState("");

  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };
  return (
    <div className="contact-container">
      <div>
        <div className="contact-top">
          <div className="map-container">
            <MyMap
              center={position}
              position={position}
              text={"18 junction spintex"}
            />
          </div>
          <div className="contact-form-container">
            <form
              className="contact-form"
              onSubmit={submitForm}
              action="https://formspree.io/myynqvwo"
              method="POST"
            >
              <div className="contact-form-top-section">
                <div className="contact-form-item">
                  <label>First Name</label>
                  <input type="text" name="fname" required />
                </div>
                <div className="contact-form-item">
                  <label>Last Name</label>
                  <input type="text" name="lname" required />
                </div>
              </div>
              <div className="contact-form-top-section">
                <div className="contact-form-item">
                  <label>Email</label>
                  <input type="email" name="name" required />
                </div>
                <div className="contact-form-item">
                  <label>Phone</label>
                  <input type="email" name="name" required />
                </div>
              </div>

              <div className="contact-message-item">
                <label>Message</label>
                <textarea name="message" required />
              </div>

              {status === "SUCCESS" ? (
                <p>Thanks!</p>
              ) : (
                <div className="submit_button_container">
                  <button className="submit_contact_button">Submit</button>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="contact-icon message-icon"
                  />
                </div>
              )}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>

            <div className="contact-info-group">
              <div className="contact-info-item">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="contact-icon message-icon"
                />
                {/*<a href="mailto:customercare@richhomesgh.com">*/}
                <p className="contact-info-bottom ">
                  customercare@cimplidigital.com
                </p>{" "}
                {/* </a>*/}
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="contact-icon message-icon"
                />
                <a href="tel:+123456890">
                  <button className="contact-call  ">054 1356 456</button>
                </a>
                <a href="tel:+123456890">
                  <button className="contact-call ">054 1356 456</button>
                </a>
              </div>

              <div className="contact-info-item">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="contact-icon message-icon"
                />
                <p className="contact-info-bottom">
                  18 Junction Spintex, Accra
                </p>
              </div>
            </div>

            <div className="contact-info-section">
              <div className="contact-info-icons">
                <div className="social-contact-icon-container">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="social-contact-icon"
                  />
                </div>
                <div className="social-contact-icon-container">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="social-contact-icon"
                  />
                </div>
                <div className="social-contact-icon-container">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="social-contact-icon"
                  />
                </div>
                <div className="social-contact-icon-container">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="social-contact-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
