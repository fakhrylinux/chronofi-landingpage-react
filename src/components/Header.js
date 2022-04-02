import '../assets/css/style.css'
import chronofivideo from '../assets/video/chronofi.mp4'
import playnowButton from '../assets/images/button-playnow.png'

export default function Header () {
  return (
    <header className="masthead" id="#home">
      <div className="">
        <video className="" playsInline="playsinline" autoPlay="autoplay"
               muted="muted" loop="loop">
          <source src={chronofivideo} type="video/mp4"/>
        </video>
      </div>
      <div
        className="align-items-end bottom-0 position-absolute bottom-0 start-0 ms-5 ps-xxl-5 mb-5 pb-5">
        <div className="mb-5">
          <p className="text-white lh-1">DIGITAL GAMING<br/>PLATFORM ON
            BLOCKCHAIN</p>
        </div>
        <div>
          <img src={playnowButton}/>
        </div>
      </div>
    </header>
  )
}