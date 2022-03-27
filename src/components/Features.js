import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../assets/css/style.css'
import buttonFeatures from '../assets/images/button-features.png'
import {
  ReactComponent as Marketplace,
} from '../assets/images/svg/feature-nft-marketplace-spin-min.svg'
import {
  ReactComponent as NftStaking,
} from '../assets/images/svg/feature-nft-staking-spin-min.svg'
import {
  ReactComponent as Adventure,
} from '../assets/images/svg/feature-adventure-spin-min.svg'
import {
  ReactComponent as Mystery,
} from '../assets/images/svg/feature-mystery-spin-min.svg'
import {
  ReactComponent as Battlefield,
} from '../assets/images/svg/feature-battlefield-spin-min.svg'
import { useEffect, useRef } from 'react'

export default function Features () {
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
    <section className="page-section" id="features">
      <div className="container-fluid">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="my-5 col-lg-8 text-center">
            <img className="" src={buttonFeatures} alt=""/>
          </div>
        </div>

        <div className="row justify-content-center mb-5" ref={boxRef}>
          <div className="col-lg-2 col-md-6 col-sm-6 text-center my-4">
            <Marketplace className="img-fluid w-100 lazy"/>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 text-center my-4">
            <NftStaking className="img-fluid w-100 lazy"/>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 text-center my-4">
            <Adventure className="img-fluid w-100 lazy"/>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 text-center my-4">
            <Mystery className="img-fluid w-100 lazy"/>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 text-center my-4">
            <Battlefield className="img-fluid w-100 lazy"/>
          </div>
        </div>
      </div>
    </section>
  )
}