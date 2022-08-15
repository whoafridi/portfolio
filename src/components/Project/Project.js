import "./Project.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

export default function Project() {
  return (
    <div className="container mt-3 mb-5" id="projects">
      <h1
        className="header text-center h1 fw-bold mb-5"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Projects
      </h1>
      {/* <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
        <Button className="me-3 btn-dark rounded-pill">All</Button>
        <Button className="me-3 btn-dark rounded-pill">Web Design</Button>
        <Button className="me-3 btn-dark rounded-pill">React</Button>
        <Button className="me-3 btn-dark rounded-pill">MERN</Button>
        <Button className="me-3 btn-dark rounded-pill">Others</Button>
      </div> */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map(({ homePage, projectName, tech, bg, id }) => {
          console.log(`hello ${id}`);
          return (
            <div className="col">
              <div className="card h-150 card-group">
                <img
                  src={homePage}
                  className="card-img-top"
                  alt='lol'
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{projectName}</h5>
                  <div className="row">
                    <div className="col text-center">
                      <Link to={`/details/${id}`}>
                        <button
                          type="button"
                          className="btn btn-dark rounded-pill"
                        >
                          View details
                        </button>
                      </Link>
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
