import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const clients = [
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png ",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463555/download_1_jtz8fk.png",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463553/Total_1_a4a9tf.png",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463556/1519903944144_1_hqdvsa.png",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463553/4_636633902869064999_1_ont7xc.png",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463575/image_1_o0w2db.png"
];

function HomeScreen() {
  const [width, setWidth] = useState(window.innerWidth);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  // console.log({ width });

  const slideFront = () => {
    setAnimate(true);
    console.log("slidefront", animate);
  };
  const slideBack = () => {
    setAnimate(false);
    console.log("slideback", animate);
  };

  return (
    <div className="homescreen">
      <div className="homescreen-carousel">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={width < 1000 ? 125 : 48}
          totalSlides={2}
          className="carousel"
        >
          {animate && (
            <ButtonBack className="homeslide-back" onClick={slideBack}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="homeslide-icon"
              />
            </ButtonBack>
          )}
          {!animate && (
            <ButtonNext className="homeslide-next" onClick={slideFront}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="homeslide-icon"
              />
            </ButtonNext>
          )}

          <Slider>
            <Slide index={0} className="homeskide-slide">
              <h1 className={animate ? "homeslide-title" : "homeslide-title1"}>
                Providing quality innovative building solutions
              </h1>
              <p className="homeslide-body">
                We provide innovative building solutions tailored to clients
                vision and goals across industrial, public buildings, commercial
                and infrastructure projects as well as high end residential
                projects.
              </p>
              <Link to="/contact">
                <button className="homeslide-button">Contact Us</button>
              </Link>
              <img
                // src="https://res.cloudinary.com/codeinstd/image/upload/v1610463803/image_vjy04q.png"
                src="https://res.cloudinary.com/codeinstd/image/upload/v1612782952/Hero_section_image_1_1_1_jcggoi.jpg"
                width="100%"
                alt=""
                className="homeslide-img"
              />
            </Slide>
            <Slide index={1} className="homeskide-slide">
              <h1 className="homeslide-title">Building World Class Designs</h1>
              <p className={animate ? "homeslide-body2" : "homeslide-body"}>
                We create inspiring spaces in whatever nature of projects or
                sector. We pride ourselves on providing tailored building
                solutions to meet the individual needs of our clients with an
                emphasis on quality, value and trust.
              </p>
              <Link to="/contact">
                <button
                  className={animate ? "homeslide-button2" : "homeslide-button"}
                >
                  Contact Us
                </button>
              </Link>
              <img
                // src="https://res.cloudinary.com/codeinstd/image/upload/v1610463681/image_3_jgnn3d.png  "
                src="https://res.cloudinary.com/codeinstd/image/upload/v1612782853/Hero_section_image_2_1_zweznp.jpg"
                width="100%"
                alt=""
                className="homeslide-img"
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>

      <div className="home-info">
        <div className="home-info-container">
          <h1>
            We deliver top notch and convenient construction solution designs
          </h1>

          <div className="home-info-group">
            <img
              src="https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_7_aw0iaf.png"
              alt=""
            />
            <div className="home-info-group-text">
              <p className="home-info-group-text-title">
                100% guaranteed project completion
              </p>
              <p>
                we build safe comfortable and luxury projects to completion with
                focus on quality
              </p>
            </div>
          </div>

          <div className="home-info-group">
            <img
              src="https://res.cloudinary.com/codeinstd/image/upload/v1610463556/Group_2_ujdpys.png "
              alt=""
            />
            <div className="home-info-group-text">
              <p className="home-info-group-text-title">No hidden fees</p>
              <p>
                There are no hidden costs. We deliver on agreed budgets with
                premium value
              </p>
            </div>
          </div>

          <div className="home-info-group">
            <img
              src="https://res.cloudinary.com/codeinstd/image/upload/v1610464422/Group_3_jktqws.png"
              alt=""
            />
            <div className="home-info-group-text">
              <p className="home-info-group-text-title">Timeline</p>
              <p>We put premium to timeline service delivery on projects</p>
            </div>
          </div>
        </div>

        <div className="home-info-image">
          <img
            src="https://res.cloudinary.com/codeinstd/image/upload/v1612783024/feature_section_image_cvrlup.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="clients-section">
        <h1>Our Clients</h1>
        <div className="clients-img-group">
          {clients.map((client, index) => (
            <img key={index} src={client} alt="" />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
