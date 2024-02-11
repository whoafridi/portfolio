import Head from "next/head";
import Link from "next/link";

import Layout from "../components/_Layout";
import ExportableImage from "../components/ExportableImage";

import blog_img from "../assets/images/home/blog/blog-01.png";

const HireDeveloper: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hire a Developer - RoseTech Solutions LTD</title>
      </Head>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="w-75">
                <h1 className="fw-bold">Hire a developer</h1>
                <h6 className="opacity-75">
                  Fill in the below form to receive a detailed estimation. One
                  of our friendly team member will be in touch soon
                </h6>
              </div>
              <form className="row g-3 my-5">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
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
                  <label htmlFor="email" className="form-label">
                    Your email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
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
                <div className="col-12 py-3">
                  <h4>What type of hire do you need?</h4>
                  <input
                    type="radio"
                    className="btn-check"
                    name="hire"
                    id="fulltime"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3 me-2"
                    htmlFor="fulltime"
                  >
                    Full Time
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="hire"
                    id="parttime"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3 me-2"
                    htmlFor="parttime"
                  >
                    Part Time
                  </label>
                </div>
                <div className="col-12 py-3">
                  <h4>Project duration (months)</h4>
                  <input
                    type="radio"
                    className="btn-check"
                    name="duration"
                    id="rangetwo"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3 me-2"
                    htmlFor="rangetwo"
                  >
                    1-2
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="duration"
                    id="rangefive"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3 me-2"
                    htmlFor="rangefive"
                  >
                    1-5
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="duration"
                    id="rangeseven"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3 me-2"
                    htmlFor="rangeseven"
                  >
                    1-7
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="duration"
                    id="rangeten"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3 me-2"
                    htmlFor="rangeten"
                  >
                    1-10
                  </label>
                </div>
                  <h4>How many developer you want to hire</h4>
                <div className="col-12 d-flex flex-wrap gap-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="developer"
                    id="rangeone"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangeone"
                  >
                    1-2
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="developer"
                    id="rangefour"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangefour"
                  >
                    1-4
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="developer"
                    id="rangeeight"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangeeight"
                  >
                    1-8
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="developer"
                    id="range-ten"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="range-ten"
                  >
                    1-10
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="developer"
                    id="rangeeleven"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangeeleven"
                  >
                    10+
                  </label>
                </div>
                  <h4>Number of employees</h4>
                <div className="col-12 d-flex flex-wrap gap-2">
                  <input
                    type="radio"
                    className="btn-check"
                    name="employees"
                    id="rangeTen"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangeTen"
                  >
                    1-10
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="employees"
                    id="rangethirty"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangethirty"
                  >
                    1-30
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="employees"
                    id="rangeforty"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangeforty"
                  >
                    1-40
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="employees"
                    id="rangefifty"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangefifty"
                  >
                    1-50
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="employees"
                    id="rangehundred"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-warning px-3"
                    htmlFor="rangehundred"
                  >
                    100+
                  </label>
                </div>
                <div className="col-12">
                  <label htmlFor="details" className="form-label">
                    Project details
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Type your project details"
                    id="details"
                    style={{ height: "30vh" }}
                  ></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="wheretoknowus" className="pb-2">
                    How Do You Know Us?
                  </label>
                  <div className="col-12">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="wheretoknowus"
                      id="wheretoknowus"
                      required
                    >
                      <option value="google">Google</option>
                      <option value="fb">FB</option>
                      <option value="linkedin">Linkedin</option>
                      <option value="direct">Direct</option>
                    </select>
                  </div>
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
                      accepted the{" "}
                      <span className="fw-bold">Privacy Policy</span>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-warning rounded-pill"
                  >
                    Send message
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <div className="services-gradient p-5 rounded-5">
                <div className="d-flex">
                  <span className="text-black me-2">
                    <i className="fa-solid fa-envelope opacity-75"></i>
                  </span>
                  <Link
                    className="text-decoration-none"
                    href="mailto:contact@rosetech.dev"
                  >
                    contact@rosetech.dev
                  </Link>
                </div>
                <div className="d-flex pe-2">
                  <span className="text-black me-2">
                    <i className="fa-solid fa-phone opacity-75"></i>
                  </span>
                  <Link
                    className="text-decoration-none"
                    href="tel:+8801842546165"
                  >
                    +8801842546165
                  </Link>
                </div>
                <div className="row align-items-center mt-5">
                  <div className="col-md-9">
                    <h4 className="text-black fw-semibold">Head quarter</h4>
                    <Link
                      className="text-decoration-none"
                      target="_blank"
                      href="https://www.google.com/maps/@23.741554,90.395273,20z?hl=en"
                      rel="noreferrer"
                    >
                      2/E/1 Mymensingh Road, Shahbagh, Dhaka-1000
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      href="https://facebook.com/rosetechofficial"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook me-2"></i>
                    </Link>
                    <Link
                      href="https://linkedin.com/company/rosetechofficial"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin  me-2"></i>
                    </Link>{" "}
                    <br />
                    <Link href="#" rel="noreferrer">
                      <i className="fa-brands fa-instagram me-2"></i>
                    </Link>
                    <Link href="#" rel="noreferrer">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-md-5 d-flex gap-2"></div>
                <h5 className="fw-bold mt-5">Map Location</h5>
                <div className="ratio ratio-16x9 rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29214.622651442536!2d90.35668350673718!3d23.75351821360303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ff0b26391d%3A0x2e882ffbcf8d57c!2sRose%20Tech%20and%20Computer!5e0!3m2!1sen!2sbd!4v1677092736521!5m2!1sen!2sbd"
                    width="300"
                    height="250"
                    allowFullScreen={false}
                    loading="lazy"
                    className="border-0 rounded"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
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

HireDeveloper.Layout = Layout;

export default HireDeveloper;
