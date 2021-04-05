import React, { useState } from "react";
import "./AboutScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faStar,
  faThumbsUp,
  faUserFriends,
  faUserShield,
  faCertificate
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import heroImage1 from "../assets/images/heroImage1.jpg";

const values = [
  {
    icon: faHandsHelping,
    title: "Trust",
    body: "Honesty, transparency & reliability"
  },
  {
    icon: faStar,
    title: "Value",
    body:
      "We deliver what we promise, on time and budget delivering value at every project is core to us."
  },
  {
    icon: faThumbsUp,
    title: "Quality",
    body:
      "Quality is at the core of our business and it runs through our entire business processes."
  },
  {
    icon: faUserFriends,
    title: "Collaboration",
    body:
      "Colleagues, partners, suppliers, clients - everyone has a contribution to make, creating a culture of shared success"
  },
  {
    icon: faUserShield,
    title: "Safety",
    body:
      "To prevent injury on occupational ill health to anyone, who could be affected by our company operations, we do not comprise safety. "
  },
  {
    icon: faCertificate,
    title: "Professionalism",
    body: "We prime our business transactions on absolute professionalism"
  }
];

const services = [
  {
    image:
      "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png",
    title: "Digital Transformation",
    body: "Lorem ipsum dolor sit amet"
  },
  {
    image:
      "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png",
    title: "Digital Transformation",
    body: "Lorem ipsum dolor sit amet"
  },
  {
    image:
      "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png",
    title: "Digital Transformation",
    body: "Lorem ipsum dolor sit amet"
  },
  {
    image:
      "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png",
    title: "Digital Transformation",
    body: "Lorem ipsum dolor sit amet"
  },
  {
    image:
      "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png",
    title: "Digital Transformation",
    body: "Lorem ipsum dolor sit amet"
  },
  {
    image:
      "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png",
    title: "Digital Transformation",
    body: "Lorem ipsum dolor sit amet"
  }
];

function AboutScreen() {
  const [readFull, setReadFull] = useState(false);

  const fullText = () => {
    setReadFull(!readFull);
  };
  return (
    <div className="container">
      <div className="about-hero">
        <h1>We are a dynamic , responsible & Growing company </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <img src={heroImage1} alt="" className="about-hero-image" />
      </div>

      <div className="about_services">
        <div className="about_services_left">
          <h2>CimpliDigital</h2>
          <h1>Tech at its best</h1>
          <p>We provide the following services</p>
        </div>

        <div className="about_services_right">
          {services.map(el => (
            <div className="about_services_right_group">
              <div className="about_logo_container">
                <img src={el.image} alt="" />
              </div>

              <h2>{el.title}</h2>
              <p>{el.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-overview">
        <div
          className={
            !readFull ? "about-overview-group ellipsis" : "about-overview-group"
          }
        >
          {" "}
          <h2>The CimpliDigital Guarantee</h2>
          <p onClick={fullText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            placerat volutpat, aliquet venenatis eget habitasse feugiat.
            Porttitor habitasse metus, sagittis diam pharetra, quam ullamcorper
            ultricies. Turpis ipsum varius tincidunt praesent at enim sapien.
            Vel massa a consequat bibendum neque, accumsan a dignissim suscipit.
            Neque sit nisl eleifend mauris, sit. Mauris tristique interdum nibh
            quisque. Erat consequat elementum augue urna consequat vel mauris
            porttitor purus. Turpis tincidunt mattis nibh tortor rutrum odio
            nunc. Non massa viverra ac, nisi, neque interdum.
            <br />
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/codeinstd/image/upload/v1610464788/Mask_Group_odaoal.png"
          alt=""
        />
      </div>

      <div className="about-value">
        {/*<div className="about-values-container">
          {values.map(value => (
            <div className="value-card">
              <div className="value-title">
                <FontAwesomeIcon icon={value.icon} className="about-icon" />
                <h4>{value.title}</h4>
              </div>
              <p>{value.body}</p>
            </div>
          ))}
        </div>*/}
      </div>
      <Footer />
    </div>
  );
}

export default AboutScreen;
