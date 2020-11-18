import React from 'react';
import logo from '../../images/logo.png';
import './style.css';
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
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                </div>
            </nav>
        );
    }
}

export default Footer;