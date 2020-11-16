import React from 'react';
import logo from '../../images/logo.png';
import './navbar.css';
import socialTele from '../../images/icons/telegram.png';
import socialQues from '../../images/icons/help-web-button.png';
import socialTwitter from '../../images/icons/twitter.png';

import { 
    Link, 
} from 'react-router-dom'; 

class Navbar extends React.Component{
     
    
    constructor(props) {
        super(props);
        this.state = {toogllenav: null,temptogl: 0};
        this.changetoogllenav = this.changetoogllenav.bind(this);
      }
      changetoogllenav()
      {
        this.setState({ toogllenav: !this.state.toogllenav ,temptogl:1})
        console.log(this.state.toogllenav)

      }
    render() {
 
        return (
            <nav className="navbar navbar-expand-sm wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">
                <div className="left_nav">
                    <Link to="/" className="navbar-brand" >
                        <img src={logo} alt="logo"  />
                    </Link> 
                    <div className="mobile-show hamburger">
                        <i class="fa fa-bars" onClick={this.changetoogllenav}></i>
                    </div>
                    <div className="mobile-hide">
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
                    
                </div>
                <div className="mobile-hide">
                    <div className="nav-social">
                        <a className="btn-main" href="#">Login</a>
                        <img src={socialTele}></img>
                        <img src={socialTwitter}></img>
                        <img src={socialQues}></img>
                    </div>
                </div>
                <div className={(this.state.temptogl == 1 ? 'nav_mobile_show' : 'nav_mobile_showx')} >
                    <div className={"nav_mobile " + (this.state.toogllenav ? 'nav_mobiles' : 'nav_mobileh')} data-wow-duration="1s" data-wow-delay="1s">
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
                        <div className="nav-social">
                            <a className="btn-main" href="#">Login</a>
                            <div>
                                <img src={socialTele}></img>
                                <img src={socialTwitter}></img>
                                <img src={socialQues}></img>
                            </div>
                        </div>
                    </div>
                </div>
                
            </nav>
        );
    }
}

export default Navbar;