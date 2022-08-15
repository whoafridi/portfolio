import React from "react";
import img from "../../images/aboutme.png";

export default function Aboutme() {
  return (
    <div className="container mt-5" id="aboutme">
      <h1
        className="header text-center h1 fw-bold"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        About me
      </h1>
      <div className="row text-start align-items-center">
        <div
          className="col-lg-6 col-md-6 col-sm-12"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img className="img-fluid" src={img} alt="aboutme-icon" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className="header">
            Hi, I am a graduated student with experience of web developer and designer. I started
            learning web development since 2020 Autumn. Before that I'm keen to
            develop some porjects for my hobby purpose. My actual journey of
            development comes from the programming hero. I am still learning the new technologies of
            web development. My desire is to be a full stack web developer in next 2-3 years.
          </p>
          <a href="#contact">
          <button
            type="button"
            className="btn btn-dark  header-btn rounded-pill"
          >
            Hire me
          </button>
          </a>
          <a href="#contact">
          <button
            type="button"
            id="#contact"
            className="btn btn-dark  header-btn rounded-pill ms-2"
          >
            Contact me
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
