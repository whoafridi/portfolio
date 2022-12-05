import { Col, Container, Row } from "react-bootstrap";
import "./Tools.css";
import {
  SiVisualstudio,
  SiGit,
  SiGithub,
  SiYarn,
  SiNetlify,
  SiHeroku,
} from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import firebaseLogo from "../../images/firebase-logo.svg";

const Tools = () => {
  return (
    <section id="tools" className="tools-section text-center header">
      <Container>
        <div className="mb-5">
          <h1 className="fw-bold header">Tools</h1>
          <p className="tools-text header">
            My weapons of choice to help tackle any project.
          </p>
        </div>
        <Row xs={2} lg={4} className="gy-5 justify-content-center">
          <Col>
            <div className="text-center">
              <SiVisualstudio size="5em" color="#68217a" />
              <h5 className="tools-name">Visual Studio code</h5>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <SiGit size="5em" color="rgb(243, 79, 41)" />
              <h5 className="tools-name">Git</h5>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <SiGithub size="5em" color="rgb(0, 0, 0)" />
              <h5 className="tools-name">GitHub</h5>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <FaNpm size="5em" color="#cb3837" />
              <h5 className="tools-name">NPM</h5>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <SiYarn size="5em" color="#3398c2" />
              <h5 className="tools-name">Yarn</h5>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <SiNetlify size="5em" color="#3AC1B6" />
              <h5 className="tools-name">Netlify</h5>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                className="img-fluid logo-firebase"
                src={firebaseLogo}
                alt="rafiuzzaman bhuiyan-firebase-logo"
              />
              <h5 className="tools-name">Firebase</h5>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <SiHeroku size="5em" color="#503A6C" />
              <h5 className="tools-name">Heroku</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tools;
