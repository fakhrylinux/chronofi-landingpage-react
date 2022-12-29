import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import '../assets/css/style.css'
import logo from '../assets/images/logo.png'

export default function Footer () {
  return (
    <footer className="footer mt-auto pb-0" id="footer">
      <div className="container-fluid py-5">
        <div className="row mx-auto">
          <div className="col-lg-4 col-md-12 pt-4">

            <div
              className="d-flex flex-column align-items-center align-items-xxl-start">
              <div className="d-inline-flex logo">
                <img className="w-100 mx-auto" src={logo}/>
              </div>
              <div className="d-inline-flex mt-3">
                <div className="d-flex justify-content-start px-0 py-0">
                  <p className="text-white text-center">
                    NFT based game where you can<br/> collect, earn, win and
                    display your NFTs<br/> while
                    playing and
                    socializing with your friends
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-12 d-flex justify-content-center text-center text-lg-start mt-lg-0 mt-md-2">
            <ul className="nav d-inline-flex flex-column">
              <li className="nav-item">
                <HashLink
                  className="nav-link link-light fw-bold" to="#"
                  style={{ fontSize: '20px' }}
                >
                  About Us
                </HashLink>
              </li>
              <li className="nav-item">
                <Link
                  to="/assets/file/Whitepaper_v1.2.pdf"
                  className="nav-link link-light"
                  target="_blank"
                  style={{ fontSize: '20px' }}
                  alt=""
                >
                  Whitepaper
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  to="mailto:hello@chronofi.io"
                  style={{ fontSize: '20px' }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  to="assets/file/Onepage.pdf"
                  target="_blank"
                  style={{ fontSize: '20px' }}
                >
                  Page
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  to="assets/file/CHRONOFi%20Deck.pdf"
                  target="_blank"
                  style={{ fontSize: '20px' }}
                >
                  Pitch Deck
                </Link>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link link-light"
                  to="#"
                  style={{ fontSize: '20px' }}
                >
                  Documents
                </HashLink>
              </li>
            </ul>
          </div>

          <div
            className="col-12 col-lg-4 text-center text-lg-start mt-lg-0 mt-md-2 mx-auto align-self-center">
            <p className="fw-bold text-white mb-3 text-center text-lg-start"
               style={{ fontSize: '20px' }}
            >
              Join Our Community
            </p>
            <div
              className="d-flex flex-column justify-content-center mx-auto align-self-center"
            >
              <div className="row mb-3">
                <div
                  className="d-flex justify-content-center justify-content-lg-start">
                  <Link
                    to="https://t.me/chronofi" className="mx-2 socmed-icon"
                    target="_blank"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="35.568"
                         height="36.081"
                         viewBox="0 0 35.568 36.081">
                      <rect width="35.568" height="36.081" rx="10"
                            fill="#f7a008"/>
                      <path
                        d="M24.1.918,1.448,9.912c-1.546.639-1.537,1.527-.284,1.923L6.98,13.7,20.433,4.962c.636-.4,1.217-.184.74.253l-10.9,10.13h0l-.4,6.172a1.5,1.5,0,0,0,1.176-.605l2.824-2.828,5.875,4.468c1.083.614,1.861.3,2.131-1.033L25.734,2.8C26.129,1.175,25.13.437,24.1.918Z"
                        transform="translate(4.733 6.353)" fill="#fff"/>
                    </svg>
                  </Link>
                  <Link
                    to="https://discord.io/CHRONOFi"
                    className="mx-2 socmed-icon"
                    target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.338"
                         height="35.243"
                         viewBox="0 0 36.338 35.243">
                      <rect width="36.338" height="35.243" rx="10"
                            fill="#f7a008"/>
                      <path
                        d="M21.295,23.385l-2.5-2.2-1.408-1.309L15.9,18.492l.612,2.152H3.339a2.39,2.39,0,0,1-2.382-2.4V2.536A2.39,2.39,0,0,1,3.339.142H18.913a2.39,2.39,0,0,1,2.382,2.394ZM15.759,13a3.679,3.679,0,0,1-2.1,1.38c.345.44.761.938.765.943a4.282,4.282,0,0,0,3.556-1.767,15.69,15.69,0,0,0-1.674-6.775,5.775,5.775,0,0,0-3.252-1.223h-.013l-.163.186a7.829,7.829,0,0,1,2.894,1.475,9.527,9.527,0,0,0-3.5-1.116,9.759,9.759,0,0,0-2.346.023.978.978,0,0,0-.164.017H9.732a8.766,8.766,0,0,0-2.638.734c-.418.192-.675.332-.686.336s0,0,0-.009A8.232,8.232,0,0,1,9.465,5.7l-.122-.139H9.335A5.778,5.778,0,0,0,6.084,6.781,15.572,15.572,0,0,0,4.41,13.556a4.208,4.208,0,0,0,3.548,1.766s.438-.533.779-.965A3.628,3.628,0,0,1,6.7,12.987c.009.006.13.088.325.2a.129.129,0,0,0,.048.037.325.325,0,0,0,.049.028,6.559,6.559,0,0,0,.9.423,9.605,9.605,0,0,0,1.713.5,8.388,8.388,0,0,0,1.554.147,7.972,7.972,0,0,0,1.457-.135,7.705,7.705,0,0,0,1.685-.5A6.745,6.745,0,0,0,15.759,13Zm-2.493-.522a1.3,1.3,0,1,1,1.183-1.291,1.242,1.242,0,0,1-1.184,1.291Zm-4.243,0a1.3,1.3,0,0,1,0-2.581,1.139,1.139,0,0,1,.817.349,1.308,1.308,0,0,1,.367.941,1.242,1.242,0,0,1-1.185,1.292Z"
                        transform="translate(8.043 5.858)" fill="#fff"/>
                    </svg>
                  </Link>
                  <Link
                    to="https://twitter.com/chronofi_"
                    className="mx-2 socmed-icon"
                    target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35.388"
                         height="35.452"
                         viewBox="0 0 35.388 35.452">
                      <rect width="35.388" height="35.452" rx="10"
                            fill="#f7a008"/>
                      <path
                        d="M26.544,3.318a10.841,10.841,0,0,1-3.109.852,5.427,5.427,0,0,0,2.38-3,10.808,10.808,0,0,1-3.438,1.313,5.416,5.416,0,0,0-9.225,4.939A15.375,15.375,0,0,1,6.971,5.784,15.374,15.374,0,0,1,1.993,1.768,5.42,5.42,0,0,0,3.669,9,5.4,5.4,0,0,1,1.217,8.32v.07A5.416,5.416,0,0,0,5.56,13.7a5.453,5.453,0,0,1-2.445.093,5.417,5.417,0,0,0,5.058,3.758,10.864,10.864,0,0,1-6.724,2.319,11.047,11.047,0,0,1-1.292-.076,15.311,15.311,0,0,0,8.3,2.432,15.3,15.3,0,0,0,15.4-15.4c0-.232-.006-.467-.016-.7a11.007,11.007,0,0,0,2.7-2.8Z"
                        transform="translate(3.607 6.353)" fill="#fff"/>
                    </svg>
                  </Link>
                  <Link
                    to="https://medium.com/@chronofi"
                    className="mx-2 socmed-icon"
                    target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.243"
                         height="35.243"
                         viewBox="0 0 36.243 35.243">
                      <rect width="36.243" height="35.243" rx="10"
                            fill="#f7a008"/>
                      <path
                        d="M22.543.142H1.159a.929.929,0,0,0-.93.93V22.456a.929.929,0,0,0,.93.93H22.543a.929.929,0,0,0,.93-.93V1.072A.929.929,0,0,0,22.543.142ZM19.289,6.119,18.1,7.255a.344.344,0,0,0-.134.331v8.359a.339.339,0,0,0,.134.331l1.162,1.136v.253H13.432v-.241l1.2-1.165c.119-.119.119-.154.119-.331V9.163L11.41,17.636h-.45L7.072,9.163v5.68a.773.773,0,0,0,.218.651l1.563,1.891v.253H4.413v-.253l1.563-1.891a.758.758,0,0,0,.2-.651V8.277a.563.563,0,0,0-.189-.485L4.6,6.119V5.866H8.917l3.33,7.307,2.932-7.3h4.111Z"
                        transform="translate(6.77 5.858)" fill="#fff"/>
                    </svg>
                  </Link>
                  <Link
                    to="https://www.youtube.com/c/CHRONOFi"
                    className="mx-2 socmed-icon"
                    target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.892"
                         height="35.757"
                         viewBox="0 0 36.892 35.757">
                      <rect width="36.892" height="35.757" rx="10"
                            fill="#f7a008"/>
                      <path
                        d="M27.663,3.859a3.542,3.542,0,0,0-.9-1.58A3.488,3.488,0,0,0,25.2,1.364C23.022.773,14.3.773,14.3.773s-8.722,0-10.9.588a3.482,3.482,0,0,0-1.563.914,3.536,3.536,0,0,0-.9,1.581,37.225,37.225,0,0,0-.582,6.8,37.179,37.179,0,0,0,.582,6.792A3.514,3.514,0,0,0,3.4,19.938c2.176.591,10.9.591,10.9.591s8.722,0,10.9-.591a3.509,3.509,0,0,0,2.465-2.495,37.179,37.179,0,0,0,.582-6.792A37.179,37.179,0,0,0,27.663,3.859ZM11.529,14.867V6.436l7.222,4.184Z"
                        transform="translate(3.646 7.227)" fill="#fff"/>
                    </svg>
                  </Link>
                </div>
              </div>


              <div className="coming-soon row p-4 align-self-center mx-auto">
                <div className="col-8 col-lg-12 mx-auto">
                  <p className="coming-soon-title text-start">COMING SOON</p>
                  <p className="coming-soon-content text-start">
                    We'll be launching our project soon, so be sure to join our
                    community
                  </p>
                  <div className="d-flex text-center justify-content-center">
                    <div className="d-inline-flex  mt-1 p-3" id="invest">
                      <p className="coming-soon-content">
                        <Link
                          className="link-light text-decoration-none"
                          to="https://forms.gle/UpSEaTwQhggGmQWz6"
                          target="_blank"
                        >
                          INVEST IN CHRONOFI
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}