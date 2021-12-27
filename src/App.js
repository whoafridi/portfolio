import './App.css';
import Aboutme from "./components/Aboutme/Aboutme";
import Blog from './components/Blog/Blog';
import Contactme from "./components/Contactme/Contactme";
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Social from './components/Social/Social';
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <div className="app">
        <Header/>
        <Hero/>
        <Social/>
        <Aboutme/>
        <Project/>
        <Technology/>
        <Blog/>
        <Contactme/>
        <Footer/>
    </div>
  );
}

export default App;
