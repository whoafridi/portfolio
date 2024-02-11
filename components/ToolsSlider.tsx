import ExportableImage from "./ExportableImage";

import xdLogo from "../assets/images/home/tools/adobe-xd.jpg";
import figmaLogo from "../assets/images/home/tools/figma-logo.png";
import githubLogo from "../assets/images/home/tools/github-logo.png";
import htmlLogo from "../assets/images/home/tools/html-logo.png";
import illustratorLogo from "../assets/images/home/tools/illustrator-logo.png";
import javaLogo from "../assets/images/home/tools/java-logo.png";
import mysqlLogo from "../assets/images/home/tools/mysql-logo.png";
import nodeLogo from "../assets/images/home/tools/nodejs-logo.png";
import psLogo from "../assets/images/home/tools/photoshop-logo.png";
import phpLogo from "../assets/images/home/tools/php-logo.png";
import pyLogo from "../assets/images/home/tools/python-logo.png";
import reactLogo from "../assets/images/home/tools/react-logo.png";

const ToolsSlider: React.FC = () => {
  return (
    <div className="slider container rounded-5">
      <div className="slide-track py-5">
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={xdLogo}
            alt="adobe xd logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={figmaLogo}
            alt="figma logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={githubLogo}
            alt="github logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={htmlLogo}
            alt="html logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={illustratorLogo}
            alt="illustrator logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={javaLogo}
            alt="java logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={mysqlLogo}
            alt="mysql logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={nodeLogo}
            alt="node logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={psLogo}
            alt="ps logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={phpLogo}
            alt="php logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={pyLogo}
            alt="python logo"
            className="img-fluid"
          />
        </div>
        <div className="slide">
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={reactLogo}
            alt="reactjs logo"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ToolsSlider;
