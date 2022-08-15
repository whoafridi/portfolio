import React from 'react'

export default function Technology() {
    return (
      <div className="container mt-5 mb-3" id="technology">
      <h1 className="header text-center h1 fw-bold"  data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">Technology stack</h1>
      <div className="row">
        <div className="col-md-4 col-sm-3 mt-3 mb-3">
          <div className="d-flex align-items-center justify-content-center"  
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          >
            <img className="w-25" src="https://i.ibb.co/NZhp07g/html-1.png" alt=""/>
            <img className="w-25" src="https://i.ibb.co/YPRVVsb/bootstrap.png" alt=""/>
            <img className="w-25" src="https://i.ibb.co/MpdS4VS/html3.png" alt=""/>
          </div>
        </div>
        <div className="col-md-4 col-sm-3 mt-3 mb-3">
          <div className="d-flex align-items-center justify-content-center"  
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          >
            <img className="w-25" src="https://i.ibb.co/WtybbhY/javascript.png" alt=""/>
            <img className="w-25" src="https://i.ibb.co/23YDv2x/react.png" alt=""/>
          </div>
        </div>
        <div className="col-md-4 col-sm-3 mt-3 mb-3">
          <div className="d-flex align-items-center justify-content-center"  
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
            <img className="w-25" src="https://i.ibb.co/ZcJ0H3L/nodejs.png" alt=""/>
            <img className="w-25" src="https://i.ibb.co/cL9rRwg/firebase.png" alt=""/>
            <img className="w-25" src="https://i.ibb.co/nBCvt58/mongodb.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
    )
}
