import { Container, Row, Col } from "react-bootstrap";

export default function Technology() {
  const tech = [
    {
      id: 1,
      name: "HTML",
      img: "https://i.ibb.co/NZhp07g/html-1.png",
    },
    {
      id: 2,
      name: "CSS",
      img: "https://i.ibb.co/MpdS4VS/html3.png",
    },
    {
      id: 3,
      name: "BootSrap 4/5",
      img: "https://i.ibb.co/YPRVVsb/bootstrap.png",
    },
    {
      id: 4,
      name: "JavaScript",
      img: "https://i.ibb.co/WtybbhY/javascript.png",
    }, {
      id: 5,
      name: "React Js",
      img: "https://i.ibb.co/23YDv2x/react.png",
    },
    {
      id: 6,
      name: "Node Js",
      img: "https://i.ibb.co/ZcJ0H3L/nodejs.png",
    },
    {
      id: 7,
      name: "MongoDb",
      img: "https://i.ibb.co/nBCvt58/mongodb.png",
    },
    {
      id: 8,
      name: "Firebase",
      img: "https://i.ibb.co/cL9rRwg/firebase.png",
    }
  ]

  return (
    <Container className="header" id="technology">
      <div className="mb-5">
        <h1 className="fw-bold header text-center"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >Technology</h1>
        <p className="text-center header">
          My technology stack that I'm preferred to work.
        </p>
      </div>
      <Row xs={2} lg={4} className="gy-5 justify-content-center">
        {
          tech?.map(({ name, img }) => {
            return (
              <Col key={tech.id}
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src={img}
                    alt="firebase-logo"
                  />
                  <h5 className="tools-name">{name}</h5>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
