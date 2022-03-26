import '../assets/css/style.css'
import logo from '../assets/images/logo.png'

export default function Navbar () {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-custom fixed-top border-2 border-warning mb-5"
      id="mainNav">
      <div className="container-fluid px-xxl-5 d-flex justify-content-between">
        <a className="navbar-brand ps-xxl-5" href="#">
          <img src={logo} alt=""/>
        </a>
        <button className="navbar-toggler text-white" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation"><span
          className="navbar-toggler-icon" style={{ fontSize: '2rem' }}>
          <i className="bi bi-list"/></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end pe-xxl-5"
             id="navbarResponsive">
          <ul className="navbar-nav my-2 my-lg-0 ">
            <li className="nav-item d-inline-flex justify-content-end"><a
              className="nav-link text-warning fw-bold"
              href="">Home</a></li>
            <li className="nav-item d-inline-flex justify-content-end"><a
              className="nav-link text-white d-inline-flex"
              href="">Gameplay</a></li>
            <li className="nav-item d-inline-flex justify-content-end"><a
              className="nav-link text-white d-inline-flex"
              href="">Features</a></li>
            <li className="nav-item d-inline-flex justify-content-end"><a
              className="nav-link text-white d-inline-flex"
              href="">Roadmap</a></li>
            <li className="nav-item d-inline-flex justify-content-end"><a
              className="nav-link text-white d-inline-flex"
              href="../assets/file/Onepage.pdf">Onepage</a>
            </li>
            <li className="nav-item d-inline-flex justify-content-end"><a
              className="nav-link text-white d-inline-flex"
              href="">Our Team</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}