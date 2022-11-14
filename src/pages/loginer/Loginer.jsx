import './loginer.css';
import Topbar from '../../components/topbar/Topbar';
import Howitworks from '../../components/howitworks/Howitworks';

function Loginer() {
    return (
        <div>
            <Topbar />
            <Howitworks />
            <div className="loginer">
                <div className="loginer_brand">
                </div>
                <div className="loginer_influencer"></div>
            </div>
        </div>
    )
}

export default Loginer