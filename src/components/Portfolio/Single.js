import { Col, Row } from "react-bootstrap";
 
const SingleWork = ({ work }) => {
  return (
    <>
    <div className="col">
              <div className="card h-150 card-group">
                <img
                  src={work.photo} alt={work.name} 
                  className="card-img-top"
                 
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold header"></h5>
                  <div className="row">
                    <div className="col text-center">
                        <button
                          type="button"
                          className="btn btn-dark rounded-pill header-btn2"
                        >
                          View details
                        </button>
                    </div>
                  </div>
                  <Row>
                  {work.technologies.map((item, index) => (
          <div className="technologies px-2 m-1" key={index}>
            {item.name}
          </div>
        ))}
        </Row>
                </div>
                
              </div>
            </div>
    
    <Col className="single-project my-3" xs={12} md={6} lg={4}>
      <div className="single-work">
        <div className="work-img-container">
          <img className="work-img" src={work.photo} alt={work.name} />
        </div>
        <div className="p-2">
          <h4 className="project-name py-2">{work.name}</h4>
          <p className="project-description">{work.description}</p>
        </div>

        

        
      </div>
    </Col>
    </>
  );
};

export default SingleWork;
