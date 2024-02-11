import Head from "next/head";

import CountUp from "../components/CountUp";
import ExportableImage from "../components/ExportableImage";
import ScrollAnimation from "../components/ScrollAnimation";
import Layout from "../components/_Layout";

import agileIcon from "../assets/images/aboutus/agile.png";
import continiousIcon from "../assets/images/aboutus/improvement.png";
import learningIcon from "../assets/images/aboutus/learning.png";
import ceoImg from "../assets/images/aboutus/nafis-ceo.png";
import smartIcon from "../assets/images/aboutus/simple-card.png";
import socialIcon from "../assets/images/aboutus/social-responsibility.png";
import teamImg from "../assets/images/aboutus/team.png";
import blog_img from "../assets/images/home/blog/blog-01.png";

const data = [
  {
    id: "001",
    label: "Countries",
    number: "6",
    duration: "2",
    mark: "+",
  },
  {
    id: "002",
    label: "Customers",
    number: "100",
    duration: "2",
    mark: "+",
  },
  {
    id: "003",
    label: "Satisfied users",
    number: "100",
    duration: "2",
    mark: "%",
  },
];

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About - RoseTech Solutions LTD</title>
      </Head>
      <section className="container py-5">
        <h1 className="display-1 fw-medium text-center">
          Welcome to Rosetech Solutions LTD.
        </h1>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h2 className="h1 text-warning text-center my-5 animate__animated animate__fadeInUp">
            About us
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h5 className="opacity-75 text-black text-center animate__animated animate__fadeInUp">
            Welcome to RoseTech Solutions Ltd! We are a leading software
            consultancy firm that specializes in providing cutting-edge
            solutions to businesses of all sizes. Our team of expert consultants
            is committed to delivering personalized and innovative services that
            meet the unique needs of our clients.
          </h5>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h5 className="opacity-75 text-black text-center mt-4 animate__animated animate__fadeInUp">
            At RoseTech Solutions, we believe that technology can transform
            businesses, and our goal is to help our clients harness the power of
            technology to achieve their strategic objectives. We have a passion
            for innovation and a dedication to excellence, and we strive to
            provide the best possible service to every client we work with.
          </h5>
        </ScrollAnimation>
      </section>
      <section>
        <div className="container p-md-0 p-5">
          <div className="row text-center rounded-5 services-gradient p-5 g-3">
            {data.map((count) => (
              <CountUp key={count.id} count={count} />
            ))}
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="h1 text-center">
          We <span className="text-warning">believe in</span>
        </h2>
        <h4 className="text-center py-3 opacity-75">
          Our core values are what lies in our hearts and what shape our
          culture. They lead us in every move and define our character as well
          as our behavior.
        </h4>
        <div className="row g-3">
          <div className="col-md-4">
            <ScrollAnimation animateIn="animate__fadeInUp">
              <div className="card text-center p-5 rounded-4 shadow-lg bg-transparent border-0">
                <div className="d-flex justify-content-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={smartIcon}
                    alt="simple smart card"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Simple, smart, solid</h5>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-4">
            <ScrollAnimation animateIn="animate__fadeInUp">
              <div className="card text-center p-5 rounded-4 shadow-lg bg-transparent border-0">
                <div className="d-flex justify-content-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={learningIcon}
                    alt="learning environment"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Learning environment</h5>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-4">
            <ScrollAnimation animateIn="animate__fadeInUp">
              <div className="card text-center p-5 rounded-4 shadow-lg bg-transparent border-0">
                <div className="d-flex justify-content-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={agileIcon}
                    alt="agile mindset"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Agile mindset</h5>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-2 d-md-flex d-none"></div>
          <div className="col-md-4 mt-md-5 mt-3">
            <ScrollAnimation animateIn="animate__fadeInUp">
              <div className="card text-center p-5 rounded-4 shadow-lg bg-transparent border-0">
                <div className="d-flex justify-content-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={continiousIcon}
                    alt="continuous improvement"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Continuous improvement</h5>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-4 mt-md-5 mt-3">
            <ScrollAnimation animateIn="animate__fadeInUp">
              <div className="card text-center p-5 rounded-4 shadow-lg bg-transparent border-0">
                <div className="d-flex justify-content-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={socialIcon}
                    alt="corporate social responsibility"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Corporate social responsibility
                  </h5>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-md-2"></div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <ScrollAnimation animateIn="animate__fadeInUp">
            <h2 className="display-1 text-center fw-semibold">
              Meet our founder, Nafis
            </h2>
          </ScrollAnimation>
          <div className="row align-items-center">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={ceoImg}
                  alt="Nafis Mostafa"
                  className="img-fluid"
                />
              </ScrollAnimation>
            </div>
            <div className="col-md-4 text-center text-md-start mt-4 mt-md-0">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <h2 className="fw-semibold">Nafis Mostafa</h2>
                <h6 className="opacity-75">CEO / founder</h6>
                <h6 className="opacity-75">
                  Founder at Rosetech Solutions LTD.
                </h6>
              </ScrollAnimation>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <section className="py-5" id="team">
        <div className="container">
          <h2 className="fw-semibold h1 text-center pb-5">Meet our team</h2>
          <div className="row g-3">
            <div className="col-md-3">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="card text-center p-4 rounded-4 services-gradient bg-transparent border-0">
                  <div className="d-flex justify-content-center">
                    <ExportableImage
                      placeholder="blur"
                      loading="lazy"
                      src={teamImg}
                      alt="Sharif Ahamed"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Sharif Ahamed</h4>
                    <h6 className="opacity-75">UI/UX designer</h6>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-3">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="card text-center p-4 rounded-4 services-gradient bg-transparent border-0">
                  <div className="d-flex justify-content-center">
                    <ExportableImage
                      placeholder="blur"
                      loading="lazy"
                      src={teamImg}
                      alt="Sharif Ahamed"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Sharif Ahamed</h4>
                    <h6 className="opacity-75">UI/UX designer</h6>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-3">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="card text-center p-4 rounded-4 services-gradient bg-transparent border-0">
                  <div className="d-flex justify-content-center">
                    <ExportableImage
                      placeholder="blur"
                      loading="lazy"
                      src={teamImg}
                      alt="Sharif Ahamed"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Sharif Ahamed</h4>
                    <h6 className="opacity-75">UI/UX designer</h6>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-3">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="card text-center p-4 rounded-4 services-gradient bg-transparent border-0">
                  <div className="d-flex justify-content-center">
                    <ExportableImage
                      placeholder="blur"
                      loading="lazy"
                      src={teamImg}
                      alt="Sharif Ahamed"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Sharif Ahamed</h4>
                    <h6 className="opacity-75">UI/UX designer</h6>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container rounded-4 p-5 services-gradient">
          <h2 className="h1">Scale your team with us</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Your message
              </label>
              <textarea
                className="form-control"
                placeholder="Type your message"
                id="message"
                style={{ height: "30vh" }}
              ></textarea>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label
                  className="form-check-label opacity-75"
                  htmlFor="gridCheck"
                >
                  By sending this form you confirm that you have read and
                  accepted the <span className="fw-bold">Privacy Policy</span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="button" className="btn btn-warning rounded-pill">
                Send message
                <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-dark blogs py-5">
        <div className="container">
          <h2 className="text-center display-5 text-white fw-semibold py-5">
            Our Blogs
          </h2>
          <div className="row g-3 pb-5">
            <div className="col-md-3">
              <div className="card rounded-4 bg-transparent">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={blog_img}
                  alt="e-commerce"
                  className="img-fluid"
                />
                <div className="card-body text-white">
                  <h5 className="card-title my-3">
                    Top 5 internet banking app in bangladesh
                  </h5>
                  <div className="d-flex justify-content-between my-4">
                    <p className="mb-0">By Rosetech</p>
                    <p className="mb-0">June 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card rounded-4 bg-transparent">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={blog_img}
                  alt="e-commerce"
                  className="img-fluid"
                />
                <div className="card-body text-white">
                  <h5 className="card-title my-3">
                    Top 5 internet banking app in bangladesh
                  </h5>
                  <div className="d-flex justify-content-between my-4">
                    <p className="mb-0">By Rosetech</p>
                    <p className="mb-0">June 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card rounded-4 bg-transparent">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={blog_img}
                  alt="e-commerce"
                  className="img-fluid"
                />
                <div className="card-body text-white">
                  <h5 className="card-title my-3">
                    Top 5 internet banking app in bangladesh
                  </h5>
                  <div className="d-flex justify-content-between my-4">
                    <p className="mb-0">By Rosetech</p>
                    <p className="mb-0">June 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card rounded-4 bg-transparent">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={blog_img}
                  alt="e-commerce"
                  className="img-fluid"
                />
                <div className="card-body text-white">
                  <h5 className="card-title my-3">
                    Top 5 internet banking app in bangladesh
                  </h5>
                  <div className="d-flex justify-content-between my-4">
                    <p className="mb-0">By Rosetech</p>
                    <p className="mb-0">June 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-warning rounded-pill">
              See All
              <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

About.Layout = Layout;
export default About;
