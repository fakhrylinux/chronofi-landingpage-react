import '../assets/css/style.css'
import logo from '../assets/images/logo.png'
// import onepage from '../assets/file/Onepage.pdf'

export default function Footer () {
  return (
    <footer className="footer mt-auto pb-0 bg-light">
      <div id="footer" className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div
                className="col-lg-8 col-md-12 justify-content-center text-center">
                <div className="">
                  <img src={logo} alt=""/>
                </div>
                <div>
                  <p className="text-white text-center">
                    NFT based game where you can<br/>
                    collect, earn, win and display your NFTs<br/>
                    while playing and socializing with your friends</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-12 text-white text-lg-start text-md-center mt-lg-0 mt-md-2">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link text-white fw-bold" href="">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="">One Page</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="">Pitch Deck</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="">Whitepaper</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-center mt-lg-0 mt-md-2"
               style={{ height: '100px' }}>
            <p className="fw-bold text-white">Join Our Community</p>
          </div>
        </div>
      </div>
    </footer>
  )
}