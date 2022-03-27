import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../assets/css/style.css'
import buttonBacker from '../assets/images/button-backer.png'
import polygonImg from '../assets/images/polygon.png'
import astronautImg from '../assets/images/astronaut.png'
import { useEffect, useRef } from 'react'

export default function Backer () {
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
    <section className="page-section" id="backer">
      <div className="container-fluid">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="my-5 col-lg-8 text-center">
            <img className="" src={buttonBacker} alt=""/>
          </div>
        </div>

        <div className="row justify-content-center mb-5" ref={boxRef}>
          <div className="col-lg-2 col-md-6 col-sm-6 text-center my-4">
            <a href="https://polygonstudios.com/" target="_blank">
              <img className="img-fluid lazy" src={polygonImg} alt=""/>
            </a>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 text-center my-4">
            <a href="https://astronaut.to/" target="_blank">
              <img className="img-fluid lazy" src={astronautImg} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}