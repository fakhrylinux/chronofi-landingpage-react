import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../assets/css/style.css'
import buttonRoadmap from '../assets/images/button-roadmap.png'
import roadmap from '../assets/images/roadmap.png'
import { useEffect, useRef } from 'react'

export default function Roadmap () {
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
    <section className="page-section" id="roadmap">
      <div className="container-fluid preloadSection" ref={boxRef}>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="my-5 col-lg-8 text-center">
            <img className="" src={buttonRoadmap} alt=""/>
          </div>
        </div>
        <div className="text-center mb-5 deferredImageContainer">
          <img className="lazy" src={roadmap}/>
        </div>
      </div>
    </section>
  )
}