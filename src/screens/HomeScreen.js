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
// import heroImage2 from "../assets/images/heroimage2.jpg";
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
                We provide Custom IT Solutions for your business
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
            <Slide index={1} className="homeskide-slide">
              <h1 className={animate ? "homeslide-title" : "homeslide-title1"}>
                We provide Custom IT Solutions for your business
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
              {/*<Link to="/contact">
                <button
                  className={animate ? "homeslide-button2" : "homeslide-button"}
                >
                <button className="homeslide-button2 ">Contact Us</button>
              </Link>*/}
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
        <h1>Welcome to CimpliDigital</h1>
        <p className="home-info-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat
          volutpat, aliquet venenatis eget habitasse feugiat. Porttitor
          habitasse metus, sagittis diam pharetra, quam ullamcorper ultricies.
          Turpis ipsum varius tincidunt praesent at enim sapien. Vel massa a
          consequat bibendum neque, accumsan a dignissim suscipit. Neque sit
          nisl eleifend mauris, sit. Mauris tristique interdum nibh quisque.
          Erat consequat elementum augue urna consequat vel mauris porttitor
          purus. Turpis tincidunt mattis nibh tortor rutrum odio nunc. Non massa
          viverra ac, nisi, neque interdum.
        </p>
        <div className="home-info-section">
          <div className="home-info-container">
            <h2>Light, Fast & Powerful</h2>
            <p className="home-info-container-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <p className="home-info-container-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            {/*<div className="home-info-group">
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
          </div>*/}
          </div>

          <div className="home-info-image">
            <img
              src="https://res.cloudinary.com/codeinstd/image/upload/v1612783024/feature_section_image_cvrlup.jpg"
              alt=""
            />
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
