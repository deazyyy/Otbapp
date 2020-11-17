import React from 'react';
import Navbar from '../Navbar/navbar';
import './style.css';

import adv1 from '../../images/icons/1.png';
import adv2 from '../../images/icons/2.png';
import adv3 from '../../images/icons/3.png';
import adv4 from '../../images/icons/4.png';



import roadmap1 from '../../images/icons/r1.png';
import roadmap2 from '../../images/icons/r2.png';
import roadmap3 from '../../images/icons/r3.png';
import roadmap4 from '../../images/icons/r4.png';

import vimerco from '../../images/vimerco.png';
import medal from '../../images/icons/medal.png';
import tickets from '../../images/icons/tickets.png';
import close from '../../images/icons/close.png';
class Modal extends React.Component {

    render() {
        if(this.props.name == "SwapModal")
        {
            return (  
                <div class="modal swap_modal" id="swapmdl">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <img src={close} className="close-modal" data-dismiss="modal"></img>
                            <h4>Start Swapping</h4>    
                            <div className="modal-text">We offer 300+ coins for Atomic Swap</div>  
                            <div className="modal-form-outer">
                                <label>You Send:</label>
                                <div className="modal-form-row">
                                    <input type="email" class="form-control" placeholder="0.00000000" />
                                    <div className="dropdown">
                                        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                        BTC
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Link 1</a>
                                            <a className="dropdown-item" href="#">Link 2</a>
                                            <a className="dropdown-item" href="#">Link 3</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-form-outer">
                                <label>You Get:</label>
                                <div className="modal-form-row">
                                    <input type="email" class="form-control" placeholder="0.00000000" />
                                    <div className="dropdown">
                                        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                                        BTC
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Link 1</a>
                                            <a className="dropdown-item" href="#">Link 2</a>
                                            <a className="dropdown-item" href="#">Link 3</a>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            <a className="btn-main">Swap</a>
                            <div className="swap_btm-2_btn">
                                <a className="btn-main">Tutorial</a>
                                <a className="btn-main">Track Others</a>
                            </div>                
                        </div>
                    </div>
                </div>   
            )
        }
        else if(this.props.name == "LotteryModal")
        {
            return (  
                <div class="modal lottery_modal" id="lotterymdl">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <img src={close} className="close-modal" data-dismiss="modal"></img>
                            <h4>Lottery Information</h4>    
                            <div className="modal-text">We offer 300+ coins for Atomic Swap</div>  
                            <div className="modal-form-outer">
                                <label>Lottery Reward Pool:</label>
                                <div className="modal-form-row">
                                    <input type="email" class="form-control" placeholder="0.00000000" />
                                    <span>IOST</span>
                                </div>
                            </div>
                            <div className="modal-form-outer">
                                <label>Total Lottery Tickets:</label>
                                <div className="modal-form-row">
                                    <input type="email" class="form-control" placeholder="0.00000000" />
                                    <span><img src={tickets}/></span>
                                </div>
                            </div>
                            <div className="modal-form-outer">
                                <label>You Send:</label>
                                <div className="modal-form-row">
                                    <input type="email" class="form-control" placeholder="0.00000000" />
                                    <span><img src={tickets}/></span>
                                </div>
                            </div>
                            <div className="modal-text modal-text-btm">
                                Earn lottery tickets by simply trading. Every fullfilled order earns a lottery ticket. 50% of otbTrade's revenue is given back to the community through the lottery pool. We draw 5 random winners every Monday at 12pm CST. Make more money trading with us.
                            </div>           
                        </div>
                    </div>
                </div>   
            )
        }

        else if(this.props.name == "PastWinners")
        {
            return (  
                <div className="modal pastwinner_modal" id="pstwinnermdl">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <img src={close} className="close-modal" data-dismiss="modal"></img>
                            <h4>Past Winners</h4>    
                            <div className="modal-text">We offer 300+ coins for Atomic Swap</div>  
                            <div className="pastwinner-row">
                                <h4>11/4/2020</h4>
                                <div className="pastwinner-innerbx">
                                    <img src={medal} className="medal"></img>
                                    <div><span>Winners : </span>tlopes, marcelo2802, bmierk, smwu2020, boricgold</div>
                                    <div><span>Win Amount : </span>1303.839002796</div>
                                    <div><span>Tx Hash : </span><span className="green">DWk5SiZ6sc7xrqGxEy2SeGkf7SBj3ApsTRkDugWbnNy5</span></div>
                                </div>
                            </div>
                            <div className="pastwinner-row">
                                <h4>11/4/2020</h4>
                                <div className="pastwinner-innerbx">
                                    <img src={medal} className="medal"></img>
                                    <div><span>Winners : </span>tlopes, marcelo2802, bmierk, smwu2020, boricgold</div>
                                    <div><span>Win Amount : </span>1303.839002796</div>
                                    <div><span>Tx Hash : </span><span className="green">DWk5SiZ6sc7xrqGxEy2SeGkf7SBj3ApsTRkDugWbnNy5</span></div>
                                </div>
                            </div>
                            <div className="pastwinner-row">
                                <h4>11/4/2020</h4>
                                <div className="pastwinner-innerbx">
                                    <img src={medal} className="medal"></img>
                                    <div><span>Winners : </span>tlopes, marcelo2802, bmierk, smwu2020, boricgold</div>
                                    <div><span>Win Amount : </span>1303.839002796</div>
                                    <div><span>Tx Hash : </span><span className="green">DWk5SiZ6sc7xrqGxEy2SeGkf7SBj3ApsTRkDugWbnNy5</span></div>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>   
            )
        }
   }
}
export default Modal;