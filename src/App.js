import './App.css';
import Aboutme from "./components/Aboutme/Aboutme";
import Contactme from "./components/Contactme/Contactme";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <div className="app">
        <Header/>
        <Hero/>
        <Aboutme/>
        <Project/>
        <Technology/>
        <Contactme/>
    </div>
  );
}

export default App;
