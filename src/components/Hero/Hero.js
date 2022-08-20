import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img from "../../images/hero.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="container mt-3" id="home">
        <div className="row text-start align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="header h1 mt-10 fw-bold">Hi there,</h1>
            <h2 className="header h1 fw-bold">Md. Rafiuzzaman Bhuiyan</h2>
            <p className="header-p">
              I'm a{" "}
              <span
                style={{
                  color: "#081158",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Front end developer",
                    "Web designer",
                    "React developer",
                    "MERN stack developer ",
                  ]}
                  loop={100}
                  cursor
                  cursorStyle="..."
                  typeSpeed={70}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p className="header">
              I'm a learner by profession. Wanted to learn new technologies.
              Always try to be updated about the things that I loved so much.
            </p>
            <button
              type="button"
              className="btn btn-dark header-btn2 rounded-pill "
            >
              <a
                className="header-btn"
                href="https://drive.google.com/file/d/1LkQK03uhjPy5wjZLAPc99ZP_m9Hqhbxp/view"
                target="_blank"
                rel="noreferrer"
                data-aos="zoom-in-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Download resume
              </a>
            </button>
          </div>
          <div
            id="hero-img"
            className="col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img className="img-fluid" src={img} alt="hero-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
