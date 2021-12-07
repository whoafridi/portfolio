import React from 'react'
import project2 from '../../images/projects/2.png'
import project3 from '../../images/projects/3.png'
import project1 from '../../images/projects/4.png'

export default function Project() {
    return (
        <div className="container mt-3 mb-5" id="projects">
        <h1 className="header text-center h1 fw-bold">Projects</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={project1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Food Network</h5>
                <p className="card-text"></p>
              </div>
              <div className="card-text">
                <button type="submit" className="btn btn-dark  header-btn rounded-pill">
                <a className="projects-a" href="https://whoafridi.github.io/food_network/" target="_blank">View</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={project2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title fw-bold">ProCourier services</h5>
                <p className="card-text"></p>
              </div>
              <div className="card-text">
                <a className="projects-a" href="https://pro-courier.web.app/" target="_blank">View</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={project3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title fw-bold">ProDenti healthcare services</h5>
                <p className="card-text"></p>
              </div>
              <div className="card-text">
                <a className="projects-a" href="https://pro-denti.web.app/" target="_blank" rel="noopener noreferrer">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
