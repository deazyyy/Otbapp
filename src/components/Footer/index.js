import React from 'react';
import logo from '../../images/logo.png';
import './style.css';
import socialTele from '../../images/icons/telegram.png';
import socialQues from '../../images/icons/help-web-button.png';
import socialTwitter from '../../images/icons/twitter.png';
import wallet from '../../images/icons/wallet.png';
import { 
    Link, 
} from 'react-router-dom'; 

class Footer extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-sm ">
                <div className="left_nav">
                    <Link to="/" className="navbar-brand" >
                        <img src={logo} alt="logo"  />
                    </Link> 
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/exchange" className="nav-link" >Exchange</Link>   
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#pstwinnermdl">Past Winners</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#swapmdl">Atomic Swap</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/stakevote" className="nav-link" >Stake & Vote</Link>   
                        </li>
                        <li className="nav-item">
                            <Link to="/event" className="nav-link" >Events</Link>   
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#lotterymdl">Lottery</a>
                        </li>
                    </ul>
                </div>
              
                <div className="nav-social">
                    <a className="btn-main" href="#"><img src={wallet}></img>Login</a>
                    <img src={socialTele}></img>
                    <img src={socialTwitter}></img>
                    <img src={socialQues}></img>
                </div>
            </nav>
        );
    }
}

export default Footer;