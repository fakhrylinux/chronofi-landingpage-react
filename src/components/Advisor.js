import '../assets/css/style.css'
import buttonAdvisor from '../assets/images/button-advisor.png'
import timo from '../assets/images/timo-advisor.png'

export default function Advisor () {
  return (
    <section className="page-section" id="advisor">
      <div className="container-fluid">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="my-5 col-lg-8 text-center">
            <img className="" src={buttonAdvisor} alt=""/>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-3 col-md-6 col-sm-6 text-center my-4">
            <img className="img-fluid lazy" src={timo}
                 alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}