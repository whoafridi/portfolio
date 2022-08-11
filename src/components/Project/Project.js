import "./Project.css";
import food from "../../images/projects/4.png";
import ssfood from "../../images/projects/ssfood.png";
import denti from "../../images/projects/denti.png";
import ssdenti from "../../images/projects/ssdenti.png";
import sspro from "../../images/projects/courier.png";
import pro from "../../images/projects/sscourier.png";
import watch from "../../images/projects/watch.png";
import sswatch from "../../images/projects/sswatch.png";

const projects = [
  {
    id: 1,
    img: food,
    title: "Food Network",
    tech: "Html",
    bg: ssfood,
  },
  {
    id: 2,
    img: ssdenti,
    title: "Pro-denti",
    tech: "Html",
    bg: denti,
  },
  {
    id: 3,
    img: pro,
    title: "Pro-courier",
    tech: "html",
    bg: sspro,
  },
  {
    id: 4,
    img: sswatch,
    title: "watch",
    tech: "html",
    bg: watch,
  },
  // {
  //   img: "",
  //   title: "",
  //   tech: ""
  // },
];

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
        {
          projects.map(({ img, title, tech, bg, id }) => {
            console.log(`hello ${id}`);
            return (
              <div className="col">
                <div className="card h-150 card-group">
                  <img
                    src={img}
                    className="card-img-top"
                    alt={title}
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <div className="row">
                      <div className="col text-center">
                        <button
                          type="button"
                          className="btn btn-danger me-3 rounded-pill"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Quick View
                        </button>
                        <button type="button" className="btn btn-dark rounded-pill">
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
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  {title}
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
                                  src={bg}
                                  className="card-img-top img-fluid"
                                  alt={title}
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
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                >
                                  <a
                                    className="modal-a"
                                    href="https://whoafridi.github.io/food_network/"
                                    target="_blank"
                                    rel="noreferrer"
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
            );
          })}
      </div>
    </div>
  );
}
