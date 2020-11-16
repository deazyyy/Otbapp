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

import mkt1 from '../../images/icons/mkt1.png';
import Footer from '../Footer';
class Landing extends React.Component {
    render() {
        return (
            <div>
                <section className="banner-section wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.60s">
                    <Navbar/>
                    <div className="banner-info">
                        <h2>
                            Sustainable Exchange Made Very Simple
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed voluptua.
                        </div>
                        <a className="btn-main" href="#">Learn More</a>
                    </div>
                </section>

                <section className="promote-sec wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">
                    <div className="container">
                        <h4>Promoting Blockchain</h4>
                        <div className="section-info">
                            otbTrade is a sub-product developed by otbDev Corp. We strive to be a global leader in the blockchain industry. Our platform is designed to be easy to use and will be a stepping stone to multiple markets. We will be sharing a major part of our revenue with our users. This will allow users to truly optimize their trading and earning potential on the blockchain.
                        </div>
                    </div>
                </section>

                <section className="explore-sec wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">
                    <div className="container">
                        <h4>Explore Top Markets</h4>
                        <div className="section-info">
                            <div className="table-outer">
                                <div className="table-head">
                                    <div>Name</div>
                                    <div>Last Price (IOST)</div>
                                    <div>24h change</div>
                                    <div>24h Volume</div>
                                </div>
                                <div className="table-body">
                                    <div className="table-row">
                                        <div><span><img src={mkt1}></img>IOST</span></div>
                                        <div>0.00342</div>
                                        <div>3%</div>
                                        <div>345435436  </div>
                                    </div>
                                    <div className="table-row">
                                        <div><span><img src={mkt1}></img>IOST</span></div>
                                        <div>0.00342</div>
                                        <div>3%</div>
                                        <div>345435436  </div>
                                    </div>
                                    <div className="table-row">
                                        <div><span><img src={mkt1}></img>IOST</span></div>
                                        <div>0.00342</div>
                                        <div>3%</div>
                                        <div>345435436  </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="advantage-sec">
                    <div className="container">
                        <h4 className =" wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">Advantages of OTB</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="adv-bx wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.20s">
                                    <img src={adv1} alt="icon"></img>
                                    <h4>Secure</h4>
                                    <div className="adv-bx-info">
                                        otbTRADE is built on decentralized blockchain networks that are proven to meet the security needs of a decentralized economy.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="adv-bx  wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.20s">
                                    <img src={adv2} alt="icon"></img>
                                    <h4>Scalable</h4>
                                    <div className="adv-bx-info">
                                        otbTrade aims to be a cross-chain platform and will scale according to the demands of the economy
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="adv-bx wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.20s">
                                    <img src={adv3} alt="icon"></img>
                                    <h4>Innovative</h4>
                                    <div className="adv-bx-info">
                                        otbTRADE is a trading platform that is taking outside the box thinking to new levels, users will be able to trade all kinds of assets not just cryptocurrency.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="adv-bx wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.20s">
                                    <img src={adv4} alt="icon"></img>
                                    <h4>Decentralized</h4>
                                    <div className="adv-bx-info">
                                        You manage and own all of your funds and assets. otbTrade is just a smart contract that triggers your trades.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="roadmap-sec">
                    <div className="container">
                        <h4 className =" wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">Roadmap</h4>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="roadmap-bx wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.10s">
                                    <img src={roadmap1} alt="icon"></img>
                                    <h4>Q1</h4>
                                    <div className="roadmap-bx-info">
                                    Launched DEX on IOST <br/>
                                    Launched the 1st IOST <br/>
                                    Treasurehunt <br/>
                                    Atomic Swaps
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="roadmap-bx wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.80s">
                                    <img src={roadmap2} alt="icon"></img>
                                    <h4>Q2</h4>
                                    <div className="roadmap-bx-info">
                                    Launched DEX on IOST <br/>
                                    Launched the 1st IOST <br/>
                                    Treasurehunt <br/>
                                    Atomic Swaps
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="roadmap-bx wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.50s">
                                    <img src={roadmap3} alt="icon"></img>
                                    <h4>Q3</h4>
                                    <div className="roadmap-bx-info">
                                    Launched DEX on IOST <br/>
                                    Launched the 1st IOST <br/>
                                    Treasurehunt <br/>
                                    Atomic Swaps
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="roadmap-bx wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.20s">
                                    <img src={roadmap4} alt="icon"></img>
                                    <h4>Q4</h4>
                                    <div className="roadmap-bx-info">
                                    Launched DEX on IOST <br/>
                                    Launched the 1st IOST <br/>
                                    Treasurehunt <br/>
                                    Atomic Swaps
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>


                <section className="advantage-sec readystart-sec wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">
                    <div className="container">
                        <h4>Ready to start trading with otbTRADE?</h4>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="readystart-bx">
                                    Don't have a wallet? 
                                    <a className="btn-main" href="#">Create A Wallet</a>                                   
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="readystart-bx">
                                    Login to web/mobile wallet.
                                    <a className="btn-main" href="#">Login</a>                                   
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="readystart-bx">
                                    Start exploring our token pairs.
                                    <a className="btn-main" href="#">Start Trading</a>                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

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
export default Landing;