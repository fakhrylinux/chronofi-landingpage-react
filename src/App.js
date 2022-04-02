import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Gameplay from './components/Gameplay'
import Ecosystem from './components/Ecosystem'
import Roadmap from './components/Roadmap'
import Backer from './components/Backer'
import Team from './components/Team'
import Advisor from './components/Advisor'
import Footer from './components/Footer'
import Faq from './components/Faq'
import SmartContractAddress from './components/SmartContractAddress'

function App () {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Gameplay/>
      <Ecosystem/>
      <Roadmap/>
      <Backer/>
      <Team/>
      <Advisor/>
      <Faq/>
      <SmartContractAddress/>
      <Footer/>
    </div>
  )
}

export default App
