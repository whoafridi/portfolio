import Aboutme from "../Aboutme/Aboutme";
import Blog from "../Blog/Blog";
import Contactme from "../Contactme/Contactme";
import Hero from "../Hero/Hero";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Social from "../Social/Social";
import Technology from "../Technology/Technology";
import Tools from "../Tools/Tools";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <Social />
      <Aboutme />
      <Project />
      <Technology />
      <Services />
      <Tools />
      <Blog />
      <Contactme />
      {/* <Portfolio/> */}
    </>
  );
};

export default Home;
