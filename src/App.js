import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Exchange from './components/Exchange';
import Events from './components/Events';
import Landing from './components/landing';
import StakeExchange from './components/stakevote';

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
      </Router>
  );
}

export default App;
