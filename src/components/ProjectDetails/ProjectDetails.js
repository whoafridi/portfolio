import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Carousel from "react-grid-carousel";
import projects from "../../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const selectedProject = projects?.filter(
    (project) => project.id === parseInt(id)
  );

  return (
    <div className="project-details-section mt-3">
      <div className=" text-center mb-5">
        <h2 className="page-heading text-center header fw-bold">Project Details</h2>
      </div>
      <Container>
        <Row xs={1} lg={2} md={1} className="g-5">
          <Col xs={12} lg={7} md={12}>
            <Carousel
              cols={1}
              rows={1}
              gap={10}
              loop={true}
              autoplay={2000}
              responsiveLayout={[
                {
                  breakpoint: 992,
                  cols: 3,
                },
                {
                  breakpoint: 778,
                  cols: 2,
                },
              ]}
              mobileBreakpoint={576}
            >
              {selectedProject[0]?.images?.map((image) => (
                <Carousel.Item className="px-2">
                  <div>
                    <img
                      className="img-fluid carousel-img"
                      src={image}
                      alt="page-images"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={12} lg={5} md={12}>
            <div className="project-details">
              <h3 className="project-name header">
                {selectedProject[0]?.projectName}
              </h3>
              <p className="industry">
                Industry: {selectedProject[0]?.websiteIndustry}
              </p>
              <p className="details-text">{selectedProject[0]?.description}</p>
              <div className="mb-3">
                <p className="technologies ">Techologies: </p>
                {selectedProject[0]?.techonologies.map((tools) => (
                  <span className="d-inline-block small tools__name">
                    {tools},
                  </span>
                ))}
              </div>
              <p>
                {" "}
                <span className="industry">Live Website:</span>{" "}
                <a
                  className=" fw-bold text-decoration-none"
                  href={selectedProject[0]?.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selectedProject[0]?.websiteLink}
                </a>
              </p>
              <p>
                {" "}
                <span className="industry">GitHub Client-site:</span>{" "}
                <a
                  className=" fw-bold text-decoration-none"
                  href={selectedProject[0]?.gitClientSide}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selectedProject[0]?.gitClientSide}
                </a>
              </p>
              {selectedProject[0]?.gitServerSide && (
                <p>
                  <span className="industry">GitHub Server-side:</span>{" "}
                  <a
                    className=" fw-bold text-decoration-none"
                    href={selectedProject[0]?.gitServerSide}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedProject[0]?.gitServerSide}
                  </a>
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetails;
