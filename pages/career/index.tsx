import Head from "next/head";
import Link from "next/link";

import Blog from "../../components/Blog";
import Button from "../../components/Button";
import Layout from "../../components/_Layout";

const Career: React.FC = () => {
  return (
    <>
      <Head>
        <title>Career - RoseTech Solutions LTD</title>
      </Head>
      <section className="container py-5">
        <h1 className="display-1 fw-semibold ">
          Rosetech hires only the very best! And
          <span className="text-warning"> you can be </span>
          one of us too.
        </h1>
        <h4 className="opacity-75 fw-normal">
          For every category – younger candidates who do not meet the experience
          requirements but possess good skills may apply as well.
        </h4>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold h1 text-center py-5">Available positions</h2>
          <div className="row">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="border-0 card">
                <div className="card-body p-5 rounded-4 shadow">
                  <h5 className="card-title">Data Scientist</h5>
                  <p className="card-text opacity-75">
                    Experience: 2 – 5 years. Monthly Salary: BDT. 150,000 –
                    300,000.
                  </p>
                  <button
                    type="button"
                    className="btn btn-warning rounded-pill"
                  >
                    Apply now
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="border-0 card">
                <div className="card-body p-5 rounded-4 shadow">
                  <h5 className="card-title">Product Designer</h5>
                  <p className="card-text opacity-75">
                    Experience: 2 – 5 years. Monthly Salary: BDT. 150,000 –
                    300,000.
                  </p>
                  <button
                    type="button"
                    className="btn btn-warning rounded-pill"
                  >
                    Apply now
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border-0 card">
                <div className="card-body p-5 rounded-4 shadow">
                  <h5 className="card-title">Technical Support</h5>
                  <p className="card-text opacity-75">
                    Experience: 2 – 5 years. Monthly Salary: BDT. 150,000 –
                    300,000.
                  </p>
                  <button
                    type="button"
                    className="btn btn-warning rounded-pill"
                  >
                    Apply now
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 row">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="border-0 card">
                <div className="card-body p-5 rounded-4 shadow">
                  <h5 className="card-title">WordPress Developer</h5>
                  <p className="card-text opacity-75">
                    Experience: 2 – 5 years. Monthly Salary: BDT. 150,000 –
                    300,000.
                  </p>
                  <button
                    type="button"
                    className="btn btn-warning rounded-pill"
                  >
                    Apply now
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3 mb-sm-0">
              <div className="border-0 card">
                <div className="card-body p-5 rounded-4 shadow">
                  <h5 className="card-title">Jr Graphic Designer</h5>
                  <p className="card-text opacity-75">
                    Experience: 2 – 5 years. Monthly Salary: BDT. 150,000 –
                    300,000.
                  </p>
                  <button
                    type="button"
                    className="btn btn-warning rounded-pill"
                  >
                    Apply now
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border-0 card">
                <div className="card-body p-5 rounded-4 shadow">
                  <h5 className="card-title">Digital Marketer</h5>
                  <p className="card-text opacity-75">
                    Experience: 2 – 5 years. Monthly Salary: BDT. 150,000 –
                    300,000.
                  </p>
                  <button
                    type="button"
                    className="btn btn-warning rounded-pill"
                  >
                    Apply now
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="h1 text-center pb-5">
            Why Work at <span className="text-warning">Rostech?</span>
          </h2>
          <h4 className="opacity-75 fw-normal">
            In our philosophy, technology innovation is just one of the many
            games that we play everyday. Since we are masters of this game, we
            constantly seek other masters to join our family of excellence. If
            you feel that you have the potential to be a technology leader of
            tomorrow, you are welcome to join us. If you have a great technology
            idea that you believe can revolutionize the world, but cannot
            implement it staying in the position where you are now, you are
            again welcome to contact us.
          </h4>
          <h4 className="opacity-75 fw-normal py-5">
            There are many reasons why you would want to work at Rosetech. The
            Environment page describes some of the benefits we offer to our
            teams. In addition, we provide individually-tailored compensation
            packages that can be comprised of competitive salary, bonus, and
            equity components, along with the opportunity to earn further
            financial bonuses and rewards.
          </h4>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="h1 text-center pb-5">
            <span className="text-warning">Joining</span> Rosetech
          </h2>
          <h4 className="opacity-75 fw-normal">
            There are some prerequisites to join our family. First and foremost,
            you got to have a beautiful mind. You must be open-minded, dynamic
            and should be adaptive to tech paradigm shifts. You have to be a
            magnificently efficient coder and follow industry-standard design
            patterns and principles while coding and testing. You should love
            challenging tasks and always keep yourself updated with the changes
            in the IT world. You got to have a curious mind that keeps you
            pushing to know the inner working of everything.
          </h4>
          <h4 className="opacity-75 fw-normal py-5">
            If you fulfill all these criteria, you can consider yourself in.
            Please feel free to email your resume to Website_link that must
            include your past and present experiences and your complete skill
            set. Your resume must also contain small description of some of the
            most challenging projects you have been involved with. We would like
            to see how hardcore you are.
          </h4>
          <h2 className="fw-semibold">Benefits you will get</h2>
          <div className="row py-5">
            <div className="col-md-6 d-none d-md-block">
              <div className="row">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">01</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Knowledge-oriented environment that promotes learning
                    </h6>
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
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Regular in-house training and seminars
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">05</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Gratuity bonuses
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">07</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Medical insurance coverage
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">09</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Office-paid tours – both domestic and international
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">11</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Clear career roadmap and growth opportunities
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className="row">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">02</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Company policy of using the latest technologies
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">04</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Festival bonuses
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">06</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Medical insurance coverage
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">08</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Paid maternity leaves
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">10</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Transparent and on-time financial benefits and increments
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">12</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Cozy and fun environment – everyone is everyone’s best
                      friend
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-block d-md-none">
              <div className="row">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">01</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Knowledge-oriented environment that promotes learning
                    </h6>
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
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Company policy of using the latest technologies
                    </h6>
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
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Regular in-house training and seminars
                    </h6>
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
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Festival bonuses
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">05</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Gratuity bonuses
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">06</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Medical insurance coverage
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">07</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Paid maternity leaves
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">08</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Office-paid tours – both domestic and international
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">09</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Transparent and on-time financial benefits and increments
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">10</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Clear career roadmap and growth opportunities
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">11</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Cozy and fun environment – everyone is everyone’s best
                      friend
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center h1">
            Want to be a part of our great vision?
          </h2>
          <h5 className="text-center opacity-75 py-4">
            Check out the different shades of our life here at Rosetech
            Solutions LTD.
          </h5>
          <div className="d-flex justify-content-center">
            <Link href="/about-us/#team">
              <Button>
                Meet our team
                <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container rounded-4 p-5 services-gradient">
          <h2 className="h1">Let’s talk.</h2>
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
      <Blog title="Our Blogs"/>
    </>
  );
};

Career.Layout = Layout;
export default Career;
