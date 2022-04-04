import '../assets/css/style.css'
import buttonAbout from '../assets/images/button-what-is-chronofi.png'
import buttonWhy from '../assets/images/button-why.png'
import aIcon from '../assets/images/why/a.png'
import bIcon from '../assets/images/why/b.png'
import cIcon from '../assets/images/why/c.png'
import dIcon from '../assets/images/why/d.png'

export default function About () {
  return (
    <section className="page-section" id="about">
      <div className="container about">
        <div className="text-center d-flex flex-column">
          <div className="d-flex justify-content-center button-section">
            <img className="mt-5 mb-5"
                 src={buttonAbout} alt=""/>
          </div>
          <div className="row w-100 mx-auto mb-5">
            <div className="col-12 col-lg-6 justify-content-center mx-auto">
              <iframe
                className="w-100 mx-auto" height="419px"
                src="https://www.youtube.com/embed/Z7D4mRC84HQ?controls=0"
                title="CHRONOFi Teaser"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div
              className="d-flex align-items-center col-12 col-lg-6 align-middle">
              <p
                className="text-center text-lg-start text-white mt-2 align-middle"
                id="what-is"
              >
                <span className="chronofitext fw-bold">CHRONOFi</span> is the
                first 2D &
                3D decentralized NFT Play-to-Earn on POLYGON Network. We are a
                blockchain-based NFT adventure game with 2D turn-based, 3D
                MMORPG Open World Game Play-to-Earn mechanics and Metaverse NFT
                Marketplace, in which anyone can earn tokens through skilled
                gameplay and contributions to the ecosystem. Players can engage
                in battle, collect items, and construct robots.
                <br/><br/>
                Allowing <span className="chronofitext fw-bold">CHRONOFi</span>
                community developers to create their own tools and experiences
                in the <span className="chronofitext">CHRONOFiverse</span>. Each
                unique NFT Robots will hold its intrinsic value complimenting
                the rarity, which can be traded in the game which will aggregate
                the floor price according to its attributes and activity.
              </p>
            </div>
          </div>

          <div className="text-center d-flex flex-column my-5">
            <div className="d-flex justify-content-center button-section">
              <img className="mt-5 mb-5" src={buttonWhy}/>
            </div>

            <div className="row mx-auto">
              <div className="col-lg-6 col-sm-12 mb-4">
                <div className="row row-cols-auto">
                  <div
                    className="col-4 float-start align-items-center my-auto icon-why">
                    <img src={aIcon} alt=""/>
                  </div>
                  <div className="col-8 float-start my-auto mx-auto text-why">
                    <p className="text-start text-white why-chronofi">
                      We will have two kinds of games: <br/>
                      2D turn-based games and 3D MMORPGs and Metaverse NFT
                      Marketplace.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 mb-4">
                <div className="row">
                  <div
                    className="col-4 float-start align-items-center my-auto icon-why">
                    <img src={bIcon}/>
                  </div>
                  <div className="col-8 float-start my-auto mx-auto text-why">
                    <p className="text-start text-white why-chronofi">
                      Innovative combination between Play-to-Earn and Metaverse
                      built cleverly upon an engaging story and plot.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mx-auto">
              <div className="col-lg-6 col-sm-12 mb-4">
                <div className="row">
                  <div
                    className="col-4 float-start align-items-center my-auto icon-why">
                    <img src={cIcon}/>
                  </div>
                  <div className="col-8 float-start my-auto mx-auto text-why">
                    <p className="text-start text-white why-chronofi">
                      AI personalization tech allows users to upload their
                      photos and create unique digital avatars.
                    </p>
                  </div>
                </div>

              </div>
              <div className="col-lg-6 col-sm-12 mb-4">
                <div className="row">
                  <div
                    className="col-4 float-start align-items-center my-auto icon-why">
                    <img src={dIcon} alt=""/>
                  </div>
                  <div className="col-8 float-start my-auto mx-auto text-why">
                    <p className="text-start text-white why-chronofi">
                      There is the ability to engage with crossover characters
                      from other universes such as Mecha or other
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}