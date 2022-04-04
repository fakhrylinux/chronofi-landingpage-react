import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../assets/css/style.css'
import buttonRoadmap from '../assets/images/button-roadmap.png'
import roadmapImg from '../assets/images/roadmap.png'
import { useEffect, useRef } from 'react'

export default function Roadmap () {
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
    <section className="page-section" id="roadmap">
      <div className="container text-center" ref={boxRef}>
        <div className="text-center d-flex flex-column">
          <div className="col-lg-8 text-center button-section">
            <img className="mt-5" src={buttonRoadmap} alt=""/>
          </div>
        </div>
        <div className="text-center my-5 deferredImageContainer">
          <img
            className="lazy"
            src={roadmapImg} alt=""
          />
        </div>
      </div>
    </section>
  )
}