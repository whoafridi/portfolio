import { useState } from "react";

type FaqItemProps = {
  id: number;
  className: string;
  title: string;
  description: string;
};

const FaqItem: React.FC<FaqItemProps> = ({
  id,
  className,
  title,
  description,
}) => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const handleAccordionClick = (accordionNumber: number) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionNumber ? 0 : accordionNumber
    );
  };
  return (
    <div className={`accordion ${className ? className : ""}`}>
      <div className="accordion-item bg-primary">
        <h2 className="accordion-header">
          <button
            className={`bg-primary accordion-button ${
              activeAccordion === id ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => handleAccordionClick(id)}
            aria-expanded={activeAccordion === id}
          >
            <h4 className="fw-semibold mb-0">{title}</h4>
          </button>
        </h2>
        <div
          className={`accordion-collapse collapse ${
            activeAccordion === id ? "collapsed show" : ""
          }`}
        >
          <div className="accordion-body">{description}</div>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  return (
    <section className="faq py-5">
      <div className="container">
        <h2 className="h1 text-center">Frequently asked questions</h2>
        <div className="row align-items-center py-5">
          <div className="col-md-6">
            <FaqItem
              className=""
              id={1}
              title="What is UX design?"
              description=" We design interfaces and experiences of web and mobile
                    applications that are surprisingly delightful to use and are
                    focused on driving key conversions as well as engagement. On
                    top, we create scalable stylesheets as well as design
                    systems with reusable components and guidelines."
            />
            <FaqItem
              className="mt-3"
              id={2}
              title="What is UX design?"
              description=" We design interfaces and experiences of web and mobile
                    applications that are surprisingly delightful to use and are
                    focused on driving key conversions as well as engagement. On
                    top, we create scalable stylesheets as well as design
                    systems with reusable components and guidelines."
            />
            <FaqItem
              className="mt-3"
              id={3}
              title="What is UX design?"
              description=" We design interfaces and experiences of web and mobile
                    applications that are surprisingly delightful to use and are
                    focused on driving key conversions as well as engagement. On
                    top, we create scalable stylesheets as well as design
                    systems with reusable components and guidelines."
            />
            <FaqItem
              className="mt-3"
              id={4}
              title="What is UX design?"
              description=" We design interfaces and experiences of web and mobile
                    applications that are surprisingly delightful to use and are
                    focused on driving key conversions as well as engagement. On
                    top, we create scalable stylesheets as well as design
                    systems with reusable components and guidelines."
            />
          </div>
          <div className="col-md-6 pt-5 pt-md-0">
            <h3>Have any questions?</h3>
            <p>We'll contact your back within 24 hours. It's free</p>
            <button type="button" className="btn btn-warning rounded-pill">
              Ask questions
              <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
