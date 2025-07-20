import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Concept from './pages/Concept'
import Observational from './pages/Observational'
import Misc from './pages/Misc'
import Menu from './pages/Menu'
import CharacterWork from './pages/CharacterWork'
import About from './pages/About'
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <Router basename="/Sapientia-Yoon-Portfolio">
      <div className="min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/observational" element={<Observational />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/character-work" element={<CharacterWork />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
