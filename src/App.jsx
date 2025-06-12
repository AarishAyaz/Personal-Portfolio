<<<<<<< HEAD
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
=======
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SkillsSection from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
   <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <SkillsSection />
    <Contact />
   </div>
  )
}

export default App
>>>>>>> 3fe04712260363ed39b7115c46aeda467ed31f58
