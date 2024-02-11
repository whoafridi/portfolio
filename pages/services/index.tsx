import Head from "next/head";

import Card from "../../components/Card";
import Layout from "../../components/_Layout";

const Services: React.FC = () => {
  return (
    <>
      <Head>
        <title>Services - RoseTech Solutions LTD</title>
      </Head>
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold">Our Services</h1>
          <h6 className="opacity-75">
            Our team of experts leverages the latest technologies to create
            innovative and scalable software solutions that help our clients
            improve their business processes, increase efficiency, and drive
            growth. We are committed to delivering high-quality, reliable, and
            secure software that meets the needs of our clients and their
            customers. With a wide range of services including.
          </h6>
          <div className="row">
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    01
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black position-relative z-3">
                  Software development
                </h3>
                <p className="card-text text-black">
                  We develop applications for both iOS and Android platforms,
                  using the latest technologies such as React Native and
                  Flutter.
                </p>
              </Card>
            </div>
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    02
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black position-relative z-3">
                  Dev team augmentation
                </h3>
                <p className="card-text text-black">
                  Whether you're looking to improve your current infrastructure,
                  integrate new systems, or implement new technologies, we have
                  the expertise to guide you through the process
                </p>
              </Card>
            </div>
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    03
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black position-relative z-3">Cloud & DevOps</h3>
                <p className="card-text text-black">
                  With real-time data, you'll always know what's in your
                  warehouse, where it is, and when it's running low.
                </p>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    04
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black position-relative z-3">Website & SEO</h3>
                <p className="card-text text-black">
                  We can help you drive traffic to your website and boost your
                  online presence.
                </p>
              </Card>
            </div>
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    05
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black position-relative z-3">
                  Quality assurance
                </h3>
                <p className="card-text text-black">
                  Our systems provide real-time insights into your financial
                  performance, so you can make informed business decisions.
                </p>
              </Card>
            </div>
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    06
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black position-relative z-3">Ai & ML</h3>
                <p className="card-text text-black">
                  Our solutions are designed to help you automate tasks, improve
                  decision-making, and drive growth.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Services.Layout = Layout;
export default Services;
