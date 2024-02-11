import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="py-5 rounded-5 bg-transparent-logo">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3 py-2">
          <h4 className="text-black fw-semibold">Head quarter</h4>
          <span className="text-black me-2">
            <i className="fa-solid fa-location-dot opacity-75"></i>
          </span>
          <Link
            className="text-decoration-none"
            target="_blank"
            href="https://www.google.com/maps/@23.741554,90.395273,20z?hl=en"
            rel="noreferrer"
          >
            2/E/1 Mymensingh Road, <br /> Shahbagh, Dhaka-1000
          </Link>
          <p className="mt-3">
            <span className="text-black me-2">
              <i className="fa-solid fa-phone opacity-75"></i>
            </span>
            <Link className="text-decoration-none" href="tel:+8801842546165">
              +8801842546165
            </Link>
          </p>
        </div>
        <div className="col-12 col-md-3 py-2">
          <h4 className="text-black fw-semibold">USA office</h4>
          <span className="text-black me-2">
            <i className="fa-solid fa-location-dot opacity-75"></i>
          </span>
          <Link
            className="text-decoration-none"
            target="_blank"
            href="https://www.google.com/maps/@23.741554,90.395273,20z?hl=en"
            rel="noreferrer"
          >
            2/E/1 Mymensingh Road, <br /> Shahbagh, Dhaka-1000
          </Link>
          <p className="mt-3">
            <span className="text-black me-2">
              <i className="fa-solid fa-envelope opacity-75"></i>
            </span>
            <Link
              className="text-decoration-none"
              href="mailto:contact@rosetech.dev"
            >
              contact@rosetech.dev
            </Link>
          </p>
        </div>
        <div className="col-12 col-md-3 py-2">
          <h4 className="text-black fw-semibold">Australia office</h4>
          <span className="text-black me-2">
            <i className="fa-solid fa-location-dot opacity-75"></i>
          </span>
          <Link
            className="text-decoration-none"
            target="_blank"
            href="https://www.google.com/maps/@23.741554,90.395273,20z?hl=en"
            rel="noreferrer"
          >
            2/E/1 Mymensingh Road, <br /> Shahbagh, Dhaka-1000
          </Link>
        </div>
        <div className="col-12 col-md-3 py-2">
          <h4 className="text-black fw-semibold">
            <Link href="/contact" className="text-decoration-none">
              Contact us
            </Link>
          </h4>
          <h4 className="text-black fw-semibold">
            <Link href="/about-us" className="text-decoration-none">
              About us
            </Link>
          </h4>
          <h4 className="text-black fw-semibold">
            <Link href="#" className="text-decoration-none">
              Get A Quote
            </Link>
          </h4>
          <h4 className="text-black fw-semibold">
            <Link href="/partner" className="text-decoration-none">
              Become A Partner
            </Link>
          </h4>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <h4 className="text-black fw-semibold">Monthly News Letter</h4>
        <div className="input-group">
          <input
            type="text"
            className="form-control border border-end-0"
            id="autoSizingInputGroup"
            placeholder="Email Address"
          />
          <div className="input-group-text bg-transparent border-start-0">
            <button className="btn btn-warning">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="d-md-none d-block py-3">
        <Link href="https://facebook.com/rosetechofficial" rel="noreferrer">
          <i className="fa-brands fa-2xl fa-facebook me-2"></i>
        </Link>
        <Link
          href="https://linkedin.com/company/rosetechofficial"
          rel="noreferrer"
        >
          <i className="fa-brands fa-2xl fa-linkedin  me-2"></i>
        </Link>
        <Link href="#" rel="noreferrer">
          <i className="fa-brands fa-2xl fa-instagram me-2"></i>
        </Link>
        <Link href="#" rel="noreferrer">
          <i className="fa-brands fa-2xl fa-twitter"></i>
        </Link>
      </div>
      <div className="d-flex justify-content-between py-3">
        <div className="opacity-75">
          Copyright &copy;
          <Link
            className="text-decoration-none mx-1"
            href="https://www.rosetech.dev"
            rel="noreferrer"
          >
            Rosetech
          </Link>
          | 2022-2024 All Rights Reserved. | Terms & conditions | privacy policy
          | cookie policy
        </div>
        <div className="d-none d-md-block">
          <Link href="https://facebook.com/rosetechofficial" rel="noreferrer">
            <i className="fa-brands fa-2xl fa-facebook me-2"></i>
          </Link>
          <Link
            href="https://linkedin.com/company/rosetechofficial"
            rel="noreferrer"
          >
            <i className="fa-brands fa-2xl fa-linkedin  me-2"></i>
          </Link>
          <Link href="#" rel="noreferrer">
            <i className="fa-brands fa-2xl fa-instagram me-2"></i>
          </Link>
          <Link href="#" rel="noreferrer">
            <i className="fa-brands fa-2xl fa-twitter"></i>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
