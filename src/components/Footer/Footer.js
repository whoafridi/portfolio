import "./Footer.css";

const Footer = () => {
  return (
    <div class="container mt-5 footer">
      <div class="row">
        <div class="col-md-4 mt-5 col-sm-12 text-center ">
          <h3 class="title fw-bold">Rafi</h3>
          <p class="title fw-bold">66/1 - D, Baulghat, Dhaka </p>
          <p class="title fw-bold">Dhaka Cantonment, Dhaka-1206</p>
          <p class="title fw-bold">Hotline: +880-185030138</p>
        </div>
        <div class="col-md-4 mt-5 col-sm-12">
          <h3 class="text-center fw-bold title mb-4 ">
            Subscribe to our newsletter
          </h3>
          <form class="row">
            <div class="col">
              <input
                type="email"
                class="form-control rounded-pill"
                id="inputEmail4"
                placeholder="enter your email"
              />
            </div>
            <div class="col-auto">
              <button
                type="submit"
                class="btn btn-primary header-btn rounded-pill"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-4 mt-5 col-sm-12">
          <h3 class="text-center fw-bold title">Follow social network</h3>
          <div class="icons">
            <h1></h1>

            <h1>
              <a
                href="https://www.facebook.com/whoafridi/"
                target="_blank"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <i class="bx bxl-facebook-circle"></i>{" "}
              </a>{" "}
            </h1>
            <h1>
              <a
                href="https://www.linkedin.com/in/whoafridi/"
                target="_blank"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <i class="bx bxl-linkedin"></i>{" "}
              </a>{" "}
            </h1>
            <h1>
              <a
                href="https://twitter.com/whoafridi/"
                target="_blank"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <i class="bx bxl-twitter"></i>{" "}
              </a>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="text-center title fw-bold">
            Copyright © 2021 @Rafi - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
