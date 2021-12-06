import React from 'react';
import img from '../../images/aboutme.png';

export default function Aboutme() {
    return (
        <div className="container mt-4 mb-2" id="aboutme">
        <h1 className="header text-center h1 fw-bold">About me</h1>
        <div className="row text-start align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img className="img-fluid" src={img} alt="aboutme-icon"/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="header">Hi, I am a newbie web developer. I am a graduated student. I started learning web development from last Autumn. Before that I'm keen to develop some porjects of my university time. The pinnacle of development comes from the programming hero. I am still working on web development. My desire is to be a full stack web developer.</p>
                <button type="button" className="btn btn-dark  header-btn rounded-pill">Hire me</button>
                <button type="button" className="btn btn-dark  header-btn rounded-pill">Contact me</button>
            </div>
        </div>
    </div>
    )
}
