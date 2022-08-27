import React, { useEffect, useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";
import AllProjects from "../../data/projects";
import SingleWork from "./Single";

const Portfolio = () => {
  const [allWorks, setAllWorks] = useState([]);

  useEffect(() => {
    const featuredProjects = AllProjects.filter(
      (item) => item.status === "featured"
    );
    setAllWorks(featuredProjects);
  }, []);

  const handleFilterBtnClick = (e) => {
    const selectedProjects = AllProjects.filter(
      (item) => item.category === e.target.value
    );
    setAllWorks(selectedProjects);
    console.log(selectedProjects)
  };

  const handleAllBtnClick = (e) => {
    setAllWorks(AllProjects);
  };

  return (
    <section className="portfolio-container" name="portfolio" id="portfolio">
      <div className="common pt-5" data-aos="fade-up">
        <h1 className="mainHeader mt-5 text-center">Projects I have Built</h1>
        <div className="commonBorder" />
      </div>

      <Nav className="container d-flex align-items-center justify-content-center" data-aos="fade-up">
        <div className="project-button-container mb-5">
          <button value="all" onClick={handleAllBtnClick}>
            All <span className="badge ms-2">{AllProjects.length}</span>
          </button>
          <button value="full-stack" onClick={handleFilterBtnClick} className="ms-2">
            Full Stack
          </button>
          <button value="front-end" onClick={handleFilterBtnClick} className="ms-2">
            Front End
          </button>
          <button value="landing-page" onClick={handleFilterBtnClick} className="ms-2">
            Landing Page
          </button>
          <button value="others" onClick={handleFilterBtnClick} className="ms-2">
            Others
          </button>
        </div>
      </Nav>

      <Container>
        <Row>
          {allWorks.map((work, index) => (
            <SingleWork work={work} key={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
