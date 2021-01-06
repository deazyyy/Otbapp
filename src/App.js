import './App.css';
import './animate.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Exchange from './views/Exchange';
import Events from './views/Events';
import Landing from './views/landing';
import StakeExchange from './views/stakevote';
import Login from './views/Login';
import Footer from './components/Footer';
import vimerco from './images/vimerco.png';

import './components/Modal/index.js';
import Modal from './components/Modal';

function App() {
  return (
    <Router>
    
      <Modal name="LotteryModal"/>
                <Modal name="SwapModal"/>
                <Modal name="PastWinners"/>
        <Route exact path="/" component={Landing} />
        <Route path="/stakevote" component={StakeExchange} />
        <Route path="/exchange" component={Exchange} />
        <Route path="/event" component={Events} />  
        <Route path="/login" component={Login} />  
        <footer>
                    <Footer/>
                    <div className="comp-logo">
                        <img src={vimerco} alt="icon"></img>
                    </div>
                </footer>
      </Router>
  );
}

export default App;
