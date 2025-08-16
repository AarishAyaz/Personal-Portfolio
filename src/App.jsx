import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SkillsSection from './components/Skills';
import Contact from './components/Contact';
import Coverletter from './components/Coverletter';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Projects />
            <SkillsSection />
            <Contact />
          </>
        } />
        <Route path="/Coverletter" element={<Coverletter />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;