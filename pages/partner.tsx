import Head from "next/head";

import Layout from "../components/_Layout";
import Blog from "../components/Blog";
import Card from "../components/Card";

const PartnerShip: React.FC = () => {
  return (
    <>
      <Head>
        <title>Become a Partner - RoseTech Solutions LTD</title>
      </Head>
      <section className="container py-5">
        <h1 className="display-1 fw-semibold">
          <span className="text-warning">Accelerate</span> your business growth
          with our trusted Partnership Program.
        </h1>
      </section>
      <section className="container py-5">
        <h2 className="display-1  fw-semibold">
          What is the Partnership Program about?
        </h2>
        <h4 className="fw-normal ">
          Our Partnership Program is uniquely designed for businesses of every
          size, everywhere. It is a zero-cost program aimed to be beneficial for
          both your business and ours. The purpose is to help companies with
          great domain expertise who need technical assistance. So you can focus
          on what you do best, and we can take care of all technical
          necessities.
        </h4>
        <h4 className="fw-normal">
          Our highly-effective skill set and expertise have helped many
          businesses since 2015. Our successful partnerships range across
          traditional software companies, technical recruiters, product
          companies, traditional businesses, banks, government agencies and many
          more.
        </h4>
        <h4 className="fw-normal">
          In this program, Rosetech will work very much like the tech department
          of your own company, allowing you to leverage your sales and
          entrepreneurial skills to create a new long-term revenue stream for
          yourself.
        </h4>
      </section>
      <section className="container py-5">
        <h2 className="h1 fw-semibold text-center py-5">
          Who is the Partnership Program for?
        </h2>
        <div className="row">
          <div className="col-md-6 order-1 order-md-0 d-none d-md-block">
            <div className="row">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">01</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Product Companies</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">03</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">IT Consultancies</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-0 d-none d-md-block">
            <div className="row">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">02</h2>
                </div>
              </div>
              <div className="col-md-8">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Tech Evangelists</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">04</h2>
                </div>
              </div>
              <div className="col-md-8">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Technical Recruiters</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-0 d-block d-md-none">
            <div className="row">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">01</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Product Companies</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">02</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Tech Evangelists</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">03</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">IT Consultancies</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">04</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Technical Recruiters</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services py-5">
        <div className="container position-relative">
          <h2 className="text-center h1 fw-semibold py-3">
            3 Simple Steps to Earn Your Referral Commission
          </h2>
          <div className="row py-0 py-md-5">
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    01
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black">
                  Join Our Partnership Program
                </h3>
                <p className="card-text text-black opacity-75">
                  Submit your information in the form below, and our team will
                  reach out to you with more details about the program.
                </p>
              </Card>
            </div>
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    02
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black">Become a Partner</h3>
                <p className="card-text text-black opacity-75">
                  We’ll then send over a Partnership Agreement with terms and
                  benefits of the program. Once the document is signed, you’ll
                  become our partner of growth!
                </p>
              </Card>
            </div>
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    03
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black">Start Referring</h3>
                <p className="card-text text-black opacity-75">
                  All you’ll have to do is submit hot leads. We’ll contact the
                  party and close out the deal. You will then receive up to 15%
                  of the project’s closing numbers.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container rounded-4 p-5 services-gradient">
          <h2 className="h1">Become Our Partner</h2>
          <h6 className="fw-normal mb-5">
            We want to ensure that the partnership program creates substantial
            value for both you and us. So we customise the program in line with
            your specific needs. Fill up the form below and let’s get started on
            our journey to growth and innovation – together!
          </h6>
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
              <label htmlFor="typeofcompany" className="form-label">
                Company type
              </label>
              <input
                type="text"
                className="form-control"
                id="typeofcompany"
                name="typeofcompany"
                placeholder="Enter company type"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="nameofcompany" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameofcompany"
                name="nameofcompany"
                placeholder="Enter company name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Your phone (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
              />
            </div>
            <div className="col-12">
              <label htmlFor="companylocation" className="pb-2">
                Company Location
              </label>
              <div className="col-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="companylocation"
                  id="companylocation"
                  required
                >
                  <option value="bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Dubai">Dubai</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Please write about the intent of this partnership
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
      <Blog title="Our Blogs" />
    </>
  );
};

PartnerShip.Layout = Layout;
export default PartnerShip;
