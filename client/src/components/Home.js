import React, { Component } from 'react';
import Header from "./Header.js"
import "./Home.css"
function Home (){
  
        return (
            <div>
              <Header />
              <div className='show-me'>
                <h1>Why choose BuyPower?</h1>   
                <div className='parent'>
                    <div className='child'>
                    <div className="div-center">

                    </div>
                    <h2>Buy Now, Pay in 14 Days.</h2>
                           <p>You can Buy Electricity with a loan on Buypower.ng and payback in 14 days.</p>
                    </div>
                    <div className='child'>
                       <div className="div-center">
                           
                           </div> 
                           <h2>Buy Now, Pay in 14 Days.</h2>
                           <p>You can Buy Electricity with a loan on Buypower.ng and payback in 14 days.</p>
                    </div>
                    <div className='child'>
                        <div className="div-center">
                            

                        </div>
                        <h2>Pay with USSD.</h2>
                            <p>No internet? Buy Electricity by dialing *402*00009548*amount# on any kind of mobile device.</p>
                    </div>
                    <div className='child'>
                        <div className="div-center">
                            

                        </div>
                        <h2>Unit Calculator.</h2>
                            <p>You can calculate how many Electricity units you will get for the amount you plan to buy.</p>
                    </div>
                    <div className='child'>
                        <div className="div-center">
                           

                        </div>
                        <h2>Set Reminders.</h2>
                            <p>Let us remind you to Buy Electricity. Set a reminder date and we wont forget.</p>
                    </div>
                    <div className='child'>
                        <div className="div-center">
                          

                        </div>
                        <h2>Pay with Bank Transfers.</h2>
                            <p>Make payments via our Bank Transfer option and get value immedialtely.</p>
                       
                    </div>

                    
                 </div>   
            </div>  

            <div className='para'>
                <div className='para-parent'>
                    <div className='para-child cc'>
                        <h1>What our users are saying about us</h1>
                        <h3>See why we're rated 4.5 stars on the Playstore and Ranked 22 of 200 in finance on the App Store</h3>
                    </div>
                    <div className='para-child cb'>
                        <div className='child-back'>
                            <p>I've been using the Buypowerng app and it's superb. Highly recommended for all the busy type.</p>
                        <span>@saniusmangombe</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    
}

export default Home;