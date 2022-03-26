import '../assets/css/style.css'
import buttonAbout from '../assets/images/button-what-is-chronofi.png'

export default function About () {
  return (
    <section className="page-section" id="about">
      <div className="container-fluid my-5">
        <div className="text-center d-flex flex-column">
          <div className="d-inline-flex justify-content-center">
            <img className="mt-5 mb-5"
                 src={buttonAbout} width="601"
                 height="110" alt=""/>
          </div>
          <div className="d-inline-flex justify-content-center">
            <iframe width="1120" height="630"
                    src="https://www.youtube.com/embed/Z7D4mRC84HQ?controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
          </div>
          <div className="d-inline-flex">
            <div className="row justify-content-center">
              <div className="col-xxl-10">
                <p className="text-center text-white mt-2"><span
                  className="chronofitext">CHRONOFi</span> is a blockchain-based
                  NFT adventure game with a 2D turn-based and 3D MMORPG
                  Play-to-Earn, where anyone can earn tokens through skilled
                  gameplay and<br/> contributions to the ecosystem. Players can
                  battle, collect, and build a robot. Allowing community
                  developers to build their own tools and experiences in
                  the <span
                    className="chronofitext">CHRONOFi</span>.<br/><br/>
                  While <span className="chronofitext">CHRONOFi</span> is a fun
                  game, it's also taken on characteristics of a social network
                  and jobs platform due to the strong community and play to earn
                  opportunities that have come from its early success. Different
                  from the existing competitors is Many of the NFT game released
                  last year was a product of 'Tech' people. They have experience
                  and knowledge in blockchain 'more' than they have in gaming.
                  The result was mediocre games with very simple game play on 2D
                  and we Inside 3D Game featuring open world games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}