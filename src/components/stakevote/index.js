import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer';
import './style.css';

import adv1 from '../../images/icons/1.png';
import adv2 from '../../images/icons/2.png';
import adv3 from '../../images/icons/3.png';
import adv4 from '../../images/icons/4.png';



import roadmap1 from '../../images/icons/r1.png';
import roadmap2 from '../../images/icons/r2.png';
import flash from '../../images/icons/flash.png';
import info from '../../images/icons/info-b.png';

import vimerco from '../../images/vimerco.png';
import { PieChart } from 'react-minimal-pie-chart';
class StakeExchange extends React.Component {
    stakeholders()
    {
        var varrow="";
        var tenHolders = [];

        for(var i=0;i<10;i++)
        {
            varrow = (<div className="table-body-row">
            <div>Silver</div>
            <div>234.0</div>
            <div>40%</div>
            </div>);
            tenHolders.push(varrow)
        }
        
        return tenHolders;
    }
    render() {
       
        
        return (
            <div className="stakevote-pg">
                <Navbar/>
                <div className="container">
                    <div className="stake_heading_main wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.60s">
                        <h4>Staking & Vote</h4>
                        <div>
                        Earn OTBC's by voting for our node(s). You can earn more rewards by staking your OTBC's on our platform. <br/>
                        <span>Total Rewards Issued:</span> 349,762 IOST
                        </div>
                        
                    </div>

                    <div className="row stake_first_row">
                        <div className="col-md-12 col-lg-8 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                            <div className="black-bx">
                                <h4>Staking Power</h4>
                                <div className="staking-power-row">
                                    <div className="staking-powe-col1">
                                        Staking power is measured by the amount of IOST voted divided by 100. For example: If you have 100 IOST voted, you can only stake 1 OTBC.

                                        <div className="form-group-outer">
                                            <div className="form-group">
                                                <label className="form-max">Max</label>
                                               
                                                    <input type="email" class="form-control" placeholder="0.00000000" id="email" />
                                                    <span>OTBC</span>
                                                
                                            </div>
                                            <div className="form-group">
                                                <label className="form-stake">Staked</label>
                                                <input type="email" class="form-control" placeholder="0.00000000" id="email" />
                                                <span>OTBC</span>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-aval">Available</label>
                                                <input type="email" class="form-control" placeholder="0.00000000" id="email" />
                                                <span>OTBC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="staking-powe-col2">
                                        <div className="pie_heading">
                                            <label className="form-max">Max</label>
                                            <label className="form-aval">Available</label>
                                            <label className="form-stake">Staked</label>
                                        </div>
                                        <div className="pie-black">                                     
                                            <PieChart
                                            data={[
                                                { title: 'One', value: 10, color: '#5bdf7b' },
                                                { title: 'Two', value: 15, color: '#fbdd07' },
                                                { title: 'Three', value: 20, color: '#7f7f7f' },
                                            ]}
                                            />
                          
                                        </div>
                                   
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-12 col-lg-4 second_col wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
                            <div className="black-bx">
                                <h4>Stake OTBC's</h4>
                                <div className="form-group-outer">
                                    <div className="form-group">
                                        <input type="email" class="form-control" placeholder="0.00000000" id="email" />
                                        <div>
                                            <a href="" className="btn-main">Stake </a>
                                            <img src={info} style={{opacity:0}}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" class="form-control" placeholder="0.00000000" id="email" />
                                        <div>
                                            <a href="" className="btn-main">Unstake</a>
                                            <div className="tooltip_outer" data-tooltip="Hello, I am a Tooltip"><img  src={info} /></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" class="form-control" placeholder="0.00000000" id="email" />
                                        <div>
                                            <a href="" className="btn-main">Unstake<img  src={flash} className="flash" /></a>
                                            <div className="tooltip_outer" data-tooltip="Hello, I am a Tooltip"><img  src={info} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        
                    </div>



                    <div className="row stake_second_row wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="black-bx">
                                <h4>Staking Power <div>0.0000 <span>OTBC Daily</span></div></h4>
                                <div className="black-sbx">
                                    For every 250,000 IOST voted, you mine 1 OTBC per day.
                                </div>
                            </div>
                            <div className="black-bx">
                                <h4>IOST Voting Bonus: <div>0.0000 <span>IOST</span></div></h4>
                                <div className="black-sbx">
                                    <a className="btn-main">Claim</a>
                                </div>
                            </div>
                            <div className="black-bx">
                                <h4>IOST Staking Reward <div>0.0000 <span>IOST</span></div></h4>
                                <div className="black-sbx">
                                    <a className="btn-main">Claim</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4 second_col">
                            <div className="black-bx">
                                <h4>Staking Reward <div>0.0000 <span>IOST</span></div></h4>
                                <div className="black-sbx mb-3">
                                There are a total of 164200.2141635 OTBC staked on the network. You will earn 0 IOST for the next payout.
                                </div>
                                <h4>Vote For Our Node</h4>
                                <div className="form-group-outer">
                                    <div className="form-group">
                                        <label for="email">Node Total Votes</label>
                                        <div className="input_outer">
                                            <input type="email" class="form-control" placeholder="0.00000000" />
                                            <span>Votes</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Your Votes</label>
                                        <div className="input_outer">
                                            <input type="" class="form-control" placeholder="0.00000000" />
                                            <span>Votes</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Max</label>
                                        <div className="input_outer">
                                            <input type="" class="form-control" placeholder="0.00000000" />
                                            <span>OTBC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group-outer">
                                    <div className="form-group">
                                        <input type="email" class="form-control" placeholder="0.00000000" id="email" />
                                        <div>
                                            <a href="" className="btn-main">Vote </a>
                                            <img src={info} style={{opacity:0}}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" class="form-control" placeholder="0.00000000" id="email" />
                                        <div>
                                            <a href="" className="btn-main">Unvote </a>
                                            <div className="tooltip_outer" data-tooltip="Hello, I am a Tooltip"><img  src={info} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-sm-12 col-md-12 col-lg-4 second_col">
                            <div className="black-bx">
                                <h4>Top 10 Stakeholders</h4>
                                <div className="black-sbx">
                                There are a total of 164200.2141635 OTBC staked on the network. You will earn 0 IOST for the next payout.
                                </div>
                                <div className="stake-table-outer">
                                    <div className="table-head">
                                        <div>User</div>
                                        <div>Staked</div>
                                        <div>Percent</div>
                                    </div>
                                    <div className="table-body" id="tenStakeholders">
                                        {this.stakeholders()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
               
                <footer>
                    <Footer/>
                    <div className="comp-logo">
                        <img src={vimerco} alt="icon"></img>
                    </div>
                </footer>
                
         </div>
      );
   }
}
export default StakeExchange;