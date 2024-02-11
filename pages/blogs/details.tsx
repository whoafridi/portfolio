import Head from "next/head";

import Layout from "../../components/_Layout";
import ExportableImage from "../../components/ExportableImage";

import blogDetailsImg from "../../assets/images/home/blog/blog-details.png";
import Blog from "../../components/Blog";

const BlogDetails: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog Details | Rosetech</title>
      </Head>
      <section className="py-5 container">
        <h1 className="fw-semibold">
          Top 5 Internet Banking Apps in Bangladesh
        </h1>
        <ExportableImage
          placeholder="blur"
          loading="lazy"
          src={blogDetailsImg}
          alt="Top 5 Internet Banking Apps in Bangladesh"
          className="img-fluid"
        />
        <p className="py-3">
          Are all internet banking apps available in stores user-friendly? Do
          they generally meet user expectations?The answer is not a straight one
          as most of the renowned banks of Bangladesh are still working on their
          internet banking apps for better functionality as well as better
          customer experience.
        </p>

        <p>
          The world of banking is changing fast in this constantly changing
          digitized environment where demand of internet banking in the banking
          sector has become mandatory as the customer demands to get the
          facilities of banking at their fingertips. Paying bills, cell phone
          top ups, transferring funds, or even buying advance movie tickets- we
          nowadays seek through our internet banking apps cause life has become
          hectic and busy.
        </p>
        <p>
          2020 is predicted to feature an even stronger collision of two worlds,
          the financial services, and technology. With times many banks in our
          country have came up with their own internet banking app to provide
          all these accompaniments that one customer can obtain by using
          internet banking apps.
        </p>

        <p>
          See Also – A Run for Revenue Growth: Internet Banking System Last
          decade, internet banking is therefore viewed by the large banks of
          Bangladesh as a way to focus on best service in terms of security and
          advance tech adoption. Over the last five years, top Bangladeshi Banks
          have recognized the importance of service standard and customer
          experience.
        </p>

        <p>
          Hence many has come up with their own banking apps to set the
          expressions of their brand. A well-designed consumer banking app can
          create great relationship among banks and their loyal consumers.
        </p>
      </section>
      <Blog title="Recent Blogs" />
    </>
  );
};

BlogDetails.Layout = Layout;
export default BlogDetails;
