import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';


function App() {
  return (
    <div className="app">
        <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<ProjectDetails />} />
          <Route path="*" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
