import Head from "next/head";
import Link from "next/link";

import Button from "../components/Button";
import SITEMAP from "../components/SITEMAP";
import Layout from "../components/_Layout";
import ExportableImage from "../components/ExportableImage";

import shikorImg from "../assets/images/case-studies/shikor.png";
import Testimonial from "../components/Testimonial";

const CaseStudies: React.FC = () => {
  return (
    <>
      <Head>
        <title>Case Studies - RoseTech Solutions LTD</title>
      </Head>
      <section className="py-5">
        <div className="bg-dark rounded-5 container p-md-5 py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-1 text-white fw-semibold">
                Shikor the caregiver app
              </h1>
              <h4 className="py-5 text-white fw-normal">
                Piloting digital innovations to meet NextGen consumer demands
              </h4>
              <Link href={SITEMAP.hiredeveloper}>
                <Button>
                  Hire developers
                  <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                </Button>
              </Link>
              <Link href="#" className="ms-md-2">
                <Button className="mt-md-0 mt-3 " light>
                  Download app
                  <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                </Button>
              </Link>
            </div>
            <div className="col-md-5 rounded-circle bg-black bg-opacity-10 mt-5 mt-md-0">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={shikorImg}
                alt="shikor app"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="display-1 fw-semibold">App features</h2>
          <h4 className="opacity-75">
            Shikor is a groundbreaking caregiver app designed to improve the
            quality of care and support for individuals with health and
            caregiving needs. Caregivers play a critical role in providing
            assistance and monitoring the well-being of their loved ones, but
            the task can be challenging due to busy schedules and the need for
            constant communication. Shikor seeks to bridge this gap by
            leveraging technology to create a seamless and efficient way for
            patients to alert their caregivers in times of need.
          </h4>
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
                    <h6 className="fw-semibold ms-2 mb-0 p-2">SOS history</h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">02</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Share patient via QR code
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">03</h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Add patient via QR code
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
                      Notification alert
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
                      Patients & caregivers list
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
                    <h6 className="fw-semibold ms-2 mb-0 p-2">SOS history</h6>
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
                      Share patient via QR code
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
                      Add patient via QR code
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
                      Notification alert
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-2 w-25">
                  <div className="services-gradient rounded-circle p-2">
                    <h2 className="text-warning text-center mb-0">05</h2>
                  </div>
                </div>
                <div className="col-md-7 w-75">
                  <div className="services-gradient rounded-pill p-2">
                    <h6 className="fw-semibold ms-2 mb-0 p-2">
                      Patients & caregivers list
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/HXgL0C93z2Y?si=vixhtBqEC8oDR0lF"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container p-md-0 p-5">
          <div className="row text-center rounded-5 services-gradient p-5 g-3">
            <div className="col-md-4">
              <h2 className="h1 fw-bold text-warning">400+</h2>
              <h4 className="">Registered patients</h4>
            </div>
            <div className="col-md-4">
              <h2 className="h1 fw-bold text-warning">396+</h2>
              <h4 className="">Registered Caregivers</h4>
            </div>
            <div className="col-md-4">
              <h2 className="h1 fw-bold text-warning">96%</h2>
              <h4 className="">Satisfied users</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="display-1 fw-semibold text-center">
            Clients feedback about this project
          </h2>
          <Testimonial />
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-semibold">
            Explore our other case studies
          </h2>
          <h6 className="opacity-75 text-center w-50 mx-auto">
            We have developed some custom software solutions. It helps grow
            small and mid size businesses.
          </h6>
          <div className="row g-3 py-5">
            <div className="col-md-4">
              <div className="card rounded-4 bg-transparent">
                <div className="d-flex justify-content-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={shikorImg}
                    alt="e-commerce"
                    width="200"
                    height="100"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title my-3">
                    Case study title goes here
                  </h5>
                  <div className="d-flex justify-content- my-4">
                    <p className="mb-0">
                      Shikor is a groundbreaking caregiver app designed to
                      improve the quality of care and support for individuals
                      with health and caregiving needs. Caregivers play a
                      critical role in providing
                    </p>
                  </div>
                  <Link href="#" className="btn btn-outline-dark rounded-pill">
                    Read more
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-4 bg-transparent">
                <div className="d-flex justify-content-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={shikorImg}
                    alt="e-commerce"
                    width="200"
                    height="100"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title my-3">
                    Case study title goes here
                  </h5>
                  <div className="d-flex justify-content- my-4">
                    <p className="mb-0">
                      Shikor is a groundbreaking caregiver app designed to
                      improve the quality of care and support for individuals
                      with health and caregiving needs. Caregivers play a
                      critical role in providing
                    </p>
                  </div>
                  <Link href="#" className="btn btn-outline-dark rounded-pill">
                    Read more
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-4 bg-transparent">
                <div className="d-flex justify-content-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={shikorImg}
                    alt="e-commerce"
                    width="200"
                    height="100"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title my-3">
                    Case study title goes here
                  </h5>
                  <div className="d-flex justify-content- my-4">
                    <p className="mb-0">
                      Shikor is a groundbreaking caregiver app designed to
                      improve the quality of care and support for individuals
                      with health and caregiving needs. Caregivers play a
                      critical role in providing
                    </p>
                  </div>
                  <Link href="#" className="btn btn-outline-dark rounded-pill">
                    Read more
                    <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
                  </Link>
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

CaseStudies.Layout = Layout;

export default CaseStudies;
