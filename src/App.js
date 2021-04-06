import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import StickyHeader from "./components/sticky_header";
import Contact from "./screens/contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faAddressCard,
  faAddressBook,
  faToolbox,
  faPalette
} from "@fortawesome/free-solid-svg-icons";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const toggleMenu = () => {
    document.querySelector(".sidebar").classList.toggle("open");
  };

  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const dropdown = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const handleClick = e => {
    console.log("event", e.target);
    if (openMenu) {
      if (
        !dropdown?.current?.contains(e.target) &&
        !buttonRef?.current?.contains(e.target)
      ) {
        setOpenMenu(false);
      }
    }
  };

  // const menu = () => {
  //   setOpenMenu(!openMenu);
  // };

  const sideMenu = () => {
    setShowMenu(!showMenu);
  };

  // console.log("dropdown", dropdown.current);
  // console.log({ openMenu });

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <StickyHeader />
        <header className="header">
          <Link to="/" className="brand">
            CimpliDigital
          </Link>

          {width > 1000 ? (
            <>
              <div className="header-links">
                <Link to="/" className="dropdown-link">
                  Home
                </Link>
                <Link to="/about-us" className="dropdown-link">
                  About Us
                </Link>
                {/*<div className="dropdown">
                  <button
                    className="dropdown-button"
                    onClick={menu}
                    ref={buttonRef}
                  >
                    Projects
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="dropdown-icon"
                    />
                  </button>
                  {openMenu && (
                    <div
                      ref={dropdown}
                      className={
                        openMenu
                          ? "dropdown-contentAnimate"
                          : "dropdown-content"
                      }
                    >
                      <Link
                        to="/residential"
                        className="content-link"
                        onClick={menu}
                      >
                        Residential Projects
                      </Link>
                      <Link
                        to="/commercial"
                        className="content-link"
                        onClick={menu}
                      >
                        Commercial Projects
                      </Link>
                      <Link
                        to="/infrastructural"
                        className="content-link"
                        onClick={menu}
                      >
                        Infrastructural Projects
                      </Link>
                      <Link
                        to="/interior"
                        href="https://www.google.com"
                        className="content-link"
                        onClick={menu}
                      >
                        Interior Design
                      </Link>
                    </div>
                  )}
                </div>*/}
                {/*<Link to="/real-estate" className="dropdown-link">
                  Real Estate Development
                </Link>*/}
                <Link to="/contact" className="dropdown-link">
                  Contact
                </Link>
              </div>
            </>
          ) : (
            <button
              id="head-btn"
              className="header-button"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          )}

          <Link className="estimate_btn" to="/contact">
            Free Estimate
          </Link>
        </header>

        <aside className="sidebar">
          <ul className="slide-menu">
            <li>
              <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
              <Link onClick={toggleMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAddressCard} className="sidebar-icon" />
              <Link to="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>

            <li>
              <FontAwesomeIcon icon={faAddressBook} className="sidebar-icon" />
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>

            {/*<li>
              <FontAwesomeIcon icon={faToolbox} className="sidebar-icon" />
              <Link to="" onClick={sideMenu}>
                Projects
              </Link>
            </li>

            {showMenu && (
              <ul
                className={
                  showMenu ? "slide-innerMenuAnimate" : "slide-innerMenu"
                }
              >
                <li className="slide-innerList">
                  <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                  <Link to="/residential" onClick={toggleMenu}>
                    Residential
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBuilding} className="sidebar-icon" />
                  <Link to="/commercial" onClick={toggleMenu}>
                    Commercial
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBuilding} className="sidebar-icon" />
                  <Link to="/infrastructural" onClick={toggleMenu}>
                    Infrastructural
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPalette} className="sidebar-icon" />
                  <Link to="/interior" onClick={toggleMenu}>
                    Interior Design
                  </Link>
                </li>
              </ul>
            )}

            <li>
              <FontAwesomeIcon icon={faBuilding} className="sidebar-icon" />
              <Link to="/real-estate" onClick={toggleMenu}>
                Real Estate
              </Link>
            </li>
            */}
          </ul>
        </aside>

        <main className="main-div">
          <Route path="/" component={HomeScreen} exact={true} />
          <Route path="/about-us" component={AboutScreen} />
          <Route path="/contact" component={Contact} />
        </main>
      </div>
    </Router>
  );
}

export default App;
