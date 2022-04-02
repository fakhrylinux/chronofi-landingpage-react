import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Gameplay from './components/Gameplay'
import Header from './components/Header'
import Roadmap from './components/Roadmap'
import Team from './components/Team'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="#home" element={<Header />}/>
        <Route path="#gameplay" element={<Gameplay/>}/>
        <Route path="#roadmap" element={<Roadmap/>}/>
        <Route path="/assets/file/Onepage.pdf" />
        <Route path="#ourteam" element={<Team/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
