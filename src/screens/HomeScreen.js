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

import heroImage1 from "../assets/images/heroImage1.jpg";
// import meet from "../assets/images/meet.jpg";
import surface from "../assets/images/surface.jpg";
import Transformation from "../assets/images/transformation.png";

const clients = [
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png ",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463555/download_1_jtz8fk.png",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463553/Total_1_a4a9tf.png",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463556/1519903944144_1_hqdvsa.png"
];

const solutions = [
  {
    title: "Digital Transformation",
    image: Transformation
  },
  {
    title: "Enterprise Software",
    image: Transformation
  },
  {
    title: "Cloud Technology",
    image: Transformation
  }
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
          totalSlides={3}
          className="carousel"
          isPlaying={true}
          interval={5000}
          dragEnabled={true}
          infinite={true}
        >
          {
            <ButtonBack className="homeslide-back" onClick={slideBack}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="homeslide-icon"
              />
            </ButtonBack>
          }
          {
            <ButtonNext className="homeslide-next" onClick={slideFront}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="homeslide-icon"
              />
            </ButtonNext>
          }

          <Slider>
            <Slide index={0} className="homeskide-slide">
              <h1 className={animate ? "homeslide-title" : "homeslide-title1"}>
                Custom IT Solutions For Your Business
              </h1>
              <p className="homeslide-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
                <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div className="home_btn_group">
                <Link to="/contact">
                  <button className="homeslide-button">Learn more</button>
                </Link>
                <Link to="/contact">
                  <button className="homeslide-button">Get in touch</button>
                </Link>
              </div>
              <img
                src={heroImage1}
                width="100%"
                alt=""
                className="homeslide-img"
              />
            </Slide>
            <Slide index={0} className="homeskide-slide">
              <h1 className={animate ? "homeslide-title" : "homeslide-title1"}>
                Microsoft Dynamics & Cloud Technologies
              </h1>
              <p className="homeslide-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
                <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <div className="home_btn_group">
                <Link to="/contact">
                  <button className="homeslide-button">Learn more</button>
                </Link>
                <Link to="/contact">
                  <button className="homeslide-button">Get in touch</button>
                </Link>
              </div>
              <img
                src={heroImage1}
                width="100%"
                alt=""
                className="homeslide-img"
              />
            </Slide>
            <Slide index={2} className="homeskide-slide">
              <h1 className={animate ? "homeslide-title" : "homeslide-title1"}>
                Build Agile Business Processes
              </h1>
              {/*<p className={animate ? "homeslide-body2" : "homeslide-body"}>*/}
              <p className="homeslide-body">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
                <br /> Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>

              <div className="home_btn_group">
                <Link to="/contact">
                  <button className="homeslide-button">Learn more</button>
                </Link>
                <Link to="/contact">
                  <button className="homeslide-button">Get in touch</button>
                </Link>
              </div>
              <img
                src={heroImage1}
                width="100%"
                alt=""
                className="homeslide-img"
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>

      <div className="home-info">
        <div className="home-info-section">
          <div className="home-info-container">
            <h2>Technological Business Transformation</h2>
            <p className="home-info-container-body">
              CimpliDigital is an innovative IT solutions company offering
              advanced technological developments which provides enterpises with
              solutions that improve productivity increase profitability, reduce
              complexities & cost.
            </p>
            <p className="home-info-container-body">
              We provide proven solutions using Microsoft products such as
              Dynamics 365, Azure, SharePoint, Power Apps, Office 365 & other IT
              Solutions beyond Microsoft Products to improve business systems
              all across Africa.
            </p>
            <p className="home-info-container-body">
              We provide a complete end-to-end project implementation from
              design to technical support, even managed services
            </p>
          </div>
          <div className="home-info-image-background" />

          <div className="home-info-image">
            <img src={surface} alt="" />
          </div>
        </div>
      </div>

      <div className="home-solutions">
        <h1>Our Solutions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
          fusce sodales tempor, augue facilisis enim, ipsum turpis. Turpis lorem
          vitae venenatis, tempus, purus volutpat volutpat.
        </p>
        <div className="solutions-container">
          {solutions.map((el, i) => (
            <div key={i} className="solutions-group">
              <img
                src={el.image}
                alt=""
                style={{ width: 50, height: 50, paddingTop: 30 }}
              />
              <p>{el.title}</p>
            </div>
          ))}
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
