import React from 'react'

export default function Header() {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand fw-bold" href="#">Rafiu</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link" aria-current="page" href="#home">Home</a>
                  <a className="nav-link" href="#projects">Projects</a>
                  <a className="nav-link" href="#technologies">Technology</a>
                  <a className="nav-link" href="#aboutme">About me</a>
                  <a className="nav-link" href="#contactme">Contact me</a>
                </div>
              </div>
            </div>
          </nav>
      </div>
    )
}
