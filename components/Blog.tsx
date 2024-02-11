import Link from "next/link";

import Button from "./Button";
import Card from "./Card";
import ExportableImage, { StaticImageData } from "./ExportableImage";
import SITEMAP from "./SITEMAP";

import ScrollAnimation from "./ScrollAnimation";

type BlogProps = {
  title: string;
  src: string | StaticImageData;
  alt: string;
  author: string;
  date: string;
  link: string;
};

const BlogItem: React.FC<BlogProps> = ({
  alt,
  author,
  date,
  link,
  src,
  title,
}) => {
  return (
    <Card className="bg-primary">
      <ExportableImage
        placeholder="blur"
        loading="lazy"
        src={src}
        alt={alt}
        className="img-fluid"
      />
      <h5 className="card-title my-4 text-dark">{title}</h5>
      <div className="d-flex justify-content-between my-3 text-dark">
        <p className="mb-0">By {author}</p>
        <p className="mb-0">{date}</p>
      </div>
      <Link
        href={SITEMAP.blog.details}
        className="btn btn-outline-dark rounded-pill"
      >
        Read more
        <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
      </Link>
    </Card>
  );
};

type Props = {
  title: string;
};

const Blog: React.FC<Props> = ({ title }) => {
  return (
    <section className="bg-secondary blogs py-5">
      <div className="container">
        <h2 className="text-center display-5 text-black fw-semibold py-5">
          {title}
        </h2>       
        <div className="d-flex justify-content-center">
          <Link href={SITEMAP.blog._}>
            <Button>
              See All
              <i className="fa-solid fa-arrow-right text-black ms-1 rounded-circle arrow-icon"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
