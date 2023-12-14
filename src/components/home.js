import React from 'react'
import {Homes} from "../components/styles"
import Discount from '../components/assets/Discount.svg'
import Robot from '../components/assets/robot.png'
import Arrow from "../components/assets/arrow-up.svg"

function Home() {
  return (
    <Homes>
        <div className="container">
        <div className="home-left">
            <p className='discount'><img src={Discount} alt="" /><span>20%</span> Discount For <span>1 Month Account</span></p>
            <div className="title-section">
                <div className="upper-title">
                    <h1 className='title'>The Next <span>Generation </span></h1>
                    <div className='circle-text'>
                        <p >Get <img src={Arrow} alt="" /> <br /></p>
                        <p>Started</p>
                    </div>
                </div>
                <h1 className='down-title'>Payment Method.</h1>
            </div>
            <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
        </div>
        <div className="home-right">
            <img src={Robot} alt="" />
        </div>
            <div id='circle-text2' className='circle-text2'>
                <p >Get <img src={Arrow} alt="" /> <br /></p>
                <p>Started</p>
            </div>
        </div>
    </Homes>
  )
}

export default Home