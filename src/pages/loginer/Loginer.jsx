import './loginer.css';
import Topbar from '../../components/topbar/Topbar';
import Brand from '../../assets/brand.png';
import Influencer from '../../assets/influencer.png';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom'

function Loginer() {
    return (
        <div>
            <Topbar />
            <div className="loginer">
                <div className="loginer-brand">
                    <img src={Brand} alt="" />
                    <div className="loginer-text">Brand Login</div>
                    <Link to="/brandlogin"><button>Login</button></Link>
                </div>
                <div className="loginer-influencer">
                    <img src={Influencer} alt="" />
                    <div className="loginer-text">Influencer Login</div>
                    <Link to="/influencerlogin"><button>Login</button></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Loginer