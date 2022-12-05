import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
// import heroImg from "../../images/hero.svg";
import {FiDownloadCloud} from 'react-icons/fi';
import afr from '../../images/afr.png';

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
                  color: "rgb(8,17,88)",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Web Designer",
                    "Front End Developer",
                    "Web Developer",
                    "ReactJS Developer",
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
              className="border-0 resume-btn rounded-pill"
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
                Download resume <FiDownloadCloud className="ms-1"/>
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
            <img className="img-fluid img-content" src={afr} alt="rafiuzzaman bhuiyan-hero-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
