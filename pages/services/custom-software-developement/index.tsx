import Head from "next/head";
import Link from "next/link";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import ExportableImage from "../../../components/ExportableImage";
import SITEMAP from "../../../components/SITEMAP";
import Layout from "../../../components/_Layout";

import blog_img from "../../../assets/images/home/blog/blog-01.png";
import automotive from "../../../assets/images/home/industries/automotive-logo.png";
import ecommerce from "../../../assets/images/home/industries/ecom-logo.png";
import edtech from "../../../assets/images/home/industries/edtech-logo.png";
import fintech from "../../../assets/images/home/industries/fintech-logo.png";
import healthcare from "../../../assets/images/home/industries/healthcare-logo.png";
import ngo from "../../../assets/images/home/industries/ngo-logo.png";
import realstate from "../../../assets/images/home/industries/real-state-logo.png";
import rmg from "../../../assets/images/home/industries/rmg-logo.png";
import sme from "../../../assets/images/home/industries/sme-logo.png";
import software from "../../../assets/images/home/industries/software-logo.png";
import startup from "../../../assets/images/home/industries/startup-logo.png";
import telco from "../../../assets/images/home/industries/telicom-logo.png";
import focalIcon from "../../../assets/images/services/focal-point.png";
import supportIcon from "../../../assets/images/services/life-support.png";
import outsourcingIcon from "../../../assets/images/services/outsourcing.png";
import sdlcIcon from "../../../assets/images/services/sdlc-img.svg";
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
import transparencyIcon from "../../../assets/images/services/transparency.png";

const customSoftwareDevelopement: React.FC = () => {
  return (
    <>
      <Head>
        <title>Custom Software Development - RoseTech Solutions LTD</title>
      </Head>
      <section className="container py-5">
        <h1 className="display-1 fw-medium text-center">
          Custom Software Development
        </h1>
        <h4 className="fw-normal opacity-75 text-black text-center py-3 py-md-5">
          You have a great idea. We know the best wayto bring it to life!
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
          About custom software development
        </h2>
        <h4 className="fw-normal opacity-75 text-black">
          Rosetech offers exceptional custom software development services
          tailored to meet your unique business needs. Our team of experienced
          developers and experts will collaborate closely with your organization
          to design, build, and deploy software solutions that empower your
          operations and drive growth. Whether you require a specialized
          application, a custom software suite, or integration solutions,
          Rosetech combines cutting-edge technology with a client-centric
          approach to deliver high-quality, scalable, and efficient software
          that aligns perfectly with your business objectives. Experience the
          future of technology with Rosetech's custom software development
          services, where innovation meets precision.
        </h4>
      </section>
      <section className="container py-5">
        <h2 className="h1 fw-semibold text-center py-5">
          RoseTech is an offshore partner for
        </h2>
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
                  <h4 className="fw-semibold ms-2">Idea-stage projects</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">03</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Growing startups</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-0 d-none d-md-block">
            <div className="row">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">02</h2>
                </div>
              </div>
              <div className="col-md-8">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Startups with prototypes</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">04</h2>
                </div>
              </div>
              <div className="col-md-8">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Small Businesses</h4>
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
                  <h4 className="fw-semibold ms-2">Idea-stage projects</h4>
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
                  <h4 className="fw-semibold ms-2">Startups with prototypes</h4>
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
                  <h4 className="fw-semibold ms-2">Growing startups</h4>
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
                  <h4 className="fw-semibold ms-2">Small Businesses</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services py-5">
        <div className="container position-relative">
          <h2 className="text-start h1 fw-semibold py-3">
            Software Development Services for Startups
          </h2>
          <div className="row py-0 py-md-5">
            <div className="col-md-4 g-3">
              <Card className="h-100">
                <div className="position-relative">
                  <h2 className="fw-bold opacity-50 position-absolute text-warning fw-semibold display-1">
                    01
                  </h2>
                </div>
                <h3 className="card-title my-5 text-black position-relative z-3">Discovery Phase</h3>
                <p className="card-text text-black opacity-75">
                  Our company offers startups a comprehensive discovery phase to
                  analyze their idea, evaluate challenges, and find solutions
                  for the right solution delivery.
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
                  Full-Cycle Product Development
                </h3>
                <p className="card-text text-black opacity-75">
                  Our company provides comprehensive end-to-end startup product
                  development services, from idea analysis to lifelong
                  maintenance and support, with expertise in technology
                  solutions, architecture design, UI/UX, project management, and
                  more.
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
                <h3 className="card-title my-5 text-black position-relative z-3">
                  Implementing New Features
                </h3>
                <p className="card-text text-black opacity-75">
                  Our company develops custom software solutions and improves
                  existing MVPs for startups in both early and scaling stages.
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
                <h3 className="card-title my-5 text-black position-relative z-3">MVP Development</h3>
                <p className="card-text text-black opacity-75">
                  Our startup software development company focuses on creating
                  cost-effective Minimum Valuable Products with core functions
                  and attractive designs to gain initial traction
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
                  Creating a Product Prototype
                </h3>
                <p className="card-text text-black opacity-75">
                  In the discovery phase, or as a separate UX service, we
                  analyze market needs and client requirements to create
                  prototypes that bring project ideas to life. The prototype is
                  a tangible visualization of a product idea in a digital form.
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
                <h3 className="card-title my-5 text-black position-relative z-3">
                  Dedicated Development Teams
                </h3>
                <p className="card-text text-black opacity-75">
                  Our company offers a cost-effective solution for startups by
                  providing quality offshore software development teams skilled
                  in Rails, Python, Java, React, Angular, Vue, Swift and React
                  Native.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="h1 fw-semibold">Software development Process</h2>
            <h4 className="fw-normal py-2 my-md-5">
              End to end development process enables teams to work on projects
              from scratch with efficiency, clarity, and accuracy. Throughout
              the process, our dedicated team works closely with stakeholders to
              ensure that the final product meets their needs and expectations.
            </h4>
            <ExportableImage
              placeholder="blur"
              loading="lazy"
              src={sdlcIcon}
              alt="e-commerce"
              className="img-fluid d-md-block d-none"
            />
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="row">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">01</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Planning</h4>
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
                  <h4 className="fw-semibold ms-2">Analysis</h4>
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
                  <h4 className="fw-semibold ms-2">Design</h4>
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
                  <h4 className="fw-semibold ms-2">Implementation</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">05</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Testing & integration</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">06</h2>
                </div>
              </div>
              <div className="col-md-7">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Maintenance</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-block d-md-none">
            <div className="row">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">01</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Planning</h4>
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
                  <h4 className="fw-semibold ms-2">Analysis</h4>
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
                  <h4 className="fw-semibold ms-2">Design</h4>
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
                  <h4 className="fw-semibold ms-2">Implementation</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">05</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Testing & integration</h4>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2 w-25">
                <div className="services-gradient rounded-circle p-2">
                  <h2 className="text-warning text-center mb-0">06</h2>
                </div>
              </div>
              <div className="col-md-7 w-75">
                <div className="services-gradient rounded-pill p-2">
                  <h4 className="fw-semibold ms-2">Maintenance</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="industries">
        <div className="container">
          <h2 className="h1 text-center my-5">Industries we serve</h2>
          <div className="row gy-3">
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={realstate}
                alt="real state"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={telco}
                alt="telecom"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={software}
                alt="software"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={startup}
                alt="startup"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={sme}
                alt="sme"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={automotive}
                alt="automotive"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row gy-3 mt-3">
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={healthcare}
                alt="healthcare"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={fintech}
                alt="fintech"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={rmg}
                alt="rmg"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={ngo}
                alt="ngo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={edtech}
                alt="edtech"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 col-lg-2 col-4">
              <ExportableImage
                placeholder="blur"
                loading="lazy"
                src={ecommerce}
                alt="e-commerce"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="h1 text-center py-5">
          Why Work with
          <span className="text-warning"> RoseTech</span>
        </h2>
        <div className="row g-3">
          <div className="col-md-4">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={transparencyIcon}
                  alt="simple smart card"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-semibold">
                Transparency & Direct access to the executive team
              </h4>
              <h6 className="opacity-75">
                Our company provides top talents while maintaining a focus on
                each client, and our C-level specialists actively participate in
                client projects as serial entrepreneurs. Daniel Vartanovex-CTO,
                Veeqo 01 / 01
              </h6>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={outsourcingIcon}
                  alt="learning environment"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-semibold">
                Not just an outsourcing company
              </h4>
              <h6 className="opacity-75">
                As a remote partner, we take ownership of projects and
                collaborate with clients to understand their motivations,
                obstacles, and goals to work together towards achieving them.
              </h6>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={supportIcon}
                  alt="agile mindset"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-semibold">Life-long tech support</h4>
              <h6 className="opacity-75">
                We provide life-long maintenance and support to all clients to
                ensure continued tech back-up, even after launch, for long-term
                projects.
              </h6>
            </Card>
          </div>
          <div className="col-md-4 mt-md-5 mt-3">
            <Card className="text-center p-3 h-100">
              <div className="d-flex justify-content-center">
                <ExportableImage
                  placeholder="blur"
                  loading="lazy"
                  src={focalIcon}
                  alt="continuous improvement"
                  className="img-fluid"
                />
              </div>
              <h4 className="card-title fw-semibold">
                We understand startups & focus on business
              </h4>
              <h6 className="opacity-75">
                With 13 years of experience in developing startup projects, we
                understand the importance of learning and adapting to meet the
                requirements and deadlines of each project. We remain flexible
                and adaptable to changes.
              </h6>
            </Card>
          </div>
          <div className="col-md-8 mt-md-5 mt-3">
            <h2 className="display-1 fw-semibold">
              We care
              <span className="text-warning"> about products</span>
              we work on.
            </h2>
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

customSoftwareDevelopement.Layout = Layout;
export default customSoftwareDevelopement;
