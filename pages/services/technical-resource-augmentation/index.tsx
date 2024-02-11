import Head from "next/head";
import Link from "next/link";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import ExportableImage from "../../../components/ExportableImage";
import Faq from "../../../components/Faq";
import SITEMAP from "../../../components/SITEMAP";
import Layout from "../../../components/_Layout";

import blog_img from "../../../assets/images/home/blog/blog-01.png";
import dev01 from "../../../assets/images/services/dev/dev-01.png";
import dev02 from "../../../assets/images/services/dev/dev-02.png";
import dev03 from "../../../assets/images/services/dev/dev-03.png";
import dev04 from "../../../assets/images/services/dev/dev-04.png";
import dev05 from "../../../assets/images/services/dev/dev-05.png";
import dev06 from "../../../assets/images/services/dev/dev-06.png";
import codeIcon from "../../../assets/images/services/hire/code.png";
import searchIcon from "../../../assets/images/services/hire/search.png";
import supportIcon from "../../../assets/images/services/hire/support.png";
import teamIcon from "../../../assets/images/services/hire/team.png";
import angularLogo from "../../../assets/images/services/tech/angularjs.png";
import awsLogo from "../../../assets/images/services/tech/aws.png";
import azureLogo from "../../../assets/images/services/tech/azure.png";
import cassandraLogo from "../../../assets/images/services/tech/cassandra.png";
import djangoLogo from "../../../assets/images/services/tech/django.png";
import dockerLogo from "../../../assets/images/services/tech/docker.png";
import gcpLogo from "../../../assets/images/services/tech/gcp.png";
import javaLogo from "../../../assets/images/services/tech/java.png";
import jsLogo from "../../../assets/images/services/tech/js.png";
import kotlinLogo from "../../../assets/images/services/tech/kotlin.png";
import kuberneticsLogo from "../../../assets/images/services/tech/kubernetis.png";
import mysqlLogo from "../../../assets/images/services/tech/mysql.png";
import postgreLogo from "../../../assets/images/services/tech/postgre.png";
import pythonLogo from "../../../assets/images/services/tech/python.png";
import railsLogo from "../../../assets/images/services/tech/rails.png";
import reactLogo from "../../../assets/images/services/tech/reactjs.png";
import redisLogo from "../../../assets/images/services/tech/redis.png";
import rubyLogo from "../../../assets/images/services/tech/ruby.png";
import sparkLogo from "../../../assets/images/services/tech/spark.png";
import swiftLogo from "../../../assets/images/services/tech/swift.png";
import tsLogo from "../../../assets/images/services/tech/ts.png";
import vueLogo from "../../../assets/images/services/tech/vue.png";

const TechnicalResourceAugmentation: React.FC = () => {
  return (
    <>
      <Head>
        <title>Technical resource augmentation - RoseTech Solutions LTD</title>
      </Head>
      <section className="container py-5">
        <h1 className="display-1 fw-medium text-center">
          Technical resource augmentation
        </h1>
        <h4 className="fw-normal opacity-75 text-black text-center py-3 py-md-5">
          Get Expert Resources, Maximize Your Team Performance Through
          Augmentation Strategies
        </h4>
        <div className="d-md-flex justify-content-center gap-3 text-center">
          <Link href={SITEMAP.hiredeveloper}>
            <Button>
              Hire developers
              <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
            </Button>
          </Link>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="display-1 fw-medium text-start">
          About team augmentation services
        </h2>
        <h4 className="fw-normal opacity-75 text-black">
          Don't let understaffing hold you back. Maximize your team's
          performance and reach your business goals with the best IT Staff
          Augmentation services from one of the most promising IT Staffing
          Companies. We provide the resources and support you need to keep your
          project on track and meet your deadlines.
        </h4>
      </section>
      <section className="container py-5">
        <h2 className="h1 text-center">
          Why choose <span className="text-warning">RoseTech</span> for
          technical team augmentation services?
        </h2>
        <div className="row g-3 py-5">
          <div className="col-md-6">
            <Card>
              <div className="d-flex p-3 align-items-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={searchIcon}
                  alt="simple smart card"
                  className="img-fluid"
                />
                <h5 className="card-title mb-0 ms-3">5 step hiring process</h5>
              </div>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <div className="d-flex p-3 align-items-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={codeIcon}
                  alt="simple smart card"
                  className="img-fluid"
                />
                <h5 className="card-title mb-0 ms-3">
                  Middle senior level developers
                </h5>
              </div>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <div className="d-flex p-3 align-items-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={teamIcon}
                  alt="simple smart card"
                  className="img-fluid"
                />
                <h5 className="card-title mb-0 ms-3">
                  Cultural fit and team synergy
                </h5>
              </div>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <div className="d-flex p-3 align-items-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={supportIcon}
                  alt="simple smart card"
                  className="img-fluid"
                />
                <h5 className="card-title mb-0 ms-3">
                  Account manager support
                </h5>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="services py-5">
        <div className="container position-relative">
          <h2 className="text-start h1 fw-semibold py-3">
            Diverse technology competency of our dedicated remote developers
          </h2>
          <h4 className="fw-normal opacity-75 text-black">
            Each of our experts has more than 5 years of experience and undergo
            a thorough recruiting process.
          </h4>
          <div className="row py-0 py-md-5">
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    01
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black position-relative z-3">
                  DevOps developers
                </h3>
                <p className="card-text text-black opacity-75">
                  These IT Generalists are those who collaborate with front-end
                  developers, back-end developers, and the others to oversee the
                  code release, deployments, and integration process.
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
                  Front end engineers
                </h3>
                <p className="card-text text-black opacity-75">
                  These professionals work closely with designers to develop the
                  “look and feel” of the project. These members are the ones
                  that code and test user interface elements and functionality.
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
                <h3 className="card-title my-5 text-black position-relative z-3">UI/UX designers</h3>
                <p className="card-text text-black opacity-75">
                  They take the responsibility to create an optimal experience
                  for your targeted customer or stakeholder when they interact
                  with your products.
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
                <h3 className="card-title my-5 text-black position-relative z-3">
                  Back end developers
                </h3>
                <p className="card-text text-black opacity-75">
                  These experts are in charge of designing and building the
                  architecture as well as maintaining the server components of
                  the applications.
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
                  QA engineers / testers
                </h3>
                <p className="card-text text-black opacity-75">
                  They are in charge of monitoring the quality of the whole
                  product development lifecycle and they help you ensure your
                  application/ products run smoothly before introducing them to
                  the end-users.
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
                <h3 className="card-title my-5 text-black position-relative z-3">Product manager</h3>
                <p className="card-text text-black opacity-75">
                  They are the leader of the development team. They report
                  directly to you and they also help you to initiate, plan,
                  design, execute, and monitor the entire development process.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 order-1 order-md-0 d-none d-md-block">
            <div className="row">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">01</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Talent requirements</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">02</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Contact signing</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">03</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Talent allocation</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">04</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Project continues</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-0 d-block d-md-none">
            <div className="row">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">01</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Talent requirements</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">02</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Contact signing</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">03</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Talent allocation</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">04</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Project continues</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <h2 className="h1 fw-semibold">Team Augmentation Process</h2>
            <h4 className="fw-normal py-2 my-md-5">
              Our team augmentation process is designed with flexibility so that
              businesses can easily find and deploy the exact skills needed for
              their project at any given time.
            </h4>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="h1 text-center">
          Benefits of hiring a dedicated remote developer from
          <span className="text-warning"> RoseTech</span>
        </h2>
        <h4 className="text-center py-3 opacity-75 fw-normal">
          RoseTech's remote developers often come with strong project management
          skills, ensuring that your projects run smoothly and on schedule.
        </h4>
        <div className="row g-3">
          <div className="col-md-4">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={dev01}
                  alt="simple smart card"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-normal">
                Start immediately. No delay in project expansion
              </h4>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={dev02}
                  alt="learning environment"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-normal">
                Lowest cost for recruitment and transparent cost model
              </h4>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={dev03}
                  alt="agile mindset"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-normal">Scalable quickly</h4>
            </Card>
          </div>
          <div className="col-md-4 mt-md-5 mt-3">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={dev04}
                  alt="continuous improvement"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-normal">
                No risk of staff turnover
              </h4>
            </Card>
          </div>
          <div className="col-md-4 mt-md-5 mt-3">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={dev05}
                  alt="corporate social responsibility"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-normal">
                Backed by a dedicated team and Tech lead from RoseTech
              </h4>
            </Card>
          </div>
          <div className="col-md-4 mt-md-5 mt-3">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={dev06}
                  alt="corporate social responsibility"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-normal">
                No startup cost, flexible engagement model
              </h4>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-5 container">
        <h2 className="h1 text-center py-5">
          <span className="text-warning">Technologies</span> We Use
        </h2>
        <div className="rounded-4 services-gradient d-flex flex-row p-3 justify-content-evenly d-md-flex d-none mb-4">
          <h4 className="fw-semibold">Database</h4>
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={redisLogo}
            alt="e-commerce"
            className="img-fluid"
          />
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={cassandraLogo}
            alt="e-commerce"
            className="img-fluid"
          />
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={sparkLogo}
            alt="e-commerce"
            className="img-fluid"
          />
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={postgreLogo}
            alt="e-commerce"
            className="img-fluid"
          />
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={mysqlLogo}
            alt="e-commerce"
            className="img-fluid"
          />
        </div>
        <div className="rounded-4 services-gradient p-3 d-block d-md-none mb-3">
          <h4 className="fw-semibold text-center">Database</h4>
          <div className="row my-4">
            <div className="col-6 text-center">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={redisLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
            <div className="col-6 text-center">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={cassandraLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={sparkLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
            <div className="col-6 text-center">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={postgreLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
            <div className="text-center my-3">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={mysqlLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="rounded-4 services-gradient p-3">
              <h4 className="fw-semibold text-center">Frontend</h4>
              <div className="row my-4">
                <div className="text-center col-6">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={angularLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
                <div className="text-center col-6">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={jsLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="text-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={reactLogo}
                  alt="e-commerce"
                  className="img-fluid"
                />
              </div>
              <div className="row my-4">
                <div className="text-center col-6">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={vueLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
                <div className="text-center col-6">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={tsLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-4 services-gradient p-3">
              <h4 className="fw-semibold text-center">DevOps</h4>
              <div className="row my-4">
                <div className="text-center col-6">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={dockerLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
                <div className="text-center col-6">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={azureLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={gcpLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
                <div className="col-6 text-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={kuberneticsLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="text-center my-4">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={awsLogo}
                  alt="e-commerce"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="rounded-4 services-gradient p-3 h-100">
              <h4 className="fw-semibold text-center">Mobile</h4>
              <div className="row my-4">
                <div className="col-6 text-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={kotlinLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
                <div className="col-6 text-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={swiftLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={javaLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
                <div className="col-6 text-center">
                  <ExportableImage
                    placeholder="blur"
                    loading="lazy"
                    src={reactLogo}
                    alt="e-commerce"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-4 services-gradient d-flex flex-row p-3 justify-content-evenly d-none d-md-flex mt-4">
          <h4 className="fw-semibold">Backend</h4>
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={djangoLogo}
            alt="e-commerce"
            className="img-fluid"
          />
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={pythonLogo}
            alt="e-commerce"
            className="img-fluid"
          />
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={rubyLogo}
            alt="e-commerce"
            className="img-fluid"
          />
          <ExportableImage
            placeholder="blur"
            loading="lazy"
            src={railsLogo}
            alt="e-commerce"
            className="img-fluid"
          />
        </div>
        <div className="rounded-4 services-gradient p-3 d-block d-md-none mt-3">
          <h4 className="fw-semibold text-center">Backend</h4>
          <div className="row my-4">
            <div className="col-6 text-center">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={djangoLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
            <div className="col-6 text-center">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={pythonLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={rubyLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
            <div className="col-6 text-center">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={railsLogo}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <section className="py-5">
        <div className="container rounded-4 p-5 services-gradient">
          <h2 className="h1">Scale your team with us</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Your message
              </label>
              <textarea
                className="form-control"
                placeholder="Type your message"
                id="message"
                style={{ height: "30vh" }}
              ></textarea>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label
                  className="form-check-label opacity-75"
                  htmlFor="gridCheck"
                >
                  By sending this form you confirm that you have read and
                  accepted the <span className="fw-bold">Privacy Policy</span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="button" className="btn btn-warning rounded-pill">
                Send message
                <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-dark blogs py-5">
        <div className="container">
          <h2 className="text-center display-5 text-white fw-semibold py-5">
            Our Blogs
          </h2>
          <div className="row g-3 pb-5">
            <div className="col-md-3">
              <div className="card rounded-4 bg-transparent">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={blog_img}
                  alt="e-commerce"
                  className="img-fluid"
                />
                <div className="card-body text-white">
                  <h5 className="card-title my-3">
                    Top 5 internet banking app in bangladesh
                  </h5>
                  <div className="d-flex justify-content-between my-4">
                    <p className="mb-0">By Rosetech</p>
                    <p className="mb-0">June 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card rounded-4 bg-transparent">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={blog_img}
                  alt="e-commerce"
                  className="img-fluid"
                />
                <div className="card-body text-white">
                  <h5 className="card-title my-3">
                    Top 5 internet banking app in bangladesh
                  </h5>
                  <div className="d-flex justify-content-between my-4">
                    <p className="mb-0">By Rosetech</p>
                    <p className="mb-0">June 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card rounded-4 bg-transparent">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={blog_img}
                  alt="e-commerce"
                  className="img-fluid"
                />
                <div className="card-body text-white">
                  <h5 className="card-title my-3">
                    Top 5 internet banking app in bangladesh
                  </h5>
                  <div className="d-flex justify-content-between my-4">
                    <p className="mb-0">By Rosetech</p>
                    <p className="mb-0">June 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card rounded-4 bg-transparent">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={blog_img}
                  alt="e-commerce"
                  className="img-fluid"
                />
                <div className="card-body text-white">
                  <h5 className="card-title my-3">
                    Top 5 internet banking app in bangladesh
                  </h5>
                  <div className="d-flex justify-content-between my-4">
                    <p className="mb-0">By Rosetech</p>
                    <p className="mb-0">June 19, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-warning rounded-pill">
              See All
              <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

TechnicalResourceAugmentation.Layout = Layout;
export default TechnicalResourceAugmentation;
