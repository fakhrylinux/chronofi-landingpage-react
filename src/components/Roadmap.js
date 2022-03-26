import '../assets/css/style.css'
import buttonRoadmap from '../assets/images/button-roadmap.png'
import roadmap from '../assets/images/roadmap.png'

export default function Roadmap () {
  return (
    <section className="page-section" id="roadmap">
      <div className="container-fluid preloadSection">
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