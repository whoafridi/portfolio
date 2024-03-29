import contact from "../../images/contact.png";
import emailjs from 'emailjs-com';
import { useRef } from "react";

export default function Contactme() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_8rb9aas', 'template_acoq4d7', form.current, 'ZJElxHvv98PTVP8hh')
      .then((result) => {
          alert("Mail sent successfully");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="container mt-4 mb-2" id="contact">
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
          <img className="img-fluid" src={contact} alt="rafiuzzaman bhuiyan-aboutme-icon" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <form className="row g-3" ref={form} onSubmit={sendEmail}>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label ms-1 header">
                Name
              </label>
              <input 
                required
                type="text"
                className="form-control rounded-pill"
                id="inputEmail4"
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label ms-1 header">
                Email
              </label>
              <input
                required
                type="email"
                className="form-control rounded-pill"
                id="inputEmail4"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputState" className="form-label ms-1 header">
                Message
              </label>
              <textarea
                required
                className="form-control rounded-pill"
                aria-label="With textarea"
                placeholder="Enter your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-12">
              <button
                value="Send" 
                type="submit"
                className="border-0 rounded-pill header-btn2"
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
