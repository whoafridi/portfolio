import contact from "../../images/contact.png";

export default function Contactme() {
  return (
    <div className="container mt-4 mb-2" id="contactme">
      <h1
        className="header text-center h1 fw-bold"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Contact me
      </h1>
      <div className="row text-start align-items-center">
        <div
          className="col-lg-6 col-md-6 col-sm-12"
          data-aos="fade-up-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img className="img-fluid" src={contact} alt="aboutme-icon" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label ms-1">
                Name
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="inputEmail4"
                placeholder="enter your name"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label ms-1">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-pill"
                id="inputEmail4"
                placeholder="enter your email"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputState" className="form-label ms-1">
                Message
              </label>
              <textarea
                className="form-control rounded-pill"
                aria-label="With textarea"
                placeholder="enter your messages (if any)"
              ></textarea>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-dark  header-btn rounded-pill"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
