import "./Project.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import projects from "../../data/projects";
// import { AiOutlineDoubleRight } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Project() {
  const [displayWorks, setDisplayWorks] = useState([]);
  const [seeAll, SetSeeAll] = useState(false);

  // featured projects
  useEffect(() => {
    const featuredProjects = projects.filter(
      (item) => item.status === "featured"
    );
    setDisplayWorks(featuredProjects);
  }, []);

  // button handler for projects filter
  const handleFilterBtnClick = (e) => {
    const selectedProjects = projects.filter(
      (item) => item.category === e.target.value
    );
    setDisplayWorks(selectedProjects);
    console.log(selectedProjects);
  };

  const handleAllBtnClick = (e) => {
    const featuredProjects = projects.filter(
      (item) => item.status === "featured"
    );
    setDisplayWorks(featuredProjects);
    console.log(featuredProjects, e);
  };

  const loadMore = () => {
    if (seeAll === false) {
      setDisplayWorks(projects);
      SetSeeAll(true);
    }
    if (seeAll === true) {
      setDisplayWorks(projects.slice(0, 6));
      SetSeeAll(false);
    }
  };

  return (
    <div className="container mt-5 mb-5" id="projects">
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
            className="border-0 me-3 rounded-pill header-btn2"
            value="all"
            onClick={handleAllBtnClick}
          >
            All <span className="badge">{projects.length}</span>
          </Button>
          <Button
            className="border-0 me-3 rounded-pill header-btn2"
            value="front-end"
            onClick={handleFilterBtnClick}
          >
            Front-End
          </Button>
          <Button
            className="border-0 me-3 rounded-pill header-btn2"
            value="full-stack"
            onClick={handleFilterBtnClick}
          >
            Full-stack
          </Button>
          <Button
            className="border-0 me-3 rounded-pill header-btn2"
            value="landing-page"
            onClick={handleFilterBtnClick}
          >
            Landing page
          </Button>
          <Button
            className="border-0 me-3 rounded-pill header-btn2"
            value="others"
            onClick={handleFilterBtnClick}
          >
            Others
          </Button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {displayWorks?.map(
          ({
            homePage,
            projectName,
            id,
            technologies,
            websiteLink,
            gitClientSide,
          }) => {
            return (
              <div className="col" key={id}>
                <div className="card h-150 card-group">
                  <div className="portfolio">
                    <div
                      className="box"
                      style={{
                        backgroundImage: "url(" + homePage + ")",
                      }}
                    ></div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold header mt-3 mb-3">
                      {projectName}
                    </h5>
                    <div className="row">
                      <div className="col text-center">
                        <div className="he">
                          {technologies?.map((tech) => (
                            <span className="mt-2 mb-3 technology-text rounded-pill badge ms-2">
                              {tech.name}
                            </span>
                          ))}
                        </div>
                        {/* <Link to={`/details/${id}`}>
                        <button
                          type="button"
                          className="btn btn-dark rounded-pill header-btn2"
                        >
                          View details <AiOutlineDoubleRight />
                        </button>
                      </Link> */}
                        <div className="d-flex justify-content-center">
                          <a href={websiteLink}>
                            <FiExternalLink
                              style={{ height: "30px", width: "20px" }}
                            />{" "}
                          </a>
                          <a className="ms-4" href={gitClientSide}>
                            <FiGithub
                              style={{ height: "30px", width: "20px" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="text-center mt-4">
          <button onClick={loadMore} className="rounded-pill header-btn2 border-0">
            {seeAll === false ? "Load all projects" : "See Less"}
          </button>
        </div>
    </div>
  );
}
