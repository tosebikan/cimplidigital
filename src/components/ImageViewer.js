import React, { useState, useEffect, forwardRef } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./ImageViewer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

const ImageViewer = forwardRef((props, ref) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  let imagesLength = props.project.images.length;
  // console.log("ImageComponent", props.project, imagesLength);
  return (
    <div className="imageViewer_container" onClick={props.check}>
      <div className="ImageViewer_card" ref={ref}>
        <div className="ImageViewer_cancel" onClick={props.close}>
          <FontAwesomeIcon icon={faTimes} className="homeslide-icon" />
        </div>
        <div className="ImageViewer_image">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={width < 1000 ? 80 : 60}
            totalSlides={imagesLength}
            className="carousel"
          >
            <ButtonBack className="homeslide-back mobile-back">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="homeslide-icon"
              />
            </ButtonBack>

            <ButtonNext className="homeslide-next mobile-next">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="homeslide-icon"
              />
            </ButtonNext>

            <Slider>
              {props.project.images.map((image, id) => (
                <Slide index={0} className="homeskide-slide">
                  <img
                    key={id}
                    src={image}
                    width="100%"
                    height="100%"
                    alt=""
                    className="ImageViewer_imagee"
                  />
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
});

export default ImageViewer;
