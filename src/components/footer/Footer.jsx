import './footer.css';
import Logo from '../../assets/logo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer1">
            <div className="footerlogo">
              <img className='footerimg' src={Logo} alt="" />
            </div>
          </div>
          <div className="footer2">
            <a href="#">About Us</a>
            <a href="#">Community</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer3">
            <a href="#">FAQs</a>
            <a href="#">For Influencers</a>
            <a href="#">For Brands</a>
          </div>
          <div className="footer4">
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer</a>
            <a href="#">Guidelines</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footericon">
            <FacebookRoundedIcon style={{color:'#1dbf73'}} />
          </div>
          <div className="footericon">
            <InstagramIcon style={{color:'#1dbf73'}} />
          </div>
          <div className="footericon">
            <TwitterIcon style={{color:'#1dbf73'}} />
          </div>
          <div className="footericon">
            <LinkedInIcon style={{color:'#1dbf73'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer