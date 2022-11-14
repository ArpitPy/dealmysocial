import './heroimage.css';
import HeroImage from '../../assets/hero.png';

function Heroimage() {
  return (
    <>
      <img className='heroimage' src={HeroImage} alt="" />
      <div className="heroheading">Biggest Marketplace Of Social Media Influencers!</div>
      <div className="herodesc">Hire Social Media Influencers For Your Brand Or Earn Money By Working For Brands</div>
      <button className='herobutton'>Join Now!</button>
      <div className="mobile">
        <div className="heroheading1">Biggest Marketplace Of Social Media Influencers!</div>
        <div className="herodesc1">Hire Social Media Influencers For Your Brand Or Earn Money By Working For Brands</div>
        <button className='herobutton1'>Join Now!</button>
      </div>
    </>
  )
}

export default Heroimage