import './App.css'
import About from './components/About'
import HersoSection from './components/HersoSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SkillsSection from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
   <div>
    <Navbar />
    <HersoSection />
    <About />
    <Projects />
    <SkillsSection />
    <Contact />
   </div>
  )
}

export default App
