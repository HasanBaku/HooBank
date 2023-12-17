import React from 'react'
import Airbnb from "../assets/airbnb.png"
import Binance from "../assets/binance.png"
import Coinbase from "../assets/coinbase.png"
import Dropbox from "../assets/dropbox.png"
import "../footer/footer.css"


function Footer() {

    var date = new Date();
    var currentDate = date.getFullYear();

  return (
    <section className='footer-section'>
    <div className="footer-container">

      <div className="images-section">
        <img src={Airbnb} alt="" />
        <img src={Coinbase} alt="" />
        <img src={Binance} alt="" />
        <img src={Dropbox} alt="" />
      </div>

      <div className="service-now">
        <div className="left-service">
            <h2>Let's try our service now!</h2>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="right-service">
            <button>Get Started</button>
        </div>
      </div>

      <footer>
            <div>
                <h4>GPT-3</h4>
                <h5 className='texts'>A new way to make the payments easy, reliable and secure.</h5>
            </div>

            <div>
                <h5>Useful Links</h5>
                <p>Content</p>
                <p>How it works</p>
                <p>Create</p>
                <p>Explore</p>
                <p>Terms & Service</p>
            </div>

            <div>
                <h5>Community</h5>
                <p>Help Center</p>
                <p>Partners</p>
                <p>Suggestions</p>
                <p>Blog</p>
                <p>Newsletter</p>
            </div>

            <div>
                <h5>Partner</h5>
                <p>Our Partner</p>
                <p>Become a Partner</p>
            </div>

      </footer>
      <hr />

      <p className='pro'>Copyright Ⓒ{currentDate} HooBank. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer
