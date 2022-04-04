import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import logo from '../assets/images/logo.png'

export default function Navbar () {
  // const { Link } = Anchor
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg navbar-custom fixed-top mb-5 navbar-shrink"
      id="navbar">
      <div className="container-fluid justify-content-center">
        <div
          className="row w-100 justify-content-center justify-content-lg-between">
          <div className="col-12 col-lg-3 text-center">
            <Link
              to="https://chronofi.io/"
              className="navbar-brand ps-xxl-5">
              <img src={logo} alt=""/>
            </Link>
          </div>

          <div className="col-12 col-lg-6 text-center">
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon"
            style={{ fontSize: '2rem' }}>
          </span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center pe-xxl-5"
              id="navbarResponsive">
              <ul className="navbar-nav my-2 my-lg-0 ">
                <li className="nav-item d-inline-flex justify-content-center">
                  <HashLink
                    to="#home"
                    className="nav-link text-warning fw-bold"
                  >
                    Home
                  </HashLink>
                </li>
                <li className="nav-item d-inline-flex justify-content-center">
                  <HashLink
                    to="#gameplay"
                    className="nav-link link-light d-inline-flex"
                  >
                    Gameplay
                  </HashLink>
                </li>
                <li className="nav-item d-inline-flex justify-content-center">
                  <HashLink
                    to="#features"
                    className="nav-link link-light d-inline-flex"
                  >
                    Features
                  </HashLink>
                </li>
                <li className="nav-item d-inline-flex justify-content-center">
                  <HashLink
                    to="#roadmap"
                    className="nav-link link-light d-inline-flex"
                  >
                    Roadmap
                  </HashLink>
                </li>
                <li className="nav-item d-inline-flex justify-content-center">
                  <Link
                    to="/assets/file/Onepage.pdf"
                    className="nav-link link-light d-inline-flex"
                    target="_blank"
                  >
                    Onepage
                  </Link>
                </li>
                <li className="nav-item d-inline-flex justify-content-center">
                  <HashLink
                    to="#ourteam"
                    className="nav-link link-light d-inline-flex"
                  >
                    Our Team
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}