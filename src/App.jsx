import './App.css'
import About from './components/About'
import HersoSection from './components/HersoSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SkillsSection from './components/Skills'

function App() {

  return (
   <div>
    <Navbar />
    <HersoSection />
    <About />
    <Projects />
    <SkillsSection />
   </div>
  )
}

export default App
