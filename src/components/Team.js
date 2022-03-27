import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../assets/css/style.css'
import buttonTeam from '../assets/images/button-ourteam.png'
import irvan from '../assets/images/profile-irvan.png'
import alfan from '../assets/images/profile-alfan.png'
import zummia from '../assets/images/profile-zummia.png'
import fatma from '../assets/images/profile-fatma.png'
import taufik from '../assets/images/profile-taufik.png'
import fikri from '../assets/images/profile-fikri.png'
import tegar from '../assets/images/profile-tegar.png'
import jodhi from '../assets/images/profile-jodhi.png'
import rizki from '../assets/images/profile-rizki.png'
import fakhry from '../assets/images/profile-fakhry.png'
import { useEffect, useRef } from 'react'

export default function Team () {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef()
  const q = gsap.utils.selector(boxRef)

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.defaults({ ease: 'power1' })
    gsap.set(q(".lazy"), { y: 50, opacity: 0 })
    ScrollTrigger.batch(q(".lazy"), {
      onEnter: batch => gsap.to(batch,
        { opacity: 1, y: 0, stagger: 0.5 }),
    })
  })

  return (
    <section className="page-section" id="ourteam">
      <div className="container-fluid">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="my-5 col-lg-8 text-center">
            <img className="" src={buttonTeam} alt=""/>
          </div>
        </div>

        <div className="row justify-content-center mb-5" ref={boxRef}>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={irvan} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={alfan} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={zummia} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={fatma} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={taufik} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={fikri} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={tegar} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={jodhi} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={rizki} alt=""/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy"
                 src={fakhry} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}