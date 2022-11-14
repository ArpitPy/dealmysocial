import './heroimage.css';
import HeroImage from '../../assets/hero.png';

function Heroimage() {
  return (
    <>
      <div className="herodesk">
        <div className="herodesktxt">
          <div className="heroheading">Biggest Marketplace Of Social Media Influencers!</div>
          <div className="herodesc">Hire Social Media Influencers For Your Brand Or Earn Money By Working For Brands</div>
          <button className='herobutton'>Join Now!</button>
        </div>
        <div className="herodeskimg">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </>
  )
}

export default Heroimage