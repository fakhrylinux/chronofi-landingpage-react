import '../assets/css/style.css'
import buttonGameplay from '../assets/images/button-gameplay.png'
import example from '../assets/images/example.png'

export default function Gameplay () {
  return (
    <section className="page-section" id="gameplay">
      <div className="container preloadSection">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="my-5 col-lg-8 text-center">
            <img className="" src={buttonGameplay} alt=""/>
          </div>
        </div>
        <div className="full-width-image deferredImageContainer">
          <img className="full-width-image lazy" src={example}/>
        </div>
      </div>
    </section>
  )
}