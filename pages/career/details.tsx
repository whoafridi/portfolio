import Head from "next/head";

import Layout from "../../components/_Layout";
import Blog from "../../components/Blog";

const CareerDetails: React.FC = () => {
  return (
    <>
      <Head>
        <title>Career - RoseTech Solutions LTD</title>
      </Head>
      <section className="container py-5">
        <h1 className="display-1 fw-semibold ">
          Android
          <span className="text-warning"> Developer</span>
        </h1>
      </section>
      <Blog title="Our Blogs" />
    </>
  );
};

CareerDetails.Layout = Layout;
export default CareerDetails;
