import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as ScrollSVG } from "../utils/down-scroll.svg";
import { ReactComponent as Triangle } from "../utils/triangle.svg";
import { boxHover, boxExit } from "../animations";
import Footer from "../components/Footer";
import AnimateEl from "../components/AnimateEl";
import "./Home.css";
import SplashScreen from "../splash_screen/SplashScreen";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const text1 = "I curate experiences";
const text2 = "with technology.";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Sharmil — Developer";
  }, []);

  return (
    <>
      <motion.div
        exit={{ height: "100vh", transition }}
        className="transition2"
      />

      <div className="landing">
        <section className="landing__top">
          <div className="sub">Full-Stack Developer</div>
          <h1 className="landing__main">
            <span className="text-con">
              {text1.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
              <br />
              {text2.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
            </span>
          </h1>
          <h1 className="landing__main2">
            I curate experiences <br /> with technology.
          </h1>
          <div className="links">
            About Me
            <span className="item">—</span>
            <span className="item">
              <a href="#projects">My Projects</a>
            </span>
          </div>

          <div className="scroll-down">
            <ScrollSVG />
          </div>

          <div className="shapes">
            <div className="main-circle" />
            <div className="shape shape-1" />
            <div className="shape shape-2">
              <Triangle />
            </div>
            <div className="shape shape-3" />
            <div className="shape shape-4" />
          </div>
        </section>

        {/* <section className="landing__work">
          <AnimateEl>
            <div className="title" id="projects">
              My <br /> Projects -
            </div>
          </AnimateEl>
          <div className="boxes">
            <AnimateEl>
              <a
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://sharmil001.github.io/Music-Player/">
                <div className="box-content">
                  <div className="box-anim p-title">Coding Music</div>
                  <div className="box-anim p-sub">
                    A website for the soothing & cool music.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://python-food.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-2"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}>
                <div className="box-content">
                  <div className="box-anim p-title">Digital Menu Cards</div>
                  <div className="box-anim p-sub">
                    Restaurants and Ordering System Using QR Code Scanning.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="https://github.com/Sharmil001/Attendance_Marking_face_recognition"
                target="_blank"
                rel="noopener noreferrer"
                className="box box-3"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}>
                <div className="box-content">
                  <div className="box-anim p-title">Attendace System</div>
                  <div className="box-anim p-sub">
                    Smart attendace marking system using face recognition.
                  </div>
                  <div className="box-anim link">View Project &#8594;</div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
            <AnimateEl>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={boxHover}
                onMouseLeave={boxExit}
                className="box box-4">
                <div className="box-content">
                  <div className="box-anim p-title">Shopify</div>
                  <div className="box-anim p-sub">
                    Shopify is interactive UI for Ecommerce Website.
                  </div>
                  <div className="box-anim link">
                    Under Construction &#8594;
                  </div>
                </div>

                <div className="box-image"></div>
              </a>
            </AnimateEl>
          </div>
          <a
            href="https://github.com/Sharmil001"
            target="_blank"
            rel="noopener noreferrer">
            <button className="more">
              <div className="btn-content">View more projects</div>
            </button>
          </a>
        </section> */}
      </div>
    </>
  );
};

export default Home;
