import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from '../src/pages/homepage/Homepage';
import Brandlogin from '../src/pages/brandlogin/Brandlogin';
import Brandsignup from '../src/pages/brandsignup/BrandSignup';
import Influencerlogin from '../src/pages/influencerlogin/Influencerlogin';
import Influencersignup from '../src/pages/influencersignup/InfluencerSignup';
import Loginer from '../src/pages/loginer/Loginer';
import Signer from '../src/pages/signer/Signer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/brandlogin" element={<Brandlogin />} />
          <Route exact path="/brandsignup" element={<Brandsignup />} />
          <Route exact path="/influencerlogin" element={<Influencerlogin />} />
          <Route exact path="/influencersignup" element={<Influencersignup />} />
          <Route exact path="/loginer" element={<Loginer />} />
          <Route exact path="/signer" element={<Signer />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
