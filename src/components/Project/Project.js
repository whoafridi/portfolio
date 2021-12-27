import React from "react";
import p2 from "../../images/projects/2.png";
import p3 from "../../images/projects/3.png";
import p from "../../images/projects/4.png";
import ssdenti from "../../images/projects/ssdenti.png";
import sspro from "../../images/projects/sspro.png";
import "./Project.css";

export default function Project() {
  return (
    <div class="container mt-3 mb-5" id="projects">
      <h1
        class="header text-center h1 fw-bold"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Projects
      </h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-150 card-group" >
            <img src={p} class="card-img-top" alt="..."  data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"/>
            <div class="card-body">
              <h5 class="card-title fw-bold">Food Network</h5>
              <div class="row">
                <div class="col text-center">
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    View details
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Food Network
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <img
                            src="https://raw.githubusercontent.com/whoafridi/food_network/main/images/ss.png"
                            class="card-img-top img-fluid"
                            alt="food-network"
                          />
                          <h6 class="mt-3">Technology used</h6>
                          <span class="badge rounded-pill bg-primary">
                            HTML-5
                          </span>
                          <span class="badge rounded-pill bg-danger">
                            CSS-3
                          </span>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary">
                            <a
                              class="modal-a"
                              href="https://whoafridi.github.io/food_network/"
                              target="_blank"
                            >
                              View site
                            </a>
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
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
        <div class="col">
          <div class="card h-150 card-group">
            <img src={p2} class="card-img-top" alt="projects" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"/>
            <div class="card-body">
              <h5 class="card-title fw-bold">ProCourier services</h5>
              <div class="row">
                <div class="col text-center">
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    View details
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal2"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Pro-courier
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <img
                            src={sspro}
                            class="card-img-top img-fluid"
                            alt="pro-courier"
                          />
                          <h6 class="mt-3">Technology used</h6>
                          <span class="badge rounded-pill bg-primary">
                            React
                          </span>
                          <span class="badge rounded-pill bg-danger">
                            React-Bootstrap
                          </span>
                          <span class="badge rounded-pill bg-danger">
                            Firebase
                          </span>
                          <span class="badge rounded-pill bg-danger">
                            Nodejs
                          </span>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary">
                            <a
                              class="modal-a"
                              href="https://pro-courier.web.app/"
                              target="_blank"
                            >
                              View
                            </a>
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
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
        <div class="col">
          <div class="card h-150 card-group">
            <img src={p3} class="card-img-top" alt="..."  data-aos="fade-up-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"/>
            <div class="card-body">
              <h5 class="card-title fw-bold">ProDenti healthcare services</h5>
              <div class="row">
                <div class="col text-center">
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    View details
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal3"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Pro-denti
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <img
                            src={ssdenti}
                            class="card-img-top img-fluid"
                            alt="pro-denti"  data-aos="fade-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                          />
                          <h6 class="mt-3">Technology used</h6>
                          <span class="badge rounded-pill bg-primary">
                            React
                          </span>
                          <span class="badge rounded-pill bg-danger">
                            React-Bootstrap
                          </span>
                          <span class="badge rounded-pill bg-danger">
                            Firebase
                          </span>
                          <span class="badge rounded-pill bg-danger">
                            Nodejs
                          </span>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary">
                          <a
                            class="modal-a"
                            href="https://pro-denti.web.app/"
                            target="_blank"
                          >
                            View
                          </a>
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
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
