import "./Project.css";
import food from "../../images/projects/4.png";
import ssfood from "../../images/projects/ssfood.png";
import denti from "../../images/projects/denti.png";
import ssdenti from "../../images/projects/ssdenti.png";
import sspro from "../../images/projects/courier.png";
import pro from "../../images/projects/sscourier.png";
import watch from "../../images/projects/watch.png";
import sswatch from "../../images/projects/sswatch.png";
import { Button } from "react-bootstrap";

const projects = [
  {
    id: 1,
    img: food,
    title: "Food Network",
    tech: "Html",
    bg: ssfood,
  },
  {
    id: 2,
    img: ssdenti,
    title: "Pro-denti",
    tech: "Html",
    bg: denti,
  },
  {
    id: 3,
    img: pro,
    title: "Pro-courier",
    tech: "html",
    bg: sspro,
  },
  {
    id: 4,
    img: sswatch,
    title: "watch",
    tech: "html",
    bg: watch,
  },
  // {
  //   img: "",
  //   title: "",
  //   tech: ""
  // },
];

export default function Project() {
  return (
    <div className="container mt-3 mb-5" id="projects">
      <h1
        className="header text-center h1 fw-bold"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Projects
      </h1>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
        <Button className="me-3 btn-dark rounded-pill">All</Button>
        <Button className="me-3 btn-dark rounded-pill">Web Design</Button>
        <Button className="me-3 btn-dark rounded-pill">React</Button>
        <Button className="me-3 btn-dark rounded-pill">MERN</Button>
        <Button className="me-3 btn-dark rounded-pill">Others</Button>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map(({ img, title, tech, bg, id }) => {
          console.log(`hello ${id}`);
          return (
            <div className="col">
              <div className="card h-150 card-group">
                <img
                  src={img}
                  className="card-img-top"
                  alt={title}
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{title}</h5>
                  <div className="row">
                    <div className="col text-center">
                      <button
                        type="button"
                        className="btn btn-dark rounded-pill"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
