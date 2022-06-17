import React from "react";
import p2 from "../../images/projects/2.png";
import p3 from "../../images/projects/3.png";
import p from "../../images/projects/4.png";
import ssdenti from "../../images/projects/ssdenti.png";
import sspro from "../../images/projects/sspro.png";
import "./Project.css";

export default function Project() {
  return (
    <div className="container mt-3 mb-5" id="projects">
      <h1
        className="header text-center h1 fw-bold"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Projects
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-150 card-group" >
            <img src={p} className="card-img-top" alt="..."  
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Food Network</h5>
              <div className="row">
                <div className="col text-center">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View details
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Food Network
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img
                            src="https://raw.githubusercontent.com/whoafridi/food_network/main/images/ss.png"
                            className="card-img-top img-fluid"
                            alt="food-network"
                          />
                          <h6 className="mt-3">Technology used</h6>
                          <span className="badge rounded-pill bg-primary">
                            HTML-5
                          </span>
                          <span className="badge rounded-pill bg-danger">
                            CSS-3
                          </span>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary">
                            <a
                              className="modal-a"
                              href="https://whoafridi.github.io/food_network/"
                              target="_blank" rel="noreferrer"
                            >
                              View site
                            </a>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-150 card-group">
            <img src={p2} className="card-img-top" alt="projects" 
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">ProCourier services</h5>
              <div className="row">
                <div className="col text-center">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    View details
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal2"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Pro-courier
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img
                            src={sspro}
                            className="card-img-top img-fluid"
                            alt="pro-courier"
                          />
                          <h6 className="mt-3">Technology used</h6>
                          <span className="badge rounded-pill bg-primary">
                            React
                          </span>
                          <span className="badge rounded-pill bg-danger">
                            React-Bootstrap
                          </span>
                          <span className="badge rounded-pill bg-danger">
                            Firebase
                          </span>
                          <span className="badge rounded-pill bg-danger">
                            Nodejs
                          </span>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary">
                            <a
                              className="modal-a"
                              href="https://pro-courier.web.app/"
                              target="_blank" rel="noreferrer"
                            >
                              View
                            </a>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-150 card-group">
            <img src={p3} className="card-img-top" alt="..."  
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">ProDenti healthcare services</h5>
              <div className="row">
                <div className="col text-center">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    View details
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal3"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Pro-denti
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <img
                            src={ssdenti}
                            className="card-img-top img-fluid"
                            alt="pro-denti"  
                            data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                          />
                          <h6 className="mt-3">Technology used</h6>
                          <span className="badge rounded-pill bg-primary">
                            React
                          </span>
                          <span className="badge rounded-pill bg-danger">
                            React-Bootstrap
                          </span>
                          <span className="badge rounded-pill bg-danger">
                            Firebase
                          </span>
                          <span className="badge rounded-pill bg-danger">
                            Nodejs
                          </span>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">
                          <a
                            className="modal-a"
                            href="https://pro-denti.web.app/"
                            target="_blank" rel="noreferrer"
                          >
                            View
                          </a>
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
