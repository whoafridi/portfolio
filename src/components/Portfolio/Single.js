import { Col, Row } from "react-bootstrap";

const SingleWork = ({ work }) => {
  return (
    <Col className="single-project my-3" xs={12} md={6} lg={4}>
    
        <div className="single-work">
          <div className="work-img-container">
            <img className="work-img" src={work.photo} alt={work.name} />
          </div>
          <div className="p-2">
            <h4 className="project-name py-2">{work.name}</h4>
            <p className="project-description">{work.description}</p>
          </div>

          {work.technologies.map((item, index) => (
            <div className="technologies px-2 m-1" key={index}>
              {item.name}
            </div>
          ))}

          <Row>
            <Col className="text-center py-3" xs={12}>
              <a href={work.github} rel="noopener noreferrer" target="_blank">
              github  
              </a>
              <a href={work.website} rel="noopener noreferrer" target="_blank">
                live
              </a>
            </Col>
          </Row>
        </div>
    </Col>
  );
};

export default SingleWork;
