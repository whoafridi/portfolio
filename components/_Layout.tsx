import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./Footer";
import HeadSEO from "./HeadSEO";
import SITEMAP from "./SITEMAP";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Head>
        <HeadSEO />
        <link
          rel="canonical"
          href={`https://${SITEMAP.host}${router.pathname}/`}
        />
      </Head>
      <NavBar />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
