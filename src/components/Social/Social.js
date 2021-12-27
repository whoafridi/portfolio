import React from "react";
import fb from "../../images/icons/facebook.png";
import github from "../../images/icons/github.png";
import instagram from "../../images/icons/instagram.png";
import linkedin from "../../images/icons/linkedin.png";
import skype from "../../images/icons/skype.png";
import twitter from "../../images/icons/twitter.png";
import youtube from "../../images/icons/youtube.png";

export default function Social() {
  return (
    <div className="container mt-5 mb-3" id="technologies">
      <div className="row text-start align-items-center">
        <div className="col text-center">
          <a
            class="modal-a"
            href="https://www.facebook.com/whoafridi/"
            target="_blank"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            {" "}
            <img className=" ps-3 img" src={fb} alt="" />
          </a>
          <a
            class="modal-a"
            href="https://www.linkedin.com/in/whoafridi/"
            target="_blank"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            {" "}
            <img className="ps-2 img" src={linkedin} alt="" />{" "}
          </a>
          <a
            class="modal-a"
            href="https://twitter.com/whoafridi/"
            target="_blank"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            {" "}
            <img className="ps-2 img" src={twitter} alt="" />
          </a>
          <a
            class="modal-a"
            href="https://www.instagram.com/whoafridi/"
            target="_blank"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            {" "}
            <img className="w-auto ps-2 img" src={instagram} alt="" />
          </a>
          <a
            class="modal-a"
            href="https://www.github.com/whoafridi/"
            target="_blank"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img className="ps-2 img" src={github} alt="" />
          </a>
          <a
            class="modal-a"
            href="https://www.facebook.com/whoafridi/"
            target="_blank"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <img className="ps-2 img " src={skype} alt="" />
          </a>
          <a
            class="modal-a"
            href="https://www.youtube.com/channel/UCKGVmAFzY1-mLLA9zE5veHw/videos"
            target="_blank"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img className="ps-2 img" src={youtube} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
