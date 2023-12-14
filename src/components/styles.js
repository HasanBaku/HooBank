import styled from "styled-components";

export const Header = styled.section `
  padding: 25px 0;
  display: flex;
  justify-content: center;
  background-color: #0f111d;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 1200px;
  }

  .left-header img {
    width: 130px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 25px;
    color: #fff;
    font-size: 1.2em;

    a {
      color: #fff;
      text-decoration: none;
    }

    img {
      width: 35px;
      display: none;
      cursor: pointer;
    }
  }

  .right-header-mobile {
    position: absolute;
    background: #37353e;
    top: 80px;
    right: 5vw;
    z-index: 10000;
    height: 200px;
    border-radius: 20px;
    display: none;

    ul {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 30px 60px 30px 25px;
      z-index: 10000;
    }

    &.animate {
      animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
  }

  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 1700px) {
    justify-content: space-around;
    padding: 25px;
    margin: 0;

    .container {
      padding: 0px 2vw 0px 2vw;
      width: 100%;
    }
  }

  @media screen and (max-width: 820px) {
    .right-header li {
      display: none;
    }
    ul img {
      display: block;
    }
  }
`;


export const Homes = styled.section `
padding: 70px 0;
display: flex;
justify-content: center;
overflow: hidden;
z-index: 1;
background: linear-gradient(to top left, #01264f 5%, #040c18 50%);
.container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 1200px;
}


.home-left{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 600px;
}
.discount{
    color: #aeaeb3;
    display:flex;
    align-items: center;
    background: linear-gradient(to bottom right, #2e2c2f 5%, #1e1d28 50%);
    padding: 3px 0px 3px 15px;
    border-radius: 10px;
    width: 350px;
    font-size: 1.1em;
}
.discount img{
    width: 12%;
}
.discount span{
    color: #fff;
    padding: 5px
}
.title-section{
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: start;
}
.upper-title{
    display: grid;
    grid-template-columns: 3fr 1fr;
}
.title-section h1{
    font-size: 4.5em;
    color: #fff;
    font-weight: bold;
    line-height: 1.5em;
}
.title-section h1 span{
    background: -webkit-linear-gradient(80deg, #3fbcd2, #daf6f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.circle-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 33px 0px;
    border: 2px solid #3fbcd2;
    border-radius: 100px;
    cursor: pointer;
}
.circle-text p{
    background: -webkit-linear-gradient(90deg, #3fbcd2, #daf6f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.3em
}
.circle-text p:first-child{
    margin-left: 10px;
}
.home-left p:last-child{
    color: #b3b1ac;
    font-size: 1.4em;
    line-height: 1.3em;
}
.home-left{
    width: 100%;
}
.home-right {
    width: 600px;
}
.home-right img{
    width: 100%;
}
.circle-text2{
    display: none;
}

.numbers{
    display: flex;
    justify-content: center;
}
.numbers p{
    color: #fff;
}

@media screen and (max-width: 1700px) {
    padding: 40px 0vw 40px 1vw;
    margin: 0;
    justify-content: space-around;

    .container{
        justify-content: space-between;
        padding: 40px 0vw 40px 2vw; 
        width: 100%;
    }
    .home-left{
        width: 600px;

    }
    .home-right{
        text-align: right;
    }
    .home-right{
        width: 100%;
    }
    .home-right img{
        width: 100%;
    }
}
@media screen and (max-width: 1250px) {
    .container{
        gap: 10%;
    }
    .home-left{
        width: 450px;
    }
    .upper-title{
        gap: 30px;
    }
    .circle-text{
        margin: 50 px 0px;
        padding: 35px;
    }
}
@media screen and (max-width: 1040px) {
    .container{
        grid-template-columns: 1fr;
        justify-content: space-around;
    }
    .upper-title h1{
        font-size: 4.5em;
    }
    .home-left{
        width: 600px;
        margin-left: 30px;
        margin-top: -20px;
    }
    
}

@media screen and (max-width: 650px) {
    .home-left{
        width: 90%;
    }

    .title-section h1{
        font-size: 3.5em;
    }
    .circle-text{
        display: none;
    }
    #circle-text2{
        display: block;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 33px 0px;
        border: 2px solid #3fbcd2;
        border-radius: 100px;
        cursor: pointer;
    }
    #circle-text2 p{
        background: -webkit-linear-gradient(90deg, #3fbcd2, #daf6f9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.3em;
    }
    #circle-text2 p:first-child{
        margin-left: 10px;
    }

}

`;




export const Container_numbers = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;
justify-content: center;
align-items: center;
position: relative;
width: 1300px;
margin-left: 100px;

.numbers{
    color: #fff;
    font-size: 2.3em;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.numbers span{
    font-size: 0.55em;
    padding-left: 15px;
    background: -webkit-linear-gradient(70deg, #3fbcd2, #daf6f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 1700px) {
    width: 100%;
}

@media screen and (max-width: 1040px) {
    
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-top: 10%;
        margin-left: 20%;

}
`

export const Info = styled.div `
padding: 25px 0;
display: flex;
justify-content: space-around;
background: linear-gradient(to bottom left, #01264f 5%, #040c18 50%);
position: relative;
`