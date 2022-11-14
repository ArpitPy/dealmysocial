import './brandlogin.css';
import Topbar from '../../components/topbar/Topbar';
import Footer from '../../components/footer/Footer';
import Brand from '../../assets/brand-login.png';

function Brandlogin() {
    return (
        <div>
            <Topbar />
            <div className="signup">
                <img className='loginimg' src={Brand} alt="" />
                <div className="login-form">
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

export default Brandlogin