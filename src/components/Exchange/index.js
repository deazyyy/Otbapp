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
import info from '../../images/icons/info-b.png';

import vimerco from '../../images/vimerco.png';
import { PieChart } from 'react-minimal-pie-chart';



class Exchange extends React.Component {
   
    render() {
        var content="";
        content += (<div className="table-body-row">
            <div>Silver</div>
            <div>234.0</div>
            <div>40%</div>
        </div>);
        
        return (
            <div className="stakevote-pg">
                <Navbar/>   
                <div className="Exchange_main_outer">
                    <div className="exchange_first_row">
                        <div className="col-width-25">
                            <div className="black-bx">
                                <h4>Order book <div>0.0000</div></h4>
                                <div className="stake-table-outer">
                                    <div className="table-head">
                                        <div>Price (IOST)</div>
                                        <div>Amount (OTBC)</div>
                                        <div></div>
                                    </div>
                                    <div className="table-body">
                                        <div className="table-body-row">
                                            <div className="red">18.95063083</div>
                                            <div>131.19311061</div>
                                            <div>2486.19220661</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-width-50">
                            <div className="black-bx">
                                <div className="stake-table-outer">
                                    <div className="table-head">
                                        <div>Last Price</div>
                                        <div>24H Change</div>
                                        <div>24H High</div>
                                        <div>24H Low</div>
                                        <div>24H Volume</div>
                                    </div>
                                    <div className="table-body">
                                        <div className="table-body-row">
                                            <div className="green">131.19311061</div>
                                            <div className="green">+19.84%</div>
                                            <div>20.42467992</div>
                                            <div>20.42467992</div>
                                            <div>20.42467992</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="exchange-blck-bx-outer">
                                <div className="black-bx Exchange_black-bx">
                                    <div className="Exchange_bs">
                                        <a className="btn-main active">Exchange</a>
                                        <a className="btn-main">Discounts</a>
                                        <a className="btn-main">Account</a>
                                    </div>
                                    <div className="form-group-outer">
                                        <div className="form-group">
                                            <label for="email">Balance: </label>
                                            <input type="email" class="form-control" placeholder="0.00000000" />
                                            <span>IOST</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Price: </label>
                                            <input type="" class="form-control" placeholder="0.00000000" />
                                            <span>IOST</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Amount:</label>
                                            <input type="" class="form-control" placeholder="0.00000000" />
                                            <span>OTBC</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Amount:</label>
                                            <div>
                                                <a className="btn_amount_selector">25%</a>
                                                <a className="btn_amount_selector">25%</a>
                                                <a className="btn_amount_selector">25%</a>
                                                <a className="btn_amount_selector">25%</a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Total:</label>
                                            <input type="" class="form-control" placeholder="0.00000000" />
                                        </div>
                                        <a className="btn-main">Login to Wallet</a>
                                    </div>
                                </div>
                                <div className="black-bx Exchange_black-bx">
                                    <div className="Exchange_bs">
                                        <a className="btn-main active">Exchange</a>
                                        <a className="btn-main">Discounts</a>
                                        <a className="btn-main">Account</a>
                                    </div>
                                    <div className="form-group-outer">
                                        <div className="form-group">
                                            <label for="email">Balance: </label>
                                            <input type="email" class="form-control" placeholder="0.00000000" />
                                            <span>IOST</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Price: </label>
                                            <input type="" class="form-control" placeholder="0.00000000" />
                                            <span>IOST</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Amount:</label>
                                            <input type="" class="form-control" placeholder="0.00000000" />
                                            <span>OTBC</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Amount:</label>
                                            <div>
                                                <a className="btn_amount_selector">25%</a>
                                                <a className="btn_amount_selector">25%</a>
                                                <a className="btn_amount_selector">25%</a>
                                                <a className="btn_amount_selector">25%</a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Total:</label>
                                            <input type="" class="form-control" placeholder="0.00000000" />
                                        </div>
                                        <a className="btn-main btn-red">Login to Wallet</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="col-width-25">
                            <div className="black-bx Exchange_black-bx Exchange_black-bx-right">
                                <div className="Exchange_bs">
                                    <a className="btn-main active">Exchange</a>
                                    <a className="btn-main">Discounts</a>
                                    <a className="btn-main">Account</a>
                                </div>
                                <div className="Exchange_bs Exchange_bs_search">
                                    <input type="email" class="form-control" placeholder="Search" />
                                    <a className="btn-main active">Change</a>
                                    <a className="btn-main">Volume</a>
                                </div>
                                <div className="stake-table-outer">
                                    <div className="table-head">
                                        <div>Price (IOST)</div>
                                        <div>Amount (OTBC)</div>
                                        <div>Change</div>
                                    </div>
                                    <div className="table-body">
                                        <div className="table-body-row">
                                            <div>18.95063083</div>
                                            <div>131.19311061</div>
                                            <div>0.00%</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="black-bx">
                                <h4>Recent Trades   <div>0.0000</div></h4>
                                <div className="stake-table-outer">
                                    <div className="table-head">
                                        <div>Price (IOST)</div>
                                        <div>Amount (OTBC)</div>
                                        <div>Time</div>
                                    </div>
                                    <div className="table-body">
                                        <div className="table-body-row">
                                            <div className="red">18.95063083</div>
                                            <div>131.19311061</div>
                                            <div>2486.19220661</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="Exchange_row">
                        <div className="black-bx">
                            <h4>Open Orders</h4>
                            <div className="stake-table-outer">
                                <div className="table-head">
                                    <div>Order ID:</div>
                                    <div>Symbol</div>
                                    <div>Type</div>
                                    <div>Price:</div>
                                    <div>Amount Fullfilled</div>
                                    <div>Requestes Amount:</div>
                                    <div>Status:</div>
                                    <div>Time:</div>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-row">
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="Exchange_row">
                        <div className="black-bx">
                            <h4>Order Hisory</h4>
                            <div className="stake-table-outer">
                                <div className="table-head">
                                    <div>Order ID:</div>
                                    <div>Symbol</div>
                                    <div>Type</div>
                                    <div>Price:</div>
                                    <div>Amount Fullfilled</div>
                                    <div>Requestes Amount:</div>
                                    <div>Status:</div>
                                    <div>Time:</div>
                                </div>
                                <div className="table-body">
                                    <div className="table-body-row">
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                        <div>-</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>

                    


                </div>
               
                <footer>
                    <Navbar/>
                    <div className="comp-logo">
                        <img src={vimerco} alt="icon"></img>
                    </div>
                </footer>
                
         </div>
      );
   }
}
export default Exchange;