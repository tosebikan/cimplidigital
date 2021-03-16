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

function AboutScreen() {
  const [readFull, setReadFull] = useState(false);

  const fullText = () => {
    setReadFull(!readFull);
  };
  return (
    <div className="container">
      <div className="about-hero">
        <h1>About Sirius</h1>
      </div>

      <div className="about-overview">
        <h2>Overview</h2>
        <div
          className={
            !readFull ? "about-overview-group ellipsis" : "about-overview-group"
          }
        >
          <p onClick={fullText}>
            Sirius Construction Work is a bespoke building solutions provider
            with valuable experience across industries setup in Nigeria. We are
            focus on commerical build projects, residential build projects,
            infrastructure projects, public private partnership build projects
            and interior fit-out projects.. Through shared commitment,
            dedication and hardwork, we are fast becoming the chosen building
            partner for clients ing Nigeria. Here at Sirius Construction we
            understand that every build is bespoke. Every build presents its own
            challenges that require bespoke end-to-end solutions. We aim to
            navigate our clients through the building process happily,
            efficiently and effortlessly.
            <br />
            With over 17 years of experience, we bring with us a wealth of
            experience and knowledge, a vast network of suppliers and most
            importantly a very high level of craftmanship. We contract only the
            best trades people and the best quality materials so that your build
            stands the test of time.
          </p>
          <img
            src="https://res.cloudinary.com/codeinstd/image/upload/v1610464788/Mask_Group_odaoal.png"
            alt=""
          />
        </div>
      </div>

      <div className="about-value">
        <h2>Our Value</h2>
        <p className="values-body">
          Our core values drives our passion and desire to serve. Quality trust
          and value drives our planning and project management functions,
          collaborations, safety and professionalism ensures we deliver best of
          results always. Our six cores values are the centre piece if our
          business and we strive to always satisfy our customer in best possible
          ways.{" "}
        </p>

        <div className="about-values-container">
          {values.map(value => (
            <div className="value-card">
              <div className="value-title">
                <FontAwesomeIcon icon={value.icon} className="about-icon" />
                <h4>{value.title}</h4>
              </div>
              <p>{value.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutScreen;
