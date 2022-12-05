import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h2 className="text-center header fw-bold mt-5 h1">Services</h2>
      <h5 className="text-center header">What I Offer</h5>
      <div className="container services__container ">
        <article className="service header">
          <div className="service__head header">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Will do pixel perfect web design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Can replicate design from Figma, PSD to HTML.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Experience over 1+ years.</p>
            </li>
          </ul>
        </article>
        <article className="service header">
          <div className="service__head header">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Will do web developement.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Doing developement using MERN stack.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Done both frontend + backend developement.</p>
            </li>
          </ul>
        </article>
        <article className="service header">
          <div className="service__head header">
            <h3>Front End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working with frontend developement.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using React.js and other css libraries.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build pixel perfect from UI design.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
