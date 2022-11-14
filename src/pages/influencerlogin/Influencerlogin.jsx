import './influencerlogin.css';
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import Influencer from '../../assets/influencer-login.png';

function Influencerlogin() {
    return (
        <div>
            <Topbar />
            <div className="signup">
                <img className='signupimg' src={Influencer} alt="" />
                <div className="signup-form">
                    <div className="signup-text">Log In</div>
                    <form className='signup-box'>
                        <input placeholder="Email" type="email" required className='signupinput' />
                        <input placeholder='Password' type="password" minLength="8" required className='signupinput' />
                        <button type='submit' className='signupbutton'>Log In</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Influencerlogin