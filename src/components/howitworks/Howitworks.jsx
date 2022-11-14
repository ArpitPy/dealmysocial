import './howitworks.css';
import InfluencerAD from '../../assets/influencerad.png';
import BusinessAD from '../../assets/businessad.png';
import HowItWorksImg from '../../assets/howitworks.png';
import {Link} from 'react-router-dom';

function Howitworks() {
  return (
    <div>
      <div className="howheading">How It Works?</div>
      <div className="howitworks">
        <div className="hiwimg">
          <img src={HowItWorksImg} alt="" />
        </div>
        <div className="hiwtext">
          <div className="howsubhead">Our working in 4 simple steps:</div>
          <div className="howdescs">
            <div className="howdesc">1️⃣ Brand signs an online contract with the influencer</div>
            <div className="howdesc">2️⃣ Brand deposits money to <span className='greentext'>Deal My Social</span></div>
            <div className="howdesc">3️⃣ Influencer completes the tasks mentioned in the contract</div>
            <div className="howdesc">4️⃣ <span className='greentext'>Deal My Social</span> releases money to the influencer</div>
          </div>
        </div>
      </div>
      <div className="getstarted">Get Started!</div>
      <div className="adimg">
        <Link to="/influencersignup"><img className='influencerad' src={InfluencerAD} alt="" /></Link>
        <Link to="/brandsignup"><img className='businessad' src={BusinessAD} alt="" /></Link>
      </div>
    </div>
  )
}

export default Howitworks