import "./Footer.css";
import ScrollToTop from "react-scroll-to-top";
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {IoMdMailOpen} from 'react-icons/io'

const Footer = () => {
  return (
    <div className="container mt-5 footer">
      <ScrollToTop
        smooth
        top="600"
        viewBox="0 0 15 15"
        svgPath="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
      />
      <div className="row">
        <div className="col-md-4 mt-5 col-sm-12 text-center ">
          <h3 className="title fw-bold">Rafi</h3>
          <p className="title fw-bold"> 245/4, West Manikdi, AL-Rayyan Bhaban</p>
          <p className="title fw-bold">Dhaka Cantonment, Dhaka-1206</p>
          <p className="title fw-bold d-flex justify-content-center align-items-center"><IoMdMailOpen className="me-1 w-25"/> Email: afridirk10@gmail.com</p>
          <p className="title fw-bold d-flex justify-content-center align-items-center"><BsFillTelephoneInboundFill className="me-1"/> Hotline: +880-1850730138</p>
        </div>
        <div className="col-md-4 mt-5 col-sm-12">
          <h3 className="text-center fw-bold title mb-4 ">
            Subscribe to my newsletter
          </h3>
          <form className="row">
            <div className="col">
              <input
                type="email"
                className="form-control rounded-pill"
                id="inputEmail4"
                placeholder="enter your email"
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary header-btn rounded-pill footer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4 mt-5 col-sm-12">
          <h3 className="text-center fw-bold title">Follow social network</h3>
          <div className="icons">
            <h1>
              <a
                href="https://www.facebook.com/whoafridi/"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <i className="bx bxl-facebook-circle"></i>{" "}
              </a>{" "}
            </h1>
            <h1>
              <a
                href="https://www.linkedin.com/in/whoafridi/"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <i className="bx bxl-linkedin"></i>{" "}
              </a>{" "}
            </h1>
            <h1>
              <a
                href="https://twitter.com/whoafridi/"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <i className="bx bxl-twitter"></i>{" "}
              </a>{" "}
            </h1>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col">
          <p className="text-center title fw-bolder">
            Copyright © 2022 - Made by Rafi - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
