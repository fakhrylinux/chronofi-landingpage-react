import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import logo from '../assets/images/logo.png'

export default function Navbar () {
  // const { Link } = Anchor
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg navbar-custom fixed-top mb-5"
      id="navbar">
      <div className="container-fluid px-xxl-5 d-flex justify-content-between">
        <Link
          to="/"
          className="navbar-brand ps-xxl-5" href="/">
          <img src={logo} alt=""/>
        </Link>
        <button
          className="navbar-toggler text-white" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon" style={{ fontSize: '2rem' }}>
          <i className="bi bi-list"/>
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-end pe-xxl-5"
             id="navbarResponsive">
          <ul className="navbar-nav my-2 my-lg-0 ">
            <li className="nav-item d-inline-flex justify-content-end">
              <HashLink
                to="#home"
                className="nav-link text-warning fw-bold"
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item d-inline-flex justify-content-end">
              <HashLink
                to="#gameplay"
                className="nav-link text-white d-inline-flex"
              >
                Gameplay
              </HashLink>
            </li>
            <li className="nav-item d-inline-flex justify-content-end">
              <HashLink
                to="#features"
                className="nav-link text-white d-inline-flex"
              >
                Features
              </HashLink>
            </li>
            <li className="nav-item d-inline-flex justify-content-end">
              <HashLink
                to="#roadmap"
                className="nav-link text-white d-inline-flex"
              >
                Roadmap
              </HashLink>
            </li>
            <li className="nav-item d-inline-flex justify-content-end">
              <Link
                to="/assets/file/Onepage.pdf"
                className="nav-link text-white d-inline-flex"
                target="_blank"
              >
                Onepage
              </Link>
            </li>
            <li className="nav-item d-inline-flex justify-content-end">
              <HashLink
                to="#ourteam"
                className="nav-link text-white d-inline-flex"
              >
                Our Team
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}