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
  ]

  return (
    <Container className="header mt-5" id="technology">
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
          tech?.map(({ id, name, img }) => {
            return (
              <Col key={id}
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="header"
              >
                <div className="text-center">
                  <img
                    className="img-fluid w-25"
                    src={img}
                    alt={name}
                  />
                  <h5 style={{ marginTop: "0.8em" }}>{name}</h5>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
