import '../assets/css/style.css'
import chronofivideo from '../assets/video/chronofi.mp4'
import playnowButton from '../assets/images/playnow-btn.png'

export default function Header () {
  return (
    <header className="masthead py-0" id="#home">
      <video className="" playsInline="playsinline" autoPlay="autoplay"
             muted="muted" loop="loop">
        <source src={chronofivideo} type="video/mp4"/>
      </video>
      <div
        className="header-title align-items-end position-absolute">
        <div className="mb-3 text-center text-lg-start">
          <p className="text-white lh-1">
            DIGITAL GAMING<br/>PLATFORM ON BLOCKCHAIN</p>
        </div>
        <div className="text-center text-lg-start">
          <img id="playnow" src={playnowButton}/>
        </div>
      </div>
    </header>
  )
}