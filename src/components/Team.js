import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../assets/css/style.css'
import '../assets/css/flickity.css'
import buttonTeam from '../assets/images/button-ourteam.png'
import irvan from '../assets/images/team/Irvan@2x.png'
import alfan from '../assets/images/team/Alfan@2x.png'
import zummia from '../assets/images/team/Zummia@2x.png'
import fatma from '../assets/images/team/Fatma@2x.png'
import taufik from '../assets/images/team/Taufik@2x.png'
import fikri from '../assets/images/team/Fikri@2x.png'
import tegar from '../assets/images/team/Tegar@2x.png'
import jodhi from '../assets/images/team/Jodhi@2x.png'
import rizki from '../assets/images/team/Rizki@2x.png'
import fakhry from '../assets/images/team/Fakhry@2x.png'
import { useEffect, useRef } from 'react'

export default function Team () {
  gsap.registerPlugin(ScrollTrigger)
  const boxRef = useRef()
  const q = gsap.utils.selector(boxRef)

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.defaults({ ease: 'power1' })
    gsap.set(q('.lazy'), { y: 50, opacity: 0 })
    ScrollTrigger.batch(q('.lazy'), {
      onEnter: batch => gsap.to(batch,
        { opacity: 1, y: 0, stagger: 0.5 }),
    })
  })

  return (
    <section className="page-section" id="team-carousel">
      <div className="container-fluid">
        <div className="row gx-4 gx-lg-5 justify-content-center mx-auto">
          <div
            className="px-0 my-5 col-lg-8 text-center button-section justify-content-center">
            <img className="" src={buttonTeam} alt=""/>
          </div>
        </div>

        <div className="main-carousel" data-flickity='{ "wrapAround": true}'>
          <div className="carousel-cell">
            <img src={irvan} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Irvan M</span>
              <br/>CEO & Founder
            </p>
            <div className="text-center mt-4">
              <a className="icon" href="https://www.linkedin.com/in/vannn"
                 target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={alfan} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Alfan F</span>
              <br/>COO & Co-Founder
            </p>
            <div className="text-center mt-4">
              <a className="icon" href="https://www.linkedin.com/in/alfanf/"
                 target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={zummia} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Zummia F</span>
              <br/>CMO
            </p>
            <div className="text-center mt-4">
              <a className="icon" href="https://www.linkedin.com/in/zummia/"
                 target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={fatma} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Fatma M</span>
              <br/>CPO
            </p>
            <div className="text-center mt-4">
              <a className="icon"
                 href="https://www.linkedin.com/in/fatma-misky-4388b3155/"
                 target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={taufik} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Taufik K</span>
              <br/>2D / 3D DESIGN
            </p>
            <div className="text-center mt-4">
              <a className="icon"
                 href="https://www.linkedin.com/in/taufikkurnia23/"
                 target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={fikri} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Fikri A</span>
              <br/>2D / 3D DESIGN
            </p>
            <div className="text-center mt-4">
              <a className="icon" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={tegar} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Tegar S</span>
              <br/>UI / UX
            </p>
            <div className="text-center mt-4">
              <a className="icon" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={jodhi} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Jodhi F</span>
              <br/>GAME DESIGN
            </p>
            <div className="text-center mt-4">
              <a className="icon" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={rizki} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">Rizki A</span>
              <br/>COMMUNITY
            </p>
            <div className="text-center mt-4">
              <a className="icon" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="carousel-cell">
            <img src={fakhry} className=""/>
            <p className="text-center text-white mt-3">
              <span className="fw-bold">M Fakhry</span>
              <br/>LEAD PROGRAMMER
            </p>
            <div className="text-center mt-4">
              <a className="icon"
                 href="https://www.linkedin.com/in/muhammad-fakhry-burhanuddin-28b8a6b4/"
                 target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 20 20">
                  <g transform="translate(-756.645 -404.943)">
                    <path d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
                          transform="translate(756.645 404.943)"
                          fill="#f7a008"/>
                    <g transform="translate(760.982 408.691)">
                      <g transform="translate(0)">
                        <path
                          d="M815.875,456.021c.166-.186.3-.375.473-.536a2.594,2.594,0,0,1,1.866-.736,4.32,4.32,0,0,1,1.173.143,2.294,2.294,0,0,1,1.629,1.713,7.182,7.182,0,0,1,.217,1.963c0,1.395,0,2.789,0,4.184,0,.13-.036.165-.165.164q-1.078-.009-2.156,0c-.127,0-.154-.038-.153-.158q.006-1.991,0-3.982a3.582,3.582,0,0,0-.116-.988,1.111,1.111,0,0,0-1.222-.866,1.336,1.336,0,0,0-1.4,1.334,4.969,4.969,0,0,0-.038.622c0,1.291,0,2.582,0,3.872,0,.129-.032.167-.163.166q-1.086-.01-2.171,0c-.116,0-.15-.03-.15-.148q.005-3.833,0-7.666c0-.126.041-.156.161-.155q1.031.008,2.062,0c.127,0,.159.04.156.16C815.87,455.41,815.875,455.715,815.875,456.021Z"
                          transform="translate(-809.266 -450.981)"
                          fill="#fff"/>
                        <path
                          d="M788.961,460.057c0,1.264,0,2.528,0,3.793,0,.14-.034.183-.18.181-.718-.008-1.437-.006-2.155,0-.115,0-.15-.028-.15-.147q.005-3.84,0-7.679c0-.106.026-.144.138-.143.729,0,1.457.006,2.186,0,.14,0,.159.053.159.173C788.96,457.507,788.961,458.782,788.961,460.057Z"
                          transform="translate(-786.29 -452.097)"
                          fill="#fff"/>
                        <path
                          d="M788.079,430.992a1.435,1.435,0,1,1-1.432-1.427A1.439,1.439,0,0,1,788.079,430.992Z"
                          transform="translate(-785.21 -429.565)"
                          fill="#fff"/>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}