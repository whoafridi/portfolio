import React from 'react'
import contact from '../../images/contact.png'
export default function Contactme() {
    return (
        <div className="container mt-4 mb-2" id="contactme">
        <h1 className="header text-center h1 fw-bold">Contact me</h1>
        <div className="row text-start align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <img className="img-fluid" src={contact} alt="aboutme-icon"/>
              </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <form className="row g-3">
                    <div className="col-12">
                        <label for="inputEmail4" className="form-label">Name</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="enter your name"/>
                      </div>
                    <div className="col-12">
                      <label for="inputEmail4" className="form-label">Email</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="enter your email"/>
                    </div>
                    <div className="col-12">
                      <label for="inputState" className="form-label">Message</label>
                      <textarea className="form-control" aria-label="With textarea" placeholder="enter your messages (if any)"></textarea>
                       
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-dark  header-btn rounded-pill">Submit</button>
                    </div>
                  </form>
            </div>
        </div>
      </div>
    )
}
