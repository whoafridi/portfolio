import "./Project.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import { AiOutlineDoubleRight } from 'react-icons/ai';

export default function Project() {
  const [allWorks, setAllWorks] = useState([]);

  useEffect(() => {
    const featuredProjects = projects.filter(
      (item) => item.status === "featured"
    );
    setAllWorks(featuredProjects);
  }, []);

  const handleFilterBtnClick = (e) => {
    const selectedProjects = projects.filter(
      (item) => item.category === e.target.value
    );
    setAllWorks(selectedProjects);
    console.log(selectedProjects);
  };

  const handleAllBtnClick = (e) => {
    setAllWorks(projects);
  };

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
      <h3
        className="header text-center h5 bold"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Which I build so far
      </h3>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
        <div>
          <Button
            className="me-3 rounded-pill header-btn2"
            value="all"
            onClick={handleAllBtnClick}
          >
            All <span className="badge">{projects.length}</span>
          </Button>
          <Button
            className="me-3 rounded-pill header-btn2"
            value="front-end"
            onClick={handleFilterBtnClick}
          >
            Front-End
          </Button>
          <Button
            className="me-3 rounded-pill header-btn2"
            value="full-stack"
            onClick={handleFilterBtnClick}
          >
            Full-stack
          </Button>
          <Button
            className="me-3 rounded-pill header-btn2"
            value="landing-page"
            onClick={handleFilterBtnClick}
          >
            Landing page
          </Button>
          <Button
            className="me-3 rounded-pill header-btn2"
            value="others"
            onClick={handleFilterBtnClick}
          >
            Others
          </Button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allWorks.slice(0, 6).map(({ homePage, projectName, id }) => {
          return (
            <div className="col">
              <div className="card h-150 card-group">
                <Link to={`/details/${id}`}>
                  <img
                    src={homePage}
                    className="card-img-top"
                    alt={projectName}
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title fw-bold header">{projectName}</h5>
                  <div className="row">
                    <div className="col text-center">
                      <Link to={`/details/${id}`}>
                        <button
                          type="button"
                          className="btn btn-dark rounded-pill header-btn2"
                        >
                          View details <AiOutlineDoubleRight />
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
