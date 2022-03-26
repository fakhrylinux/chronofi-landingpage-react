import '../assets/css/style.css'
import buttonEcosystem from '../assets/images/button-ecosystem.png'
import ecosystem from '../assets/images/ecosystem.png'

export default function Ecosystem () {
  return (
    <section className="page-section" id="ecosystem">
      <div className="container-fluid preloadSection">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="my-5 col-lg-8 text-center">
            <img className="" src={buttonEcosystem} alt=""/>
          </div>
        </div>
        <div className="mx-5 text-center deferredImageContainer">
          <img className="lazy" src={ecosystem} alt=""/>
        </div>
      </div>
    </section>
  )
}
