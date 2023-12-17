import React from 'react'
import Start from "../assets/Star.svg"
import Shield from "../assets/Shield.svg"
import Send from "../assets/Send.svg"
import "../Features2/features2.css"


function Features2() {
  return (
    <section className="features2">
        <div className="container">
            <div className="left-part">
                <h2>You do the business, we'll handle the money.</h2>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button>Get Started</button>
            </div>
            <div className="right-part">
                <div className="icon-text">
                    <div className="left-icon-text">
                        <img src={Start} alt="" />
                    </div>
                    <div className="right-icon-text">
                        <h5>Rewards</h5>
                        <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                    </div>
                </div>

                <div className="icon-text">
                    <div className="left-icon-text">
                        <img src={Shield} alt="" />
                    </div>
                    <div className="right-icon-text">
                        <h5>100% Secured</h5>
                        <p>We take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </div>

                <div className="icon-text">
                    <div className="left-icon-text">
                        <img src={Send} alt="" />
                    </div>
                    <div className="right-icon-text">
                        <h5>Balance Transfer</h5>
                        <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features2
