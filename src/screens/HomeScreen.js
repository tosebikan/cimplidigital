import React, { useState, useEffect, useRef } from "react";
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
import cimplidigital from "../assets/cimplidigital.mp4";
import homeuser from "../assets/images/homeuser.png";
import homeusers from "../assets/images/homeusers.png";
import mic from "../assets/images/mic.png";
import topwave from "../assets/images/topwave.png";
import bottomwave from "../assets/images/bottomwave.png";

const clients = [
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463557/Group_18_jk59ek.png ",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463555/download_1_jtz8fk.png",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463553/Total_1_a4a9tf.png",
  "https://res.cloudinary.com/codeinstd/image/upload/v1610463556/1519903944144_1_hqdvsa.png"
];

const solutions = [
  {
    title: "Modern Workplace",
    image: Transformation
  },
  {
    title: "Business Applications",
    image: Transformation
  },
  {
    title: "Custom Development Solutions",
    image: Transformation
  },
  {
    title: "Support & Managed Services",
    image: Transformation
  },
  {
    title: "Power Platform",
    image: Transformation
  }
];

function HomeScreen() {
  const [width, setWidth] = useState(window.innerWidth);
  const [animate, setAnimate] = useState(false);
  const [playVideo, setPlayVideo] = useState(true);

  const videoRef = useRef(null);

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

  const handlePress = () => {
    if (playVideo) {
      videoRef.current.pause();
      setPlayVideo(false);
      return;
    }

    videoRef.current.play();
    setPlayVideo(true);
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
              <h1
                className={animate ? "homeslide-title" : "homeslide-title1"}
                style={{ color: "#fff" }}
              >
                Custom IT Solutions For Your Business
              </h1>

              <div className="home_btn_group">
                <Link to="/contact">
                  <button
                    className="homeslide-button"
                    style={{ backgroundColor: "#000" }}
                  >
                    Learn more
                  </button>
                </Link>
                <Link to="/contact">
                  <button
                    className="homeslide-button"
                    style={{ backgroundColor: "#000" }}
                  >
                    Get in touch
                  </button>
                </Link>
              </div>
              {/*<img
                src={heroImage1}
                width="100%"
                alt=""
                className="homeslide-img"
              />*/}

              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                ref={videoRef}
                onClick={handlePress}
                className="home_video"
              >
                <source src={cimplidigital} type="video/mp4" />
              </video>
            </Slide>
            <Slide index={0} className="homeskide-slide">
              <h1 className={animate ? "homeslide-title" : "homeslide-title1"}>
                Microsoft Dynamics & Cloud Technologies
              </h1>

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
                Build Agile Business Processes With Ease
              </h1>

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
              advanced technological developments which provides enterprises
              with solutions that improves productivity, increase profitability,
              reduce complexities & cost.
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
        <div>
          <h1>Solutions.</h1>
          <button>Learn more</button>
        </div>

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

      <div className="home_users">
        <div className="home_users_left">
          <img
            src={homeuser}
            alt=""
            style={{ width: 500, height: 500, objectFit: "contain" }}
          />
          <button> Learn more</button>
        </div>

        <div className="home_users_right">
          <div className="home_user_group">
            <h2>IT teams</h2>
            <p>
              Moving applications to the cloud, improving time-to-market whilst
              reducing capital expenditures. providing continuity & transparency
              of business processes
            </p>
          </div>
          <div className="home_user_group_middle_container">
            <div className="home_user_group_middle">
              <img
                src={homeusers}
                alt=""
                style={{
                  width: 150,
                  height: 120,
                  borderRadius: 20,
                  marginRight: 30
                }}
              />

              <div>
                <h2>Business Organizations</h2>
                <p>
                  The ability to manage large services, scale, vertically &
                  horizontally, ensuring consistent performance across board.
                </p>
              </div>
            </div>
          </div>
          <div className="home_user_group" style={{ marginTop: 300 }}>
            <h2>Startups</h2>
            <p>
              The Infrastructure grows with the company, helps in cost
              optimization, performance, & is available to add functionalities
              processes & features{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="home_build">
        <div className="home_build_left">
          <h2>
            Build solutions using Microsoft Cloud: Office 365, SharePoint, Power
            Bi, Dynamics 365, Azure & more
          </h2>
          <p>Contact us for more info</p>
          <button> Learn more</button>
        </div>
        <img
          src={mic}
          alt=""
          style={{
            width: 450,
            height: 550,
            borderRadius: 20,
            marginRight: 30
          }}
        />
      </div>

      {/*<div className="clients-section">
        <h1>Our Clients</h1>
        <div className="clients-img-group">
          {clients.map((client, index) => (
            <img key={index} src={client} alt="" />
          ))}
        </div>
      </div>*/}
      <Footer />
    </div>
  );
}

export default HomeScreen;
