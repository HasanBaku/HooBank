import React from 'react'
import Bill from "../assets/bill.png"
import Card from "../assets/card.png"
import Appstore from "../assets/apple.svg"
import Google from "../assets/google.svg"
import "../product/product.css"
import Airbnb from "../assets/airbnb.png"
import Binance from "../assets/binance.png"
import Coinbase from "../assets/coinbase.png"
import Dropbox from "../assets/dropbox.png"






function Product() {
  return (
    <section className="product">
        <div className="product-container">

            <div className="upper-left-product">
                <img className='bill' src={Bill} alt="" />
            </div>

            <div className="upper-right-product">
                <h2>Easily control your billing & invoicing</h2>
                <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className="phone-images">
                    <img src={Appstore} alt="" />
                    <img src={Google} alt="" />
                </div>
            </div>

            <div className="down-left-product">
                <h2>Find a better card deal in few easy steps.</h2>
                <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <button>Get Started</button>
            </div>

            <div className="down-right-product">
                <img className='card' src={Card} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Product
