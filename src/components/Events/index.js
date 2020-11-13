import React from 'react';
import Navbar from '../Navbar/navbar';
import './style.css';

import adv1 from '../../images/icons/1.png';
import adv2 from '../../images/icons/2.png';
import adv3 from '../../images/icons/3.png';
import adv4 from '../../images/icons/4.png';



import roadmap1 from '../../images/icons/r1.png';
import twitter from '../../images/icons/twitter.png';
import telegram from '../../images/icons/telegram.png';
import Treasure_map from '../../images/treasure_map.png';

import vimerco from '../../images/vimerco.png';
import { PieChart } from 'react-minimal-pie-chart';
class Events extends React.Component {
   
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
                <div className="Events_pg container">
                    <div className="events_head">
                        <h4>Treasure Hunt</h4>
                        otbTrade launches the first treasure hunt event on IOST. Join thousands of others to hunt for clues and attain wealth beyond measures.
                    </div>
                    <div className="black-bx">
                        <h4>Join the hunt...</h4>
                        <div className="events-info">
                            <div className="events-info-top">
                                
                                <div>
                                <img src={Treasure_map} ALIGN='left'></img>
                                This is a fun and engagin way for people to learn more about IOST and the DApps being built. The hunt wlll consist of 12 steps/clues. <br/><br/>
                                The GRAND PRIZE is an IOST wallet pre-loaded with 20000 IOST from otbTRADE as well as IRC20 tokens from dapps such as otbTRADE, Blockarcade, Metanyx, Jetstream and Ipirates <br/><br/>

                                Link to the wallet : <a href="https://www.iostabc.com/account/ioststart1">https://www.iostabc.com/account/ioststart1</a> <br/><br/>

                                The structure of the contest will run with 1 of the 12 clues being released every 4 days. This will occur for the next 48 days from the start date until all 12 clues have been released. The clues will be released via Twitter, Telegram and promoted through strategic IOST influencers. Each clue will have the #ioststarterwallet hashtag attached. Once a clue is solved the answer is the corresponding part of the mnemonic key. For a player to win they must correctly solve clues 1-12 and successfully unlock the Wallet using the 12 word mnemonic key to gain access to the coins. https://cobo.com/ is the wallet where you have to enter the mnemonic key to restore the wallet. <br/><br/>

                                Winners should remember to TRANSFER THE FUNDS TO ANOTHER IOST WALLET as soon as you gain access to the wallet as other players will be battling against you! Jetstream can help you create a wallet, check their telegram.<br/><br/>

                                We listed some partners and community DApps below. These guys are heavily involved in IOST. Make sure you follow the Twitter, Telegram and YouTube accounts where the clues will be randomly released. There will be more Treasure Hunts in the future. Prizes will be better and best of all you'll learn more about blockchain technology and DApps.
                                </div>
                                
                            </div>
                           
                        </div>

                        <div className="event-bx-outer">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="event-bx">
                                        <div className="profile_img">

                                        </div>
                                        <div className="usr-info">
                                            BlockArcade
                                            <div>
                                                <img src={twitter} ></img>
                                                <img src={telegram} ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="event-bx">
                                        <div className="profile_img">

                                        </div>
                                        <div className="usr-info">
                                            BlockArcade
                                            <div>
                                                <img src={twitter} ></img>
                                                <img src={telegram} ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="event-bx">
                                        <div className="profile_img">

                                        </div>
                                        <div className="usr-info">
                                            BlockArcade
                                            <div>
                                                <img src={twitter} ></img>
                                                <img src={telegram} ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="event-bx">
                                        <div className="profile_img">

                                        </div>
                                        <div className="usr-info">
                                            BlockArcade
                                            <div>
                                                <img src={twitter} ></img>
                                                <img src={telegram} ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="event-bx">
                                        <div className="profile_img">

                                        </div>
                                        <div className="usr-info">
                                            BlockArcade
                                            <div>
                                                <img src={twitter} ></img>
                                                <img src={telegram} ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="event-bx">
                                        <div className="profile_img">

                                        </div>
                                        <div className="usr-info">
                                            BlockArcade
                                            <div>
                                                <img src={twitter} ></img>
                                                <img src={telegram} ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <footer>
                   
                    <div className="comp-logo">
                        <img src={vimerco} alt="icon"></img>
                    </div>
                </footer>
                
         </div>
      );
   }
}
export default Events;