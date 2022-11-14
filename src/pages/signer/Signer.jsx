import './signer.css';
import Topbar from '../../components/topbar/Topbar';
import Brand from '../../assets/brand.png';
import Influencer from '../../assets/influencer.png';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';

function Signer() {
    return (
        <div>
            <Topbar />
            <div className="loginer">
                <div className="loginer-brand">
                    <img src={Brand} alt="" />
                    <div className="loginer-text">Brand</div>
                    <Link to="/brandsignup"><button>Create Account</button></Link>
                </div>
                <div className="loginer-influencer">
                    <img src={Influencer} alt="" />
                    <div className="loginer-text">Influencer</div>
                    <Link to="/influencersignup"><button>Create Account</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signer