import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../assets/css/style.css'
import '../assets/css/flickity.css'
import buttonGameplay from '../assets/images/button-gameplay.png'
import gamePVP from '../assets/images/gameplay/gamepvp.png'
import inventory from '../assets/images/gameplay/inventory.png'
import shopImage from '../assets/images/gameplay/shop.png'
import upgradeChar from '../assets/images/gameplay/upgradecharacter.png'
import { useEffect, useRef } from 'react'

export default function Gameplay () {
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
    <section className="page-section pb-5"
             id="gameplay"
    >
      <div className="container-fluid preloadSection">
        <div className="row justify-content-center text-center mx-auto">
          <div
            className="px-0 mb-5 col-lg-8 text-center justify-content-center button-section"
          >
            <img className="mt-5" src={buttonGameplay} alt=""/>
          </div>
        </div>

        <div
          className="main-carousel"
          data-flickity='{ "wrapAround": true, "imagesLoaded": true }'>
          <div
            className="carousel-cell text-center mx-4"
            style={{ width: '58em', height: 'auto' }}
          >
            <img src={gamePVP} className="vw-100"
                 style={{ height: 'auto' }}/>
            <div className="text-white my-5">
              <p
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem' }}>
                Game PvP
              </p>
            </div>
          </div>
          <div
            className="carousel-cell text-center mx-4"
            style={{ width: '58em', height: 'auto' }}
          >
            <img src={inventory} className="vw-100"
                 style={{ height: 'auto' }}/>
            <div className="text-white my-5">
              <p
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem' }}>
                Inventory
              </p>
            </div>
          </div>
          <div
            className="carousel-cell text-center mx-4"
            style={{ width: '58em', height: 'auto' }}
          >
            <img src={shopImage} className="vw-100"
                 style={{ height: 'auto' }}/>
            <div className="text-white my-5">
              <p
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem' }}>
                Shop
              </p>
            </div>
          </div>
          <div
            className="carousel-cell text-center mx-4"
            style={{ width: '58em', height: 'auto' }}
          >
            <img src={upgradeChar}
                 className="vw-100" style={{ height: 'auto' }}/>
            <div className="text-white my-5">
              <p
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem' }}>
                Upgrade Character
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}