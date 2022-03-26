// import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Gameplay from './components/Gameplay'
import Ecosystem from './components/Ecosystem'
import Features from './components/Features'
import Roadmap from './components/Roadmap'
import Backer from './components/Backer'
import Team from './components/Team'
import Advisor from './components/Advisor'
import Footer from './components/Footer'

function App () {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Gameplay/>
      <Ecosystem/>
      <Features/>
      <Roadmap/>
      <Backer/>
      <Team/>
      <Advisor/>
      <Footer/>
    </div>
  )
}

export default App
