import Blog from "../../components/Blog";
import Layout from "../../components/_Layout";

const Blogs: React.FC = () => {
  return (
    <>
      <Blog title="Latest Blogs" />
    </>
  );
};

Blogs.Layout = Layout;
export default Blogs;
