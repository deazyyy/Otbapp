import React from 'react';
import Navbar from '../Navbar/navbar';
import './style.css';
import Footer from '../Footer';
import vimerco from '../../images/vimerco.png';
import mkt from '../../images/icons/mkt2.png';
import info from '../../images/icons/info-b.png';
const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
class Exchange extends React.Component {
    
    IOSTChange()
    {
        var varrow="";
        var IOSTChange = [];

        for(var i=0;i<8;i++)
        {
            varrow = ( <div className="table-body-row">
            <div className="mktlogo"><img src={mkt} />18.95063083</div>
            <div>131.19311061</div>
            <div>0.00%</div>
        </div>);
            IOSTChange.push(varrow)
        }
        
        return IOSTChange;
    }
     OrderBook()
    {
        var varrow="";
        var OrderBook = [];
        var imax=29;
        for(var i=0;i<imax;i++)
        {
            if(i<(imax/2))
            {
                varrow = ( <div className="table-body-row">
                    <div className="red">18.95063083</div>
                    <div>131.19311061</div>
                    <div>2486.19220661</div>
                </div>);
            }else{
                varrow = ( <div className="table-body-row">
                    <div className="green">18.95063083</div>
                    <div>131.19311061</div>
                    <div>2486.19220661</div>
                </div>);
            }
           
            OrderBook.push(varrow)
        }
        
        return OrderBook;
    }


    RecentTrades()
    {
        var varrow="";
        var RecentTrades = [];
        var imax=14;
        for(var i=0;i<imax;i++)
        {
            if(i%2==0)
            {
                varrow = ( <div className="table-body-row">
                <div className="red">18.95063083</div>
                <div>131.19311061</div>
                <div>11/6/2020 9:15</div>
            </div>);
            }else{
                varrow = ( <div className="table-body-row">
                <div className="green">18.95063083</div>
                <div>131.19311061</div>
                <div>11/6/2020 9:15</div>
            </div>);
            }
           
            RecentTrades.push(varrow)
        }
        
        return RecentTrades;
    }

    render() {        
        return (
            <div className="stakevote-pg exchange-pg">
                <Navbar/>   
                <div className="Exchange_main_outer">
                    <div className="exchange_first_row">
                        <div className="col-width-25 exchangecol1">
                            <div className="black-bx">
                                <h4>Order book
                                    <div className="row_left-btns">
                                        <div class="dropdown">
                                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                                                8
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">4</a>
                                                <a class="dropdown-item" href="#">6</a>
                                                <a class="dropdown-item" href="#">10</a>
                                            </div>
                                        </div>
                                        <div className="tooltip_outer" data-tooltip="Hello, I am a Tooltip"><img  src={info} /></div>
                                    </div>
                                </h4>
                                <div className="stake-table-outer mb-2">
                                    <div className="table-head">
                                        <div>Price (IOST)</div>
                                        <div>Amount (OTBC)</div>
                                        <div></div>
                                    </div>
                                    <div className="table-body" id="OrderBook">
                                        {this.OrderBook()}
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
                            <div className="black-bx">
                                {/* <div>
                                    <Line
                                        data={state}
                                        options={{
                                            title:{
                                            display:true,
                                            text:'TradeChart',
                                            fontSize:20
                                            },
                                            legend:{
                                            display:true,
                                            position:'right'
                                            }
                                        }}
                                    />
                                </div> */}
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
                        
                        <div className="col-width-25 exchangecol2">
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
                                        {this.IOSTChange()}

                                    </div>
                                </div>
                                
                            </div>
                            <div className="black-bx">
                                <h4>Recent Trades
                                    <div className="row_left-btns">
                                        <div class="dropdown">
                                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                                                8
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">4</a>
                                                <a class="dropdown-item" href="#">6</a>
                                                <a class="dropdown-item" href="#">10</a>
                                            </div>
                                        </div>
                                        <div className="tooltip_outer" data-tooltip="Hello, I am a Tooltip"><img  src={info} /></div>
                                    </div>
                                </h4>
                                <div className="stake-table-outer">
                                    <div className="table-head">
                                        <div>Price (IOST)</div>
                                        <div>Amount (OTBC)</div>
                                        <div>Time</div>
                                    </div>
                                    <div className="table-body">
                                        {this.RecentTrades()}
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
                    <Footer/>
                    <div className="comp-logo">
                        <img src={vimerco} alt="icon"></img>
                    </div>
                </footer>
                
         </div>
      );
   }
}
export default Exchange;